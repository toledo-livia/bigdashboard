export const spacings = {
  space01: '0.4rem',
  space02: '0.8rem',
  space03: '1.2rem',
  space04: '1.6rem',
  space05: '2.4rem',
  space06: '3.2rem',
  space07: '4rem',
  space08: '4.8rem',
  space09: '5.6rem',
  space10: '6.4rem',
  space11: '7.2rem',
  space12: '8rem',
  space13: '8.8rem',
  space14: '9.6rem',
} as const;

export const colors = {
  background: 'hsl(212, 33%, 89%)',
  black: '#1D1D1D',
  white: '#FFFFFF',
  primary: '#B5B8B1',
  secondary: 'hsl(0, 0%, 81%)',
  grey1: 'hsl(209, 61%, 16%)',
  grey2: 'hsl(211, 39%, 23%)',
  grey3: 'hsl(209, 34%, 30%)',
  grey4: 'hsl(209, 28%, 39%)',
  grey5: 'hsl(210, 22%, 49%)',
  grey6: 'hsl(209, 23%, 60%)',
  grey7: 'hsl(211, 27%, 70%)',
  grey8: 'hsl(210, 31%, 80%)',
  grey9: 'hsl(212, 33%, 89%)',
  grey10: 'hsl(210, 36%, 96%)',
} as const;

export const font = {
  light: 300,
  normal: 400,
  semiBold: 600,
  bold: 700,
  sizes: {
    xxSmall: '0.9rem',
    xSmall: '1.2rem',
    small: '1.4rem',
    normal: '1.6rem',
    large: '1.8rem',
    heading06: '2rem',
    heading05: '2.4rem',
    heading04: '2.8rem',
    heading03: '3.2rem',
    heading02: '3.6rem',
    heading01: '4.2rem',
  },
  lineHeight: {
    xxsmall: '1.6',
    xsmall: '1.8rem',
    small: '2.1rem',
    normal: '2.4rem',
    large: '2.7rem',
    heading06: '2.8rem',
    heading05: '2.9rem',
    heading04: '3.4rem',
    heading03: '3.8rem',
    heading02: '4.3rem',
    heading01: '5rem',
  },
  family: {
    Lato: "'Lato',sans-serif",
    Playfair: "'Playfair Display', serif",
  },
} as const;

export const ZIndex = {
  base: 10,
  dropdown: 15,
  menu: 20,
  overlay: 30,
  modal: 40,
} as const;

export const breakpoints = {
  small: '576px',
  medium: '768px',
  large: '992px',
  xlarge: '1200px',
  xxlarge: '1400px',
} as const;
