# Design System - SaaS Landing Page

## 🎨 Color Palette

### Strategy: Modern, Professional, High-Contrast
Our color system uses a **purple-to-blue gradient** theme with complementary accent colors.

### Primary Colors
```css
--primary-50:  hsl(258, 100%, 97%)   /* Lightest lavender */
--primary-100: hsl(258, 95%, 92%)    /* Very light purple */
--primary-200: hsl(258, 90%, 85%)    /* Light purple */
--primary-300: hsl(258, 85%, 75%)    /* Medium light purple */
--primary-400: hsl(258, 80%, 65%)    /* Medium purple */
--primary-500: hsl(258, 75%, 55%)    /* Base purple (Main brand) */
--primary-600: hsl(258, 70%, 48%)    /* Dark purple */
--primary-700: hsl(258, 65%, 40%)    /* Darker purple */
--primary-800: hsl(258, 60%, 32%)    /* Very dark purple */
--primary-900: hsl(258, 55%, 24%)    /* Darkest purple */
```

### Accent Colors
```css
--accent-50:  hsl(200, 100%, 97%)    /* Lightest blue */
--accent-100: hsl(200, 95%, 92%)     /* Very light blue */
--accent-200: hsl(200, 90%, 85%)     /* Light blue */
--accent-300: hsl(200, 85%, 75%)     /* Medium light blue */
--accent-400: hsl(200, 80%, 65%)     /* Medium blue */
--accent-500: hsl(200, 75%, 55%)     /* Base blue */
--accent-600: hsl(200, 70%, 48%)     /* Dark blue */
--accent-700: hsl(200, 65%, 40%)     /* Darker blue */
--accent-800: hsl(200, 60%, 32%)     /* Very dark blue */
--accent-900: hsl(200, 55%, 24%)     /* Darkest blue */
```

### Neutral/Grayscale
```css
--gray-50:  hsl(240, 10%, 98%)       /* Almost white */
--gray-100: hsl(240, 9%, 95%)        /* Very light gray */
--gray-200: hsl(240, 8%, 90%)        /* Light gray */
--gray-300: hsl(240, 7%, 80%)        /* Medium light gray */
--gray-400: hsl(240, 6%, 65%)        /* Medium gray */
--gray-500: hsl(240, 5%, 50%)        /* Base gray */
--gray-600: hsl(240, 4%, 40%)        /* Dark gray */
--gray-700: hsl(240, 5%, 30%)        /* Darker gray */
--gray-800: hsl(240, 6%, 20%)        /* Very dark gray */
--gray-900: hsl(240, 8%, 10%)        /* Almost black */
```

### Semantic Colors
```css
/* Success - Green */
--success-light: hsl(142, 76%, 90%)
--success: hsl(142, 76%, 45%)
--success-dark: hsl(142, 76%, 35%)

/* Warning - Amber */
--warning-light: hsl(38, 92%, 90%)
--warning: hsl(38, 92%, 50%)
--warning-dark: hsl(38, 92%, 40%)

/* Error - Red */
--error-light: hsl(0, 72%, 90%)
--error: hsl(0, 72%, 51%)
--error-dark: hsl(0, 72%, 41%)

/* Info - Cyan */
--info-light: hsl(188, 78%, 90%)
--info: hsl(188, 78%, 45%)
--info-dark: hsl(188, 78%, 35%)
```

### Background & Surface Colors
```css
--bg-primary: hsl(0, 0%, 100%)       /* White */
--bg-secondary: hsl(240, 10%, 98%)   /* Off-white */
--bg-tertiary: hsl(240, 9%, 95%)     /* Very light gray */
--bg-dark: hsl(240, 8%, 10%)         /* Dark mode bg */

--surface-elevated: hsl(0, 0%, 100%)
--surface-overlay: hsla(240, 8%, 10%, 0.4)
```

## 🎭 Gradients

### Brand Gradients
```css
/* Primary Gradient (Purple to Blue) */
--gradient-primary: linear-gradient(135deg, 
  hsl(258, 75%, 55%) 0%, 
  hsl(200, 75%, 55%) 100%
);

/* Vibrant Gradient */
--gradient-vibrant: linear-gradient(135deg,
  hsl(258, 85%, 60%) 0%,
  hsl(280, 80%, 55%) 50%,
  hsl(200, 85%, 55%) 100%
);

/* Subtle Gradient */
--gradient-subtle: linear-gradient(180deg,
  hsl(240, 10%, 98%) 0%,
  hsl(258, 100%, 99%) 100%
);

/* Glassmorphism Background */
--gradient-glass: linear-gradient(135deg,
  hsla(258, 75%, 55%, 0.1) 0%,
  hsla(200, 75%, 55%, 0.1) 100%
);
```

## 📐 Spacing Scale

```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
--space-24: 6rem;    /* 96px */
--space-32: 8rem;    /* 128px */
```

## �� Typography

### Font Families
```css
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-display: 'Inter', sans-serif; /* For headings */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Font Sizes
```css
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */
--text-7xl: 4.5rem;      /* 72px */
```

### Font Weights
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### Line Heights
```css
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

## 🎯 Border Radius

```css
--radius-sm: 0.25rem;   /* 4px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 0.75rem;   /* 12px */
--radius-xl: 1rem;      /* 16px */
--radius-2xl: 1.5rem;   /* 24px */
--radius-full: 9999px;  /* Fully rounded */
```

## 🌓 Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
             0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
             0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
             0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Colored shadows for depth */
--shadow-primary: 0 10px 40px -10px hsla(258, 75%, 55%, 0.3);
--shadow-accent: 0 10px 40px -10px hsla(200, 75%, 55%, 0.3);
```

## 🧊 Glassmorphism

```css
--glass-bg: hsla(0, 0%, 100%, 0.1);
--glass-border: hsla(0, 0%, 100%, 0.2);
--glass-blur: blur(20px);
--glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
```

## ⚡ Transitions & Animations

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slower: 500ms cubic-bezier(0.4, 0, 0.2, 1);

--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

## 🎨 Color Usage Guidelines

### Primary Use Cases
- **primary-500**: CTAs, links, important buttons
- **primary-600**: Hover states for primary actions
- **primary-100**: Light backgrounds, subtle highlights

### Accent Use Cases
- **accent-500**: Secondary CTAs, highlights
- **accent-600**: Hover states for accent elements
- **accent-100**: Info boxes, callouts

### Text Color Guidelines
```css
--text-primary: var(--gray-900);     /* Main headings, body text */
--text-secondary: var(--gray-700);   /* Subheadings, less emphasis */
--text-tertiary: var(--gray-500);    /* Supporting text, labels */
--text-inverse: var(--gray-50);      /* Text on dark backgrounds */
--text-link: var(--primary-600);     /* Links */
```

## 🚫 Avoiding Color Clashes

### Rules to Follow:
1. **Never mix warm and cool primaries** - Stick to purple-blue palette
2. **Use neutrals for balance** - Gray backgrounds prevent color fatigue
3. **Limit accent colors to 2-3** - Primary, Accent, and one semantic
4. **Maintain contrast ratios** - WCAG AA minimum (4.5:1 for text)
5. **Use gradients sparingly** - Only for hero sections and CTAs

### Safe Color Combinations:
```
✅ Primary + Neutral + White
✅ Primary + Accent + Neutral
✅ Gradient Hero + Neutral Body
✅ Dark Background + Primary Accents
❌ Primary + Warning (too much color)
❌ Multiple gradients on same screen
❌ Accent-500 + Error-500 (clash)
```

## 📱 Responsive Breakpoints

```css
--breakpoint-sm: 640px;   /* Mobile landscape */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */
--breakpoint-2xl: 1536px; /* Extra large */
```

## 🎯 Component-Specific Guidelines

### Buttons
- **Primary**: `background: var(--gradient-primary)`, `color: white`
- **Secondary**: `background: var(--gray-100)`, `color: var(--gray-900)`
- **Outline**: `border: 2px solid var(--primary-500)`, `color: var(--primary-600)`

### Cards
- **Default**: `background: white`, `border: 1px solid var(--gray-200)`
- **Elevated**: `background: white`, `shadow: var(--shadow-lg)`
- **Glass**: `background: var(--glass-bg)`, `backdrop-filter: var(--glass-blur)`

### Inputs
- **Default**: `border: 1px solid var(--gray-300)`
- **Focus**: `border-color: var(--primary-500)`, `ring: var(--primary-200)`
- **Error**: `border-color: var(--error)`, `ring: var(--error-light)`

## 📚 Implementation Tips

1. **Use CSS Variables** - Define all tokens in `:root`
2. **Create utility classes** - For common patterns
3. **Build component library** - Reusable, consistent components
4. **Test accessibility** - Check contrast ratios
5. **Dark mode ready** - Use HSL for easy theme switching
