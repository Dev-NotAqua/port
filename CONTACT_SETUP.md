# Contact Form Setup Guide

The contact form now supports real email delivery using EmailJS with Gmail integration for setsnewacc@gmail.com. Follow these steps to configure it:

## Option 1: EmailJS Setup with Gmail (Recommended)

### 1. Create EmailJS Account
- Visit [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email address

### 2. Configure Gmail Service
- Go to **Email Services** → **Add New Service**
- Select **Gmail** as the service
- Name it "Gmail Service" or similar
- Connect your Gmail account (setsnewacc@gmail.com)
- Grant necessary permissions for email sending

### 3. Create Email Template
- Go to **Email Templates** → **Create New Template**
- Template name: "Contact Form Portfolio"
- Subject: "New Contact Message from Portfolio"
- Use this template content:

```html
<h2>New Contact Message</h2>
<p><strong>From:</strong> {{from_name}} ({{from_email}})</p>
<p><strong>To:</strong> {{to_name}} ({{to_email}})</p>
<p><strong>Message:</strong></p>
<blockquote>{{message}}</blockquote>
<p><strong>Sent:</strong> {{timestamp}}</p>
```

### 4. Configure Template Variables
Ensure your template includes these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content
- `{{to_name}}` - Your name (Aqqua)
- `{{to_email}}` - setsnewacc@gmail.com
- `{{timestamp}}` - Current timestamp

### 5. Get Your Credentials
- **Service ID**: From Email Services page (e.g., `service_abc123`)
- **Template ID**: From Email Templates page (e.g., `template_xyz789`)
- **Public Key**: From Account → API Keys page (starts with your user ID)

### 6. Configure Environment Variables
- Copy `.env.example` to `.env`
- Update with your actual credentials:
  ```
  VITE_EMAILJS_SERVICE_ID=your_actual_service_id
  VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
  VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
  VITE_TARGET_EMAIL=setsnewacc@gmail.com
  VITE_EMAIL_OWNER_NAME=Aqqua
  ```

## Option 2: Demo Mode (Default)

If EmailJS is not configured, the contact form will run in demo mode:
- Shows success message to user
- Logs form data to browser console
- Doesn't send actual emails
- Includes timestamp and target email in logs

## Local Testing

### Test EmailJS Configuration
1. Fill out the contact form with test data
2. Check browser console for confirmation logs
3. Verify email is received at setsnewacc@gmail.com
4. Test error handling by temporarily breaking configuration

### Demo Mode Testing
1. Ensure `.env` file is empty or missing EmailJS credentials
2. Fill out contact form
3. Check browser console for demo logs
4. Verify success message appears

## Gmail Setup Verification

### Before Deployment
1. **Test with Gmail account**: Ensure setsnewacc@gmail.com can receive emails
2. **Check spam folder**: Verify emails aren't going to spam
3. **Test multiple browsers**: Chrome, Firefox, Safari
4. **Test mobile responsiveness**: iOS Safari, Android Chrome

### EmailJS Limits (Free Plan)
- 200 emails per month
- 2MB attachment limit
- 1,000 requests per month
- 3 services max

## Troubleshooting

### Common Issues
1. **Gmail not receiving emails**: Check EmailJS service connection
2. **Template variables not working**: Verify exact variable names in template
3. **CORS errors**: Ensure public key is correctly configured
4. **Environment variables not loading**: Restart dev server after changes

### Debug Mode
Add `console.log` statements in the Contact component to debug:
- Service ID, Template ID, and Public Key values
- Email sending status
- Error messages from EmailJS

## Security Notes

- Environment variables are prefixed with `VITE_` to be accessible in the browser
- Never commit real credentials to version control (`.env` is in `.gitignore`)
- EmailJS public key is safe to expose in frontend code
- Gmail account should have 2FA enabled for security
- Consider using App Passwords for Gmail if 2FA is enabled

## Vercel Deployment

### Environment Variables for Production
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add the same variables as in `.env` file
3. Redeploy after adding variables

### Post-Deployment Testing
1. Test contact form on production URL
2. Verify emails are received at setsnewacc@gmail.com
3. Check Vercel logs for any errors
4. Test form on mobile devices