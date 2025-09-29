# 💇‍♀️ Salon Revive

A modern, responsive salon website built with React, TypeScript, and Bootstrap.

## 🌟 Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Service Showcase**: Detailed service descriptions and pricing
- **Gallery**: Beautiful image gallery showcasing salon work
- **Contact Information**: Easy access to booking and contact details
- **Performance Optimized**: Fast loading times and smooth user experience

## 🚀 Live Demo

Visit the live website: [https://salon-revive.vercel.app](https://salon-revive.vercel.app)

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Bootstrap 5 + Custom CSS
- **Build Tool**: Vite
- **Icons**: Bootstrap Icons
- **Deployment**: Vercel/GitHub Pages

## 📋 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Dilshanushara/Salon-Revive.git
   cd Salon-Revive
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

### Pull Request Process

- 📖 **New to merging PRs?** Check out [`QUICK_MERGE_REFERENCE.md`](./QUICK_MERGE_REFERENCE.md)
- 📚 **Detailed guide**: See [`PR_MERGE_GUIDE.md`](./PR_MERGE_GUIDE.md) for comprehensive instructions
- 🔍 **Before submitting**: Ensure your code builds successfully with `npm run build`

### Development Guidelines

1. **Code Style**: Follow TypeScript and React best practices
2. **Responsive Design**: Ensure all changes work on mobile devices
3. **Performance**: Keep bundle size and loading times optimized
4. **Accessibility**: Maintain accessibility standards
5. **Testing**: Test changes thoroughly before submitting

## 📁 Project Structure

```
salon-revive/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── components/        # Reusable React components
│   │   ├── footer/        # Footer component
│   │   └── header/        # Header/Navigation component
│   ├── pages/             # Page components
│   │   ├── about/         # About section
│   │   ├── gallery/       # Image gallery
│   │   ├── home/          # Hero section
│   │   └── services/      # Services showcase
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # App entry point
│   └── index.css          # Global styles
├── PR_MERGE_GUIDE.md      # Comprehensive PR merge guide
├── QUICK_MERGE_REFERENCE.md # Quick reference for merging
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Colors
The primary accent color is defined as `#b9a87a` (golden). You can customize this throughout the codebase.

### Images
Replace images in the `src/assets/images/` directory with your own salon photos.

### Content
Update text content in the respective component files to match your salon's information.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### GitHub Pages
```bash
npm run deploy
```

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on every push to master

### Other Platforms
The `dist` folder contains the built application ready for deployment to any static hosting service.

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/Dilshanushara/Salon-Revive/issues)
- **Pull Requests**: [GitHub PRs](https://github.com/Dilshanushara/Salon-Revive/pulls)
- **Owner**: [@Dilshanushara](https://github.com/Dilshanushara)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🔧 Quick Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Deployment
npm run deploy       # Deploy to GitHub Pages

# Dependencies
npm install          # Install dependencies
npm audit            # Check for vulnerabilities
```

---

**Made with ❤️ for beautiful salon websites**