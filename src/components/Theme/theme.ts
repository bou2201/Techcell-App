import { extendTheme } from 'native-base';

export const customTheme = extendTheme({
  fonts: {
    quicksand: 'Quicksand_400Regular'
  },
  colors: {
    red: '#ee4949',
    redBlur: 'rgba(238, 73, 73, 0.08)',
    black: '#3b3b3b',
    blackBlur: 'rgba(59, 59, 59, 0.08)'
  }
});

// 2. Get the type of the CustomTheme
type CustomThemeType = typeof customTheme;

// 3. Extend the internal NativeBase Theme
declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}