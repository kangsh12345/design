export type Mode = 'light' | 'dark';

export const colors = {
  base: {
    white: '#ffffff',
    black: '#121212',
    bluePrimary: '#3182ce',
    blueSecondary: '#4299e1',
    blueTertiary: '#63b3ed',
    blueBackground: '#ebf8ff',
    redPrimary: '#e53e3e',
    redSecondary: '#f56565',
    redTertiary: '#fc8181',
    redBackground: '#fff5f5',
    greenPrimary: '#38a169',
    greenSecondary: '#48bb78',
    greenTertiary: '#68d391',
    greenBackground: '#f0fff4',
    orangePrimary: '#dd6b20',
    orangeSecondary: '#ed8936',
    orangeTertiary: '#f6ad55',
    orangeBackground: '#fffaf0',
    statusPrimary: '#9f7aea',
    statusInfo: '#4299e1',
    statusSuccess: '#48bb78',
    statusWarning: '#ed8936',
    statusDanger: '#f56565',
    hoverImg: 'rgba(0, 0, 0, 0.48)',
  },
  light: {
    filterTextPrimary:
      'brightness(0) saturate(100%) invert(3%) sepia(33%) saturate(2108%) hue-rotate(205deg) brightness(100%) contrast(86%)',
    filterTextSecondary:
      'brightness(0) saturate(100%) invert(51%) sepia(31%) saturate(275%) hue-rotate(176deg) brightness(91%) contrast(87%)',
    brandPrimary: '#9f7aea',
    brandSecondary: '#b794f4',
    brandTertiary: '#d6bcfa',
    brandBackground: '#faf5ff',
    gray50: '#f7fafc',
    gray100: '#edf2f7',
    gray200: '#e2e8f0',
    gray300: '#cbd5e0',
    gray400: '#a0aec0',
    gray500: '#718096',
    gray600: '#4a5568',
    gray700: '#2d3748',
    gray800: '#1a202c',
    gray900: '#171923',
    opacityWhite50: 'rgba(255, 255, 255, 0.04)',
    opacityWhite100: 'rgba(255, 255, 255, 0.06)',
    opacityWhite200: 'rgba(255, 255, 255, 0.10)',
    opacityWhite300: 'rgba(255, 255, 255, 0.16)',
    opacityWhite400: 'rgba(255, 255, 255, 0.24)',
    opacityWhite500: 'rgba(255, 255, 255, 0.36)',
    opacityWhite600: 'rgba(255, 255, 255, 0.48)',
    opacityWhite700: 'rgba(255, 255, 255, 0.64)',
    opacityWhite800: 'rgba(255, 255, 255, 0.80)',
    opacityWhite900: 'rgba(255, 255, 255, 0.92)',
    opacityBlack50: 'rgba(0, 0, 0, 0.04)',
    opacityBlack100: 'rgba(0, 0, 0, 0.06)',
    opacityBlack200: 'rgba(0, 0, 0, 0.10)',
    opacityBlack300: 'rgba(0, 0, 0, 0.16)',
    opacityBlack400: 'rgba(0, 0, 0, 0.24)',
    opacityBlack500: 'rgba(0, 0, 0, 0.36)',
    opacityBlack600: 'rgba(0, 0, 0, 0.48)',
    opacityBlack700: 'rgba(0, 0, 0, 0.64)',
    opacityBlack800: 'rgba(0, 0, 0, 0.80)',
    opacityBlack900: 'rgba(0, 0, 0, 0.92)',
    borderPrimary: '#cbd5e0',
    borderSecondary: '#e2e8f0',
    borderTertiary: '#edf2f7',
    textPrimary: '#171923',
    textSecondary: '#718096',
    textTertiary: '#a0aec0',
    textPlaceholder: '#a0aec0',
    textDisabled: '#cbd5e0',
    textWhite: '#f7fafc',
    textHoverWhite: '#f7fafc',
    backgroundBase: '#ffffff',
    backgroundElevatedPrimary: '#f7fafc',
    backgroundElevatedSecondary: '#edf2f7',
    backgroundSurfaceBaseDefault: '#ffffff',
    backgroundSurfaceBasePressed: '#edf2f7',
    backgroundSurfaceBaseDisabled: '#ffffff',
    backgroundSurfaceElevatedPrimaryDefault: '#ffffff',
    backgroundSurfaceElevatedPrimaryPressed: '#edf2f7',
    backgroundSurfaceElevatedPrimaryDisabled: '#ffffff',
    backgroundSurfaceElevatedSecondaryDefault: '#ffffff',
    backgroundSurfaceElevatedSecondaryPressed: '#edf2f7',
    backgroundSurfaceElevatedSecondaryDisabled: '#ffffff',
  },
  dark: {
    filterTextPrimary:
      'brightness(0) saturate(100%) invert(92%) sepia(2%) saturate(1378%) hue-rotate(190deg) brightness(108%) contrast(97%)',
    filterTextSecondary:
      'brightness(0) saturate(100%) invert(89%) sepia(14%) saturate(190%) hue-rotate(171deg) brightness(96%) contrast(87%)',
    brandPrimary: '#a787e8',
    brandSecondary: '#b898f1',
    brandTertiary: '#d7bef8',
    brandBackground: '#faf5ff',
    gray50: '#171923',
    gray100: '#1a202c',
    gray200: '#2d3748',
    gray300: '#4a5568',
    gray400: '#718096',
    gray500: '#a0aec0',
    gray600: '#cbd5e0',
    gray700: '#e2e8f0',
    gray800: '#edf2f7',
    gray900: '#f7fafc',
    opacityWhite50: 'rgba(0, 0, 0, 0.04)',
    opacityWhite100: 'rgba(0, 0, 0, 0.06)',
    opacityWhite200: 'rgba(0, 0, 0, 0.10)',
    opacityWhite300: 'rgba(0, 0, 0, 0.16)',
    opacityWhite400: 'rgba(0, 0, 0, 0.24)',
    opacityWhite500: 'rgba(0, 0, 0, 0.36)',
    opacityWhite600: 'rgba(0, 0, 0, 0.48)',
    opacityWhite700: 'rgba(0, 0, 0, 0.64)',
    opacityWhite800: 'rgba(0, 0, 0, 0.80)',
    opacityWhite900: 'rgba(0, 0, 0, 0.92)',
    opacityBlack50: 'rgba(255, 255, 255, 0.04)',
    opacityBlack100: 'rgba(255, 255, 255, 0.06)',
    opacityBlack200: 'rgba(255, 255, 255, 0.10)',
    opacityBlack300: 'rgba(255, 255, 255, 0.16)',
    opacityBlack400: 'rgba(255, 255, 255, 0.24)',
    opacityBlack500: 'rgba(255, 255, 255, 0.36)',
    opacityBlack600: 'rgba(255, 255, 255, 0.48)',
    opacityBlack700: 'rgba(255, 255, 255, 0.64)',
    opacityBlack800: 'rgba(255, 255, 255, 0.80)',
    opacityBlack900: 'rgba(255, 255, 255, 0.92)',
    borderPrimary: '#4a5568',
    borderSecondary: '#2d3748',
    borderTertiary: '#1a202c',
    textPrimary: '#f7fafc',
    textSecondary: '#cbd5e0',
    textTertiary: '#a0aec0',
    textPlaceholder: '#a0aec0',
    textDisabled: '#718096',
    textWhite: '#171923',
    textHoverWhite: '#f7fafc',
    backgroundBase: '#121212',
    backgroundElevatedPrimary: '#171923',
    backgroundElevatedSecondary: '#1a202c',
    backgroundSurfaceBaseDefault: '#1a202c',
    backgroundSurfaceBasePressed: '#161B25',
    backgroundSurfaceBaseDisabled: '#1a202c',
    backgroundSurfaceElevatedPrimaryDefault: '#2d3748',
    backgroundSurfaceElevatedPrimaryPressed: '#262F3D',
    backgroundSurfaceElevatedPrimaryDisabled: '#2d3748',
    backgroundSurfaceElevatedSecondaryDefault: '#4a5568',
    backgroundSurfaceElevatedSecondaryPressed: '#3F4858',
    backgroundSurfaceElevatedSecondaryDisabled: '#4a5568',
  },
} as const;
