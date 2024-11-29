import { MD3LightTheme } from 'react-native-paper';

export const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    // Core colors
    primary: '#2955F9',
    onPrimary: '#FFFFFF',
    primaryContainer: '#DDE1FF',
    onPrimaryContainer: '#08164B',
    primary12: 'rgba(41, 85, 249, 0.12)',
    
    // Secondary colors
    secondary: '#FFC43A',
    onSecondary: '#FFFFFF',
    secondaryContainer: 'rgba(41, 85, 249, 0.5)',
    onSecondaryContainer: '#261900',
    
    // Tertiary colors
    tertiary: '#EFF7FD',
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#C0E8FF',
    onTertiaryContainer: '#001F2B',
    
    // Error colors
    error: '#BA1A1A',
    onError: '#FFFFFF',
    errorContainer: '#FFDAD6',
    onErrorContainer: '#410002',
    
    // Background and surface colors
    background: '#FBF8FF',
    onBackground: '#1B1B21',
    surface: '#FBF8FF',
    onSurface: '#1B1B21',
    surfaceVariant: '#E3E1EC',
    onSurfaceVariant: '#45464F',
    
    // Surface containers
    surfaceContainerLowest: '#FFFFFF',
    surfaceContainerLow: '#F5F2FA',
    surfaceContainer: '#EFEDF4',
    surfaceContainerHigh: '#E9E7EF',
    surfaceContainerHighest: '#E3E1E9',
    
    // Outline colors
    outline: '#767680',
    outlineVariant: '#C6C5D0',
    
    // Other colors
    shadow: '#000000',
    scrim: '#000000',
    inverseSurface: '#303036',
    inverseOnSurface: '#F2F0F7',
    inversePrimary: '#B9C3FF',
    surfaceDim: '#DBD9E0',
    surfaceBright: '#FBF8FF',
  },
  // MD3 typography configuration
  fonts: {
    displayLarge: {
      fontFamily: 'DMSans-Regular',
      fontSize: 57,
      letterSpacing: 0,
      fontWeight: '400',
    },
    displayMedium: {
      fontFamily: 'DMSans-Regular',
      fontSize: 45,
      letterSpacing: 0,
      fontWeight: '400',
    },
    displaySmall: {
      fontFamily: 'DMSans-Regular',
      fontSize: 36,
      letterSpacing: 0,
      fontWeight: '400',
    },
    headlineLarge: {
      fontFamily: 'DMSans-Regular',
      fontSize: 32,
      letterSpacing: 0,
      fontWeight: '400',
    },
    headlineMedium: {
      fontFamily: 'DMSans-Regular',
      fontSize: 28,
      letterSpacing: 0,
      fontWeight: '400',
    },
    headlineSmall: {
      fontFamily: 'DMSans-Regular',
      fontSize: 24,
      letterSpacing: 0,
      fontWeight: '400',
    },
    titleLarge: {
      fontFamily: 'DMSans-Medium',
      fontSize: 22,
      letterSpacing: 0,
      fontWeight: '500',
    },
    titleMedium: {
      fontFamily: 'DMSans-Medium',
      fontSize: 16,
      letterSpacing: 0.15,
      fontWeight: '500',
    },
    titleSmall: {
      fontFamily: 'DMSans-Medium',
      fontSize: 14,
      letterSpacing: 0.1,
      fontWeight: '500',
    },
    bodyLarge: {
      fontFamily: 'DMSans-Regular',
      fontSize: 16,
      letterSpacing: 0.15,
      fontWeight: '400',
    },
    bodyMedium: {
      fontFamily: 'DMSans-Regular',
      fontSize: 14,
      letterSpacing: 0.25,
      fontWeight: '400',
    },
    bodySmall: {
      fontFamily: 'DMSans-Regular',
      fontSize: 12,
      letterSpacing: 0.4,
      fontWeight: '400',
    },
    labelLarge: {
      fontFamily: 'DMSans-Medium',
      fontSize: 14,
      letterSpacing: 0.1,
      fontWeight: '500',
    },
    labelMedium: {
      fontFamily: 'DMSans-Medium',
      fontSize: 12,
      letterSpacing: 0.5,
      fontWeight: '500',
    },
    labelSmall: {
      fontFamily: 'DMSans-Medium',
      fontSize: 11,
      letterSpacing: 0.5,
      fontWeight: '500',
    },
  },
};