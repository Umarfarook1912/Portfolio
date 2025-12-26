# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- ✨ Modern and responsive design
- 🎨 Custom color theme (Light Green #50ca71, Dark Green #169b46)
- 📱 Mobile-first approach
- ⚡ Fast performance with Vite
- 🎯 Reusable components
- 📝 Form validation with React Hook Form
- 🔄 Data management with TanStack Query
- 🎭 Smooth animations with Tailwind CSS

## Sections

- **Header** - Navigation menu with smooth scrolling
- **Hero** - Image on left, content on right with social links
- **Work Experience** - Professional journey with GitHub and project links
- **Projects** - Showcase of your projects
- **Education** - Academic background
- **Technical Skills** - Programming languages with proficiency indicators
- **Internships** - Internship experiences
- **Certifications** - Professional certifications
- **Achievements** - Awards and accomplishments
- **Contact** - Contact form with validation
- **Footer** - Social media links and copyright

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── index.js
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── WorkExperience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── TechnicalSkills.jsx
│   │   ├── Internship.jsx
│   │   ├── Certifications.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── index.js
│   └── ui/
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── Container.jsx
│       ├── Section.jsx
│       ├── SectionTitle.jsx
│       └── index.js
├── constants/
│   ├── theme.js
│   ├── routes.js
│   └── social.js
├── data/
│   └── portfolio.json
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Customization

### 1. Update Personal Information

Edit `src/data/portfolio.json` with your personal information:
- Hero section details
- Work experience
- Projects
- Education
- Skills
- Internships
- Certifications
- Achievements

### 2. Update Social Links

Edit `src/constants/social.js` with your social media links.

### 3. Add Your Profile Image

Place your profile image in the `public` folder as `profile.jpg` or update the image path in the JSON data.

### 4. Customize Colors

The theme colors are defined in:
- `tailwind.config.js` - Main color configuration
- `src/constants/theme.js` - Color constants

Current theme:
- Light Green: `#50ca71`
- Dark Green: `#169b46`

### 5. Update Technical Skills

To add or update skills, edit the `technicalSkills` array in `src/data/portfolio.json`. Use icon URLs from [Devicon](https://devicon.dev/) or any other icon service.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Hook Form** - Form validation
- **TanStack Query** - Data fetching
- **React Icons** - Icon library

## Best Practices Followed

- ✅ Component files under 200 lines
- ✅ Reusable UI components
- ✅ Proper folder structure
- ✅ Global constants
- ✅ Responsive design
- ✅ Accessibility features
- ✅ Clean and maintainable code

## License

MIT License - Feel free to use this for your own portfolio!

## Support

For any questions or issues, please open an issue on GitHub.
