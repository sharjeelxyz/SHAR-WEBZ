/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        foreground: '#ffffff',
        'sys-background': '#FAFAFA',
        'sys-foreground': '#0F172A',
        'sys-muted': '#F1F5F9',
        'sys-muted-foreground': '#64748B',
        'sys-accent': '#0052FF',
        'sys-accent-secondary': '#4D7CFF',
        'sys-accent-foreground': '#FFFFFF',
        'sys-border': '#E2E8F0',
        'sys-card': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Calistoga', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        brutal: ['"Bebas Neue"', 'sans-serif'],
      },
      boxShadow: {
        'sys-sm': '0 1px 3px rgba(0,0,0,0.06)',
        'sys-md': '0 4px 6px rgba(0,0,0,0.07)',
        'sys-lg': '0 10px 15px rgba(0,0,0,0.08)',
        'sys-xl': '0 20px 25px rgba(0,0,0,0.1)',
        'sys-accent': '0 4px 14px rgba(0,82,255,0.25)',
        'sys-accent-lg': '0 8px 24px rgba(0,82,255,0.35)',
      }
    },
  },
  plugins: [],
}
