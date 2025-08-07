# Portfolio Website

A modern, animated portfolio website built with React, TypeScript, and Framer Motion. Features smooth scroll animations, glass morphism effects, and a command palette interface.

## 🚀 Features

- **Modern Design**: Clean, professional design with glass morphism effects
- **Smooth Animations**: Powered by Framer Motion for seamless interactions
- **Responsive**: Fully responsive design that works on all devices
- **Command Palette**: Quick navigation with ⌘K keyboard shortcut
- **Performance Optimized**: Optimized for fast loading and smooth performance
- **SEO Ready**: Optimized meta tags and semantic HTML
- **Dark Theme**: Beautiful dark theme with purple accent colors

## 🛠️ Technologies Used

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Vercel** - Deployment

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🚀 Deployment to Vercel

### Method 1: Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel --prod
```

### Method 2: GitHub Integration

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Method 3: Manual Upload

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [Vercel](https://vercel.com)

## 🎨 Customization

### Personal Information

Update your personal information in `constants.tsx`:

- Personal details
- Skills and proficiency levels
- Projects showcase
- Contact information

### Colors and Styling

Customize the color scheme in `index.css`:
- Primary colors (purple/pink gradients)
- Background colors
- Glass morphism effects
- Animation timings

### Sections

- **Hero** - Introduction and main CTA
- **About** - Personal story and experience
- **Skills** - Technical skills with proficiency rings
- **Projects** - Portfolio showcase with filtering
- **Contact** - Contact form and social links

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Projects grid
│   ├── ProjectCard.tsx # Individual project card
│   ├── Contact.tsx     # Contact form
│   └── SectionHeader.tsx # Reusable section headers
├── constants.tsx       # Data and configuration
├── types.ts           # TypeScript types
├── index.css          # Global styles
└── App.tsx            # Main application
```

## 🎯 Performance Features

- **Optimized Images**: SVG icons for scalability
- **Code Splitting**: Automatic code splitting with Vite
- **Lazy Loading**: Images and components load as needed
- **Caching**: Optimized caching headers with Vercel
- **Compression**: Automatic compression of assets

## 🔄 Animations & Interactions

- **Scroll-triggered animations** for all sections
- **Hover effects** on cards and buttons
- **Parallax effects** on background elements
- **Staggered animations** for list items
- **Smooth transitions** throughout

## 📱 Responsive Design

- **Mobile-first** approach
- **Flexible grid layouts**
- **Touch-friendly** interactions
- **Optimized typography** scaling

## 🔍 SEO Optimization

- **Semantic HTML** structure
- **Meta tags** for social sharing
- **Open Graph** tags
- **Schema markup** ready
