# TakeOff Media Landing Page

Professional landing page for TakeOff Media - Automated SEO for Solo Entrepreneurs.

## Deployment Instructions

### Deploy to Vercel

1. **Initialize Git Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial landing page setup"
   ```

2. **Push to GitHub:**
   - Create a new repository on GitHub
   - Connect your local repository:
   ```bash
   git remote add origin https://github.com/yourusername/takeoff-media-landing.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Connect your GitHub account
   - Import your repository
   - Vercel will automatically deploy using the `vercel.json` configuration
   - Your site will be available at: `https://takeoff-media.vercel.app` (or similar)

### Local Development

Run locally using Python's built-in server:
```bash
npm run dev
# or
python3 -m http.server 3000
```

Visit `http://localhost:3000` to view the site.

## Features

- **Responsive Design:** Works perfectly on desktop, tablet, and mobile
- **Professional Styling:** Bold, modern design that converts
- **Form Handling:** Email capture with validation and feedback
- **Performance Optimized:** Fast loading with modern web standards
- **SEO Ready:** Proper meta tags and semantic HTML
- **Analytics Ready:** Easy integration with Google Analytics and Facebook Pixel

## Customization

### Adding Analytics

1. **Google Analytics 4:**
   Add this to the `<head>` section of `index.html`:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

2. **Facebook Pixel:**
   Add this to the `<head>` section of `index.html`:
   ```html
   <!-- Facebook Pixel Code -->
   <script>
   !function(f,b,e,v,n,t,s)
   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
   n.queue=[];t=b.createElement(e);t.async=!0;
   t.src=v;s=b.getElementsByTagName(e)[0];
   s.parentNode.insertBefore(t,s)}(window, document,'script',
   'https://connect.facebook.net/en_US/fbevents.js');
   fbq('init', 'YOUR_PIXEL_ID');
   fbq('track', 'PageView');
   </script>
   ```

### Email Integration

Currently, emails are stored in localStorage. To integrate with a real service:

1. **Mailchimp:** Replace the form submission in `script.js`
2. **ConvertKit:** Add ConvertKit form endpoint
3. **Custom Backend:** Send emails to your API endpoint

## File Structure

```
├── index.html          # Main landing page
├── styles.css          # All styling and responsive design
├── script.js           # Form handling and interactions
├── vercel.json         # Vercel deployment configuration
├── package.json        # Project metadata
└── Media/              # Brand assets and images
```

## Brand Assets

The landing page uses the transparent logo from `Media/takeoff logo transparent.png`. Ensure this file exists for proper branding display.

## Performance

- Optimized images and fonts
- Minimal JavaScript for fast loading
- CSS optimized for critical rendering path
- Proper caching headers via Vercel configuration

## Support

For questions or modifications, contact the development team or refer to the CLAUDE.md file for context about the business and brand guidelines.