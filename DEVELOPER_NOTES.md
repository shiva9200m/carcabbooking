# TravelWise - Tour & Travel Website

A modern, fully responsive tour and travel website built with React.js, featuring 4 main pages with smooth animations and a clean, premium design.

## 🎨 Design System

### Colors
- **Primary**: Sky Blue (#0284c7) to Ocean Blue (#0369a1)
- **Background**: White, Light Gray (#f9fafb)
- **Text**: Gray-900 for headings, Gray-600 for body text
- **Accent**: Gradient from Sky-600 to Blue-600

### Typography
- **Font Family**: System fonts (similar to Poppins/Inter)
- **Headings**: Bold, varying sizes (text-4xl to text-7xl)
- **Body**: Regular weight, text-base to text-xl

### Components
- **Cards**: Rounded-2xl with soft shadows
- **Buttons**: Rounded-full with gradient backgrounds
- **Inputs**: Rounded-lg with focus rings
- **Spacing**: Consistent padding and margins using Tailwind utilities

## 📱 Pages

### 1. Home Page (`/`)
- Full-width hero section with scenic background
- Animated CTA buttons
- Popular destinations grid (4 cards with hover effects)
- Why Choose Us section (4 feature cards)
- Customer testimonials slider
- Scroll indicators and animations

### 2. Destinations Page (`/destinations`)
- Hero banner
- Search bar and filter system (country, budget, duration)
- Responsive grid layout (1/2/3 columns)
- Destination cards with hover overlay
- Smooth transitions and animations

### 3. Packages Page (`/packages`)
- Hero banner
- Featured packages grid
- Package cards with ratings, includes, and pricing
- "Why Book With Us" section
- CTA section with gradient background

### 4. Contact/Booking Page (`/contact`)
- Hero banner
- Contact info cards (Phone, Email, Office)
- Booking form with validation
- Google Maps integration
- Success animation modal
- Office hours display

## 🎭 Animations

All pages use **Framer Motion** (imported as `motion/react`) for:
- Fade-in on scroll animations
- Hover effects on cards and buttons
- Page transitions
- Success state animations
- Scroll-triggered reveals

### Key Animation Patterns:
```tsx
// Fade in when visible
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.6, delay }}
>

// Hover animations
<motion.div
  whileHover={{ y: -10, scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
```

## 🏗️ Component Structure

```
/src
  /app
    /components
      - Header.tsx (Navigation with mobile menu)
      - Footer.tsx (Links, social, newsletter)
      - HomePage.tsx
      - DestinationsPage.tsx
      - PackagesPage.tsx
      - ContactPage.tsx
    - App.tsx (Main router)
  /data
    - travelData.ts (Mock data for destinations, packages, testimonials)
  /styles
    - custom.css (Slick carousel & scrollbar styles)
```

## 🔧 Key Dependencies

- **React Router DOM**: Page navigation
- **Framer Motion**: Animations
- **Lucide React**: Icon library
- **React Slick**: Testimonials slider
- **Tailwind CSS v4**: Styling system

## 📐 Responsive Design

- **Mobile**: Single column layout, hamburger menu
- **Tablet**: 2-column grids
- **Desktop**: 3-4 column grids, full navigation

### Breakpoints (Tailwind):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🎯 Developer-Friendly Features

1. **Component-Based**: Each page is a separate component
2. **Reusable Components**: Header, Footer, Card components
3. **Type-Safe Data**: Mock data in separate file for easy modification
4. **Clean File Structure**: Organized by feature
5. **Consistent Naming**: PascalCase for components, camelCase for functions
6. **Auto-Layout Ready**: Tailwind utilities for flexible layouts
7. **Animation Library Compatible**: All animations use Motion (Framer Motion)

## 🚀 Quick Start

The application is already set up with:
- React Router for navigation
- All pages connected
- Mock data for destinations and packages
- Responsive design implemented
- Animations configured

## 🎨 Customization Guide

### To change colors:
Update gradient classes in components:
```tsx
className="bg-gradient-to-r from-sky-600 to-blue-600"
```

### To add new destinations:
Edit `/src/data/travelData.ts`:
```typescript
export const destinations = [
  {
    id: 9,
    name: "New Destination",
    location: "Country",
    price: "$X,XXX",
    // ...
  }
];
```

### To modify animations:
Adjust Motion components in page files:
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
/>
```

## 📦 Production Ready

- ✅ Fully responsive (mobile-first)
- ✅ Optimized images from Unsplash
- ✅ Smooth animations and transitions
- ✅ Clean, maintainable code
- ✅ Component-based architecture
- ✅ SEO-friendly structure
- ✅ Accessibility considerations

## 🔄 Future Enhancements

Suggestions for further development:
- Add real API integration for destinations/packages
- Implement user authentication
- Add booking confirmation system
- Payment gateway integration
- Admin panel for managing content
- Multi-language support
- Dark mode toggle
- Advanced filtering and sorting
- User reviews and ratings system
- Integration with travel APIs

## 📝 Notes

- All images are sourced from Unsplash
- Forms are currently front-end only (no backend)
- Google Maps embed uses public embed code
- Testimonial images are placeholder URLs
- All data is mocked for demonstration

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
