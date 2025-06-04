# Hazy Forge

Empowering digital empires with innovative web solutions.

---

## Overview
Hazy Forge is a modern, feature-rich web application built with Next.js, Magic UI, and TypeScript, leveraging lucide-react for iconography. The project uses a modular component-driven architecture and is designed for scalability, maintainability, and a seamless user experience, with a focus on beautiful UI, internationalization, and robust state management.

---

## Features
- **Modern UI/UX**: Responsive layouts, animated gradients, and interactive sections powered by Magic UI.
- **Component-Driven**: Highly modular React components for easy extension and maintenance.
- **Next.js Framework**: Fast routing, SSR, and static site generation.
- **lucide-react Icons**: Clean, consistent iconography throughout the UI.
- **Internationalization**: Multi-language support using JSON locale files and dynamic switching.
- **Theme Management**: Light/dark mode, RTL support, and customizable layouts.
- **Portfolio & Blog**: Dynamic portfolio and blog sections with project cards and pagination.
- **Testimonials**: Rotating testimonials with animated marquees.
- **Service Showcase**: Highlighted services and value propositions.
- **State Management**: Powered by Zustand for predictable, scalable state.
- **Performance Optimized**: Uses Next.js best practices, code splitting, and optimized assets.

---

## Project Structure

```
project/
├── src/
│   ├── app/                # Next.js app directory (routing, layouts, globals)
│   │   ├── (pages)/        # Main pages & routes
│   │   ├── layout.tsx      # Root layout
│   │   └── globals.css     # Global styles
│   ├── assets/             # Static assets (images, icons)
│   ├── components/         # Reusable UI and section components
│   │   ├── blog/           # Blog section and cards
│   │   ├── hero-section/   # Hero/landing section
│   │   ├── info-section/   # Info/features section
│   │   ├── magicui/        # Animated/utility UI components
│   │   ├── mission-card/   # Animated mission cards
│   │   ├── portfolio-section/ # Portfolio showcase
│   │   ├── service-about/  # Services grid
│   │   ├── testimonials-section/ # Testimonials
│   │   └── ...             # Other UI components (layouts, loading, etc.)
│   ├── i18n.ts             # Internationalization logic
│   ├── lib/                # Utility libraries (e.g., className helpers)
│   ├── providers/          # App-wide providers (state, context)
│   ├── store/              # Zustand state stores
│   └── utils/              # Utility functions
└── ...
```

---

## Getting Started

### 1. Install dependencies
```bash
pnpm install
```

### 2. Start the development server
```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## Contributing
- Fork this repository and create a feature branch.
- Follow the existing code style and structure.
- Open a pull request describing your changes.

---

## License
Distributed under the MIT License. See `LICENSE` for more information.

---

## Credits
- Built with [Next.js](https://nextjs.org)
- UI powered by [Magic UI](https://github.com/steven-tey/magicui), [Tailwind CSS](https://tailwindcss.com), and custom components
- Iconography by [lucide-react](https://lucide.dev/)
- State management with [Zustand](https://zustand-demo.pmnd.rs/)

---

For questions, issues, or feature requests, please open an issue on GitHub.
