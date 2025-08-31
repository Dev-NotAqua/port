# Email Sender Deployment Checklist for setsnewacc@gmail.com

## ✅ Pre-Deployment Verification

### 1. Local Testing Complete
- [ ] Development server running on http://localhost:5173
- [ ] Contact form accessible and functional
- [ ] Email configuration tested with test script
- [ ] Demo mode fallback verified

### 2. EmailJS Configuration Required
**Before deploying to Vercel, you must complete these steps:**

#### EmailJS Account Setup
1. **Create account**: https://www.emailjs.com/
2. **Add Gmail service**: Connect setsnewacc@gmail.com
3. **Create template**: Use the provided template structure
4. **Get credentials**: Service ID, Template ID, Public Key

#### Template Configuration
```html
<h2>New Contact Message</h2>
<p><strong>From:</strong> {{from_name}} ({{from_email}})</p>
<p><strong>To:</strong> {{to_name}} ({{to_email}})</p>
<p><strong>Message:</strong></p>
<blockquote>{{message}}</blockquote>
<p><strong>Sent:</strong> {{timestamp}}</p>
```

### 3. Environment Variables
**Update `.env` with your actual credentials:**
```
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
VITE_TARGET_EMAIL=setsnewacc@gmail.com
VITE_EMAIL_OWNER_NAME=Aqqua
```

### 4. Vercel Deployment Steps

#### Environment Variables in Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add the same variables as in `.env` file
5. **Redeploy** after adding variables

#### Build Verification
```bash
npm run build
npm run preview
```

### 5. Post-Deployment Testing
- [ ] Visit production URL
- [ ] Test contact form submission
- [ ] Verify email received at setsnewacc@gmail.com
- [ ] Check spam folder
- [ ] Test on mobile devices
- [ ] Verify error handling

### 6. Monitoring Setup
- [ ] Check Vercel deployment logs
- [ ] Monitor EmailJS dashboard for usage
- [ ] Set up Gmail filters for portfolio emails
- [ ] Test monthly email limits (200 emails free plan)

## 🔧 Quick Commands

### Local Development
```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run test:email   # Validate email configuration
npm run build        # Build for production
npm run preview      # Preview production build
```

### Testing Commands
```bash
# Test email configuration
node test-email-setup.js

# Test contact form
# Visit http://localhost:5173 and use contact form
```

## 📧 Gmail Setup for setsnewacc@gmail.com

### Gmail Configuration
1. **Enable 2FA** on setsnewacc@gmail.com
2. **Create App Password** (if 2FA enabled)
3. **Check spam folder** regularly
4. **Set up filters** to organize portfolio emails

### Email Template Variables
- `{{from_name}}`: Sender's name
- `{{from_email}}`: Sender's email
- `{{message}}`: Message content
- `{{to_name}}`: Portfolio owner name
- `{{to_email}}`: setsnewacc@gmail.com
- `{{timestamp}}`: Current timestamp

## 🚨 Troubleshooting

### Common Issues
1. **Emails not received**: Check EmailJS service connection
2. **Gmail authentication**: Ensure proper OAuth setup
3. **Template variables**: Verify exact naming
4. **Environment variables**: Check Vercel deployment

### Debug Steps
1. Check browser console for logs
2. Verify EmailJS dashboard for sent emails
3. Check Gmail spam folder
4. Test with different email addresses

## 📊 Email Limits
- **Free plan**: 200 emails/month
- **Template size**: 2MB max
- **Requests**: 1,000/month
- **Services**: 3 max

## ✅ Final Checklist Before Going Live

- [ ] EmailJS credentials configured in Vercel
- [ ] setsnewacc@gmail.com verified and accessible
- [ ] Contact form tested on production URL
- [ ] Email delivery verified
- [ ] Error handling tested
- [ ] Mobile responsiveness confirmed
- [ ] Performance optimized
- [ ] Security headers configured (vercel.json)