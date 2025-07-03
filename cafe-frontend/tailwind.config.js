/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#ff6b35', // Main accent
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        secondary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#f7931e', // Golden yellow
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        dark: {
          50: '#f8f8f8',
          100: '#e5e5e5',
          200: '#cccccc',
          300: '#b0b0b0',
          400: '#808080',
          500: '#666666',
          600: '#4d4d4d',
          700: '#333333',
          800: '#1a1a1a',
          900: '#0a0a0a',
        },
        retro: {
          orange: '#ff6b35',
          gold: '#f7931e',
          red: '#e63946',
          mint: '#06d6a0',
          purple: '#7209b7',
        },
        // CafeFlow Dark Theme
        retroBg: '#0a0a0a',
        retroBgSecondary: '#1a1a1a',
        retroBgTertiary: '#2a2a2a',
        retroCard: '#1e1e1e',
        retroHover: '#333333',
        
        // Accent Colors
        retroOrange: '#ff6b35',
        retroYellow: '#f7931e',
        retroRed: '#e63946',
        retroGreen: '#06d6a0',
        retroBlue: '#025cca',
        retroAccent: '#2a2a2a',
        
        // Text Colors
        retroPrimary: '#ffffff',
        retroSecondary: '#b0b0b0',
        retroMuted: '#808080',
        
        // Border Colors
        retroBorder: '#333333',
        retroBorderSecondary: '#404040',
        retroBorderAccent: '#ff6b35',
        
        // Status Colors
        retroSuccess: '#06d6a0',
        retroWarning: '#f7931e',
        retroError: '#e63946',
        retroInfo: '#025cca',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-retro': 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
        'gradient-card': 'linear-gradient(145deg, #1e1e1e 0%, #2a2a2a 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      },
      boxShadow: {
        'retro': '0 8px 32px rgba(255, 107, 53, 0.2)',
        'retro-lg': '0 20px 60px rgba(255, 107, 53, 0.3)',
        'dark': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'dark-lg': '0 10px 40px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}

