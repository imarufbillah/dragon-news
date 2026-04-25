# Dragon News - Premium Editorial News Portal

A modern, responsive news website built with Next.js 16, featuring a clean editorial design and premium user experience.

## 🚀 Features

- **Premium Editorial Design**: Clean, professional layout inspired by modern digital newspapers
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Breaking News Ticker**: Real-time scrolling news updates with smooth animations
- **Category Navigation**: Organized news categories with intuitive filtering
- **Social Authentication**: Login with Google and GitHub integration
- **Interactive Elements**: Hover effects, smooth transitions, and micro-interactions
- **Accessibility**: Focus states, proper contrast ratios, and semantic HTML

## 🎨 Design Improvements

### Recent UI/UX Enhancements:
- **Header**: Premium logo presentation with improved spacing and typography hierarchy
- **Navigation**: Sticky navbar with mobile menu, better hover states, and professional styling
- **Breaking News Bar**: Polished ticker with animated indicators and improved readability
- **Article Cards**: Enhanced spacing, better image presentation, and cleaner metadata styling
- **Sidebar Widgets**: Cohesive card design with improved social media integration
- **Color System**: Refined color palette with better contrast and semantic color usage
- **Typography**: Improved font hierarchy and readability across all components
- **Interactions**: Smooth hover effects, focus states, and micro-animations

## 🛠 Tech Stack

- **Framework**: Next.js 16.2.4 with App Router
- **Styling**: Tailwind CSS 4 with custom design tokens
- **Icons**: Lucide React for consistent iconography
- **Animations**: React Fast Marquee for news ticker
- **Fonts**: Poppins from Google Fonts
- **Date Handling**: date-fns for date formatting

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (home)/            # Home route group
│   ├── globals.css        # Global styles and design tokens
│   └── layout.js          # Root layout
├── components/
│   ├── home/              # Home page components
│   │   ├── NewsContainer.jsx
│   │   └── LatestNewsMarquee.jsx
│   └── shared/            # Shared components
│       ├── Header.jsx
│       └── Navbar.jsx
├── assets/                # Static images and icons
└── public/               # Public assets and data
    ├── news.json         # News data
    └── categories.json   # Category data
```

## 🎯 Key Components

- **Header**: Logo, tagline, and current date display
- **LatestNewsMarquee**: Scrolling breaking news ticker
- **Navbar**: Main navigation with mobile responsiveness
- **NewsContainer**: Main content grid with three-column layout
- **Category Sidebar**: News categories and featured articles
- **Article Feed**: Main news articles with rich content
- **Social Sidebar**: Login options and social media links

## 🎨 Design System

The project uses a comprehensive design system with:
- **Color Tokens**: Primary, semantic, and neutral color scales
- **Typography Scale**: Consistent font sizes and weights
- **Spacing System**: Standardized spacing values
- **Component Patterns**: Reusable card, button, and form styles
- **Animation Guidelines**: Smooth transitions and hover effects

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices with progressive enhancement
- **Breakpoints**: Responsive grid system with Tailwind CSS breakpoints
- **Touch Friendly**: Appropriate touch targets and mobile interactions
- **Performance**: Optimized images and efficient CSS

## 🔧 Development

- **ESLint**: Code linting and formatting
- **Hot Reload**: Instant updates during development
- **TypeScript Ready**: Easy migration to TypeScript if needed
- **Component Architecture**: Modular, reusable components

## 📄 License

This project is for educational and demonstration purposes.

---

Built with ❤️ using Next.js and modern web technologies.
