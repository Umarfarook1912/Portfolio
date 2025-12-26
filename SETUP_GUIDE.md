# Portfolio Setup Guide

## Quick Start

Your portfolio website is now ready! Follow these steps to get started:

## 1. Start Development Server

Open a terminal and run:
```bash
cd d:\Portfolio
npm run dev
```

The site will be available at `http://localhost:5173`

## 2. Customize Your Content

### Update Personal Data
Edit the file: `src/data/portfolio.json`

This file contains all your:
- Personal information (name, title, description)
- Work experience
- Projects
- Education
- Technical skills
- Internships
- Certifications
- Achievements

### Update Social Links
Edit the file: `src/constants/social.js`

Update your:
- GitHub profile URL
- LinkedIn profile URL
- Twitter profile URL
- Email address

### Add Your Profile Picture
1. Add your profile image to the `public` folder
2. Name it `profile.jpg` (or update the path in `src/data/portfolio.json`)

Recommended image size: 800x800px or larger (square format)

## 3. Customize Colors

The portfolio uses your specified color theme:
- **Light Green**: `#50ca71`
- **Dark Green**: `#169b46`

To modify colors:
- Edit `tailwind.config.js` for theme colors
- Edit `src/constants/theme.js` for color constants

## 4. Technical Skills Icons

The technical skills section uses icon URLs. You can get icons from:
- **Devicon**: https://devicon.dev/
- **Simple Icons**: https://simpleicons.org/
- Or use any image URL

Example:
```json
{
  "name": "React",
  "logoUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "proficiency": 85
}
```

## 5. Contact Form Setup (Optional)

The contact form currently logs to console. To make it functional:

### Option A: EmailJS (Recommended for static sites)
1. Sign up at https://www.emailjs.com/
2. Get your service ID, template ID, and public key
3. Install EmailJS: `npm install @emailjs/browser`
4. Update `src/components/sections/Contact.jsx` to use EmailJS

### Option B: Custom Backend API
1. Create your own backend API endpoint
2. Update the `onSubmit` function in `src/components/sections/Contact.jsx`
3. Add API URL to `.env.local`

## 6. Build for Production

When ready to deploy:
```bash
npm run build
```

This creates optimized files in the `dist` folder.

## 7. Deploy Your Portfolio

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project on https://vercel.com
3. Deploy automatically

### Netlify
1. Push your code to GitHub
2. Import project on https://netlify.com
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages
```bash
npm install gh-pages --save-dev
```
Add to package.json scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

## Project Structure Overview

```
Portfolio/
├── public/              # Static assets
│   └── profile.jpg     # Your profile image
├── src/
│   ├── components/     # React components
│   │   ├── layout/    # Header & Footer
│   │   ├── sections/  # Page sections
│   │   └── ui/        # Reusable UI components
│   ├── constants/     # Global constants
│   ├── data/          # JSON data files
│   ├── App.jsx        # Main app component
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles
├── tailwind.config.js # Tailwind configuration
└── package.json       # Dependencies
```

## Component Guidelines

Each component follows these rules:
- ✅ Maximum 200 lines per file
- ✅ Reusable and modular
- ✅ PropTypes for type checking
- ✅ Responsive design
- ✅ Accessible (ARIA labels, semantic HTML)

## Common Customizations

### Change Navigation Items
Edit: `src/constants/routes.js`

### Modify Section Order
Edit: `src/App.jsx` - reorder the section components

### Add New Section
1. Create new component in `src/components/sections/`
2. Add data to `src/data/portfolio.json`
3. Import and add to `src/App.jsx`

### Change Animations
Edit: `tailwind.config.js` - modify keyframes and animations

## Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Clear Node Modules
```bash
rm -rf node_modules
npm install
```

### Build Errors
Check that all imports are correct and all required packages are installed.

## Need Help?

- Check the main README.md for detailed documentation
- Review component files for examples
- Check Tailwind CSS docs: https://tailwindcss.com
- Check React docs: https://react.dev

## Next Steps

1. ✅ Update `src/data/portfolio.json` with your information
2. ✅ Add your profile picture to `public/profile.jpg`
3. ✅ Update social links in `src/constants/social.js`
4. ✅ Test the site locally with `npm run dev`
5. ✅ Customize colors if needed
6. ✅ Set up contact form functionality
7. ✅ Build and deploy!

Happy coding! 🚀
