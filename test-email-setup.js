/**
 * Email Setup Testing Utility
 * Tests the EmailJS configuration for setsnewacc@gmail.com
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class EmailTester {
  constructor() {
    this.config = this.loadConfig();
  }

  loadConfig() {
    try {
      const envPath = join(__dirname, '.env');
      const envContent = readFileSync(envPath, 'utf-8');
      const config = {};
      
      envContent.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
          config[key.trim()] = value.trim();
        }
      });
      
      return config;
    } catch (error) {
      console.warn('⚠️  .env file not found, using demo mode');
      return {};
    }
  }

  validateConfiguration() {
    console.log('🔍 Validating Email Configuration...\n');
    
    const required = [
      'VITE_EMAILJS_SERVICE_ID',
      'VITE_EMAILJS_TEMPLATE_ID',
      'VITE_EMAILJS_PUBLIC_KEY'
    ];
    
    const missing = required.filter(key => !this.config[key] || this.config[key] === 'your_' + key.toLowerCase().replace('vite_', ''));
    
    if (missing.length > 0) {
      console.log('❌ Missing required configuration:');
      missing.forEach(key => console.log(`   - ${key}`));
      console.log('\n📋 Using demo mode - emails will not be sent');
      return false;
    }
    
    console.log('✅ All required EmailJS credentials configured');
    console.log(`📧 Target email: ${this.config.VITE_TARGET_EMAIL || 'setsnewacc@gmail.com'}`);
    console.log(`👤 Owner name: ${this.config.VITE_EMAIL_OWNER_NAME || 'Aqqua'}`);
    
    return true;
  }

  generateTestData() {
    return {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message from the portfolio contact form testing utility.',
      timestamp: new Date().toISOString()
    };
  }

  async runTests() {
    console.log('🚀 Starting Email Configuration Tests...\n');
    
    const isConfigured = this.validateConfiguration();
    const testData = this.generateTestData();
    
    console.log('\n📊 Test Configuration:');
    console.log(`   Service ID: ${this.config.VITE_EMAILJS_SERVICE_ID || 'Not configured'}`);
    console.log(`   Template ID: ${this.config.VITE_EMAILJS_TEMPLATE_ID || 'Not configured'}`);
    console.log(`   Public Key: ${this.config.VITE_EMAILJS_PUBLIC_KEY ? '✅ Set' : '❌ Missing'}`);
    
    console.log('\n🧪 Test Data:');
    console.log(`   From: ${testData.name} <${testData.email}>`);
    console.log(`   Message: ${testData.message}`);
    console.log(`   To: ${this.config.VITE_TARGET_EMAIL || 'setsnewacc@gmail.com'}`);
    
    if (isConfigured) {
      console.log('\n📝 Next Steps:');
      console.log('1. Visit https://dashboard.emailjs.com/admin');
      console.log('2. Verify your Gmail service is connected');
      console.log('3. Test the template with the above data');
      console.log('4. Check setsnewacc@gmail.com for test emails');
    } else {
      console.log('\n📝 Demo Mode Setup:');
      console.log('1. Contact form will log to browser console');
      console.log('2. User will see success message');
      console.log('3. No actual emails will be sent');
    }
    
    console.log('\n🎯 Testing Checklist:');
    console.log('□ Start development server: npm run dev');
    console.log('□ Open http://localhost:5173');
    console.log('□ Navigate to Contact section');
    console.log('□ Fill out form with test data');
    console.log('□ Check browser console for logs');
    console.log('□ Verify email received at setsnewacc@gmail.com (if configured)');
    
    return { isConfigured, testData };
  }
}

// Run tests if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const tester = new EmailTester();
  await tester.runTests();
}

export default EmailTester;