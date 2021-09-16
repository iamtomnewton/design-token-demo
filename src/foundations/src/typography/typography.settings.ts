import { createGlobalStyle } from 'styled-components';
import { ThemeSelectors } from '../../../foundations/src/selectors/theme-selectors'

export const GlobalFonts = createGlobalStyle`
  @font-face {
      font-family: ${({ theme }) => ThemeSelectors.getFontRegular(theme)};
      src: url(${({ theme }) => ThemeSelectors.getFontSrc(theme)} + '.svg') format('svg'),
          url(${({ theme }) => ThemeSelectors.getFontSrc(theme)} + '.ttf') format('truetype'),
          url(${({ theme }) => ThemeSelectors.getFontSrc(theme)} + '.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }
`