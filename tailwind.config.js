export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        deepForest: '#102A20',
        forest: '#1B4132',
        warmIvory: '#F6F1E6',
        cream: '#FCFAF4',
        warmBeige: '#E8DFCC',
        mutedGold: '#B08D4F',
        lightGold: '#D3B67C',
        charcoal: '#25231F',
        sage: '#93A893',
        // Legacy fallbacks mapped to new luxury palette
        ivory: '#FCFAF4',
        sand: '#E8DFCC',
        bark: '#6B5644',
        moss: '#1B4132',
        pine: '#102A20',
        ink: '#25231F',
        stone: '#8A8578',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Lora"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', '"Lora"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.08em',
        wide2: '0.05em',
      },
      transitionTimingFunction: {
        calm: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      maxWidth: {
        edge: '96rem',
      },
    },
  },
}
