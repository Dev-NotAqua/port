# Contact Form Setup Guide

The contact form now supports real email delivery using EmailJS. Follow these steps to configure it:

## Option 1: EmailJS Setup (Recommended)

1. **Create an EmailJS account:**
   - Visit [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account

2. **Configure your email service:**
   - Add your email service (Gmail, Outlook, etc.)
   - Create an email template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{to_name}}` - Your name (Aqqua)

3. **Get your credentials:**
   - Service ID from the Email Services page
   - Template ID from the Email Templates page  
   - Public Key from the Account > API Keys page

4. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Fill in your EmailJS credentials:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

## Option 2: Demo Mode (Default)

If EmailJS is not configured, the contact form will run in demo mode:
- Shows success message
- Logs form data to browser console
- Doesn't send actual emails

## Testing

1. Fill out the contact form
2. Check browser console for demo logs (if not configured)
3. Check your email for real messages (if configured)

## Security Notes

- Environment variables are prefixed with `VITE_` to be accessible in the browser
- Never commit real credentials to version control
- EmailJS public key is safe to expose in frontend code