export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F1',
        cream: '#F3EDE2',
        sand: '#E4D9C6',
        clay: '#C6B096',
        bark: '#6B5644',
        sage: '#93A288',
        moss: '#5C6B52',
        forest: '#2B3A2E',
        pine: '#1C271E',
        ink: '#191814',
        stone: '#8A8578',
      },
      fontFamily: {
        display: ['"Lora"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.06em',
        wide2: '0.04em',
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
