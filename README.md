# Professional Portfolio Website

A modern, animated portfolio website built with React, Tailwind CSS, DaisyUI, and Framer Motion.

## Features

- ✨ **Animated Hero Section** with particle background
- 📱 **Fully Responsive** design
- 🎨 **Dark Theme** with DaisyUI components
- 🚀 **Smooth Animations** using Framer Motion
- 📜 **Scroll-based Reveals** for content sections
- 🎯 **Tabbed Showcase** (Projects, Certificates, Tech Stack)
- 📧 **Contact Form** with social links
- ⚡ **Fast Performance** with Vite

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- DaisyUI
- Framer Motion
- React Particles (tsparticles)
- React Router

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

1. **Hero Section**: Edit `src/components/Hero.jsx` to update your name, role, and intro text
2. **About Section**: Modify `src/components/About.jsx` with your personal information
3. **Projects**: Update the projects array in `src/components/Projects.jsx`
4. **Certificates**: Update the certificates array in `src/components/Certificates.jsx`
5. **Tech Stack**: Modify the skills in `src/components/TechStack.jsx`
6. **Contact**: Update social links and email in `src/pages/Contact.jsx`

### Styling

The project uses Tailwind CSS with DaisyUI. You can customize:
- Colors: Edit `tailwind.config.js` to change the theme
- Components: Modify component classes directly
- Animations: Adjust Framer Motion variants in components

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar
│   ├── ParticleBackground.jsx  # Animated particle background
│   ├── Hero.jsx            # Hero section with animated text
│   ├── About.jsx           # About me section
│   ├── Showcase.jsx        # Tabbed showcase container
│   ├── Projects.jsx        # Projects view
│   ├── Certificates.jsx    # Certificates view
│   └── TechStack.jsx       # Tech stack view
├── pages/
│   ├── Home.jsx            # Home page
│   └── Contact.jsx         # Contact page
├── App.jsx                 # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## Features Explained

### Particle Background
The interactive particle background is implemented using `react-particles` and `tsparticles-slim`. Particles respond to mouse hover and clicks.

### Scroll Animations
All sections use Framer Motion's `useInView` hook to trigger animations when they come into view. Content appears one-by-one with smooth fade and slide effects.

### Tabbed Showcase
The showcase section uses a tabbed interface that smoothly transitions between Projects, Certificates, and Tech Stack views using Framer Motion's `AnimatePresence`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own portfolio!
