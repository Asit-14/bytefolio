/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Aesthetic Color Palette
        'soft-peach': '#EEA990',
        'misty-white': '#FDF6F0',
        'muted-coral': '#E38B75',
        'charcoal-black': '#2E2E2E',
        'warm-gray': '#4B4B4B',
        'light-sand': '#FAE9DC',
        'dusty-rose': '#C97A7A',
        'blush-pink': '#F6C3B9',
        'clay-beige': '#EBD7C5',
        'soft-coral': '#E38B75',
        'muted-sage': '#9caf88',
        'soft-cream': '#F5F5DC',

        // Semantic color mapping
        'heading': '#2E2E2E',
        'body': '#4B4B4B',
        'muted-slate': '#6B7280',

        // Keep some original colors for compatibility
        'sage-green': '#9caf88',
        'muted-purple': '#b19cd9',
        'warm-neutral': '#d2b48c',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'lora': ['Lora', 'serif'],
        'fira': ['Fira Code', 'monospace'],
        'dancing': ['Dancing Script', 'cursive'],

        // Semantic font mapping
        'heading': ['Playfair Display', 'serif'],
        'body': ['Raleway', 'sans-serif'],
        'mono': ['Fira Code', 'monospace'],
      },
      animation: {
        'shimmer': 'shimmer 3s infinite',
        'pulse-3d': 'pulse3d 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'soft-lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'soft-xl': '0 20px 25px rgba(0, 0, 0, 0.1)',
        'aesthetic': '0 8px 32px rgba(238, 169, 144, 0.3)',
        'aesthetic-hover': '0 12px 40px rgba(238, 169, 144, 0.4)',
      },
      borderRadius: {
        'aesthetic': '12px',
        'soft': '8px',
      },
    },
  },
  plugins: [],
};
