import { useState, useEffect, useRef } from 'react';

interface ScrollData {
  scrollY: number;
  scrollYProgress: number;
  scrollDirection: 'up' | 'down' | null;
}

interface UseOptimizedScrollOptions {
  throttleMs?: number;
  enableDirection?: boolean;
}

/**
 * Optimized scroll hook that uses a single scroll listener with requestAnimationFrame
 * to provide scroll data to multiple components efficiently
 */
export const useOptimizedScroll = (options: UseOptimizedScrollOptions = {}): ScrollData => {
  const { throttleMs = 16, enableDirection = false } = options; // 16ms ≈ 60fps
  
  const [scrollData, setScrollData] = useState<ScrollData>({
    scrollY: 0,
    scrollYProgress: 0,
    scrollDirection: null,
  });
  
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateScrollData = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollYProgress = documentHeight > 0 ? scrollY / documentHeight : 0;
      
      let scrollDirection: 'up' | 'down' | null = null;
      if (enableDirection) {
        if (scrollY > lastScrollY.current) {
          scrollDirection = 'down';
        } else if (scrollY < lastScrollY.current) {
          scrollDirection = 'up';
        }
        lastScrollY.current = scrollY;
      }

      setScrollData({
        scrollY,
        scrollYProgress,
        scrollDirection,
      });
      
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        if (throttleMs > 0) {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          timeoutRef.current = setTimeout(() => {
            requestAnimationFrame(updateScrollData);
          }, throttleMs);
        } else {
          requestAnimationFrame(updateScrollData);
        }
        ticking.current = true;
      }
    };

    // Initial call
    updateScrollData();
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [throttleMs, enableDirection]);

  return scrollData;
};

/**
 * Hook for components that only need scroll progress (0-1)
 */
export const useScrollProgress = (throttleMs = 16): number => {
  const { scrollYProgress } = useOptimizedScroll({ throttleMs });
  return scrollYProgress;
};

/**
 * Hook for components that need scroll position
 */
export const useScrollPosition = (throttleMs = 16): number => {
  const { scrollY } = useOptimizedScroll({ throttleMs });
  return scrollY;
};