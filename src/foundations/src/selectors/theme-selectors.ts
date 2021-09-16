import * as ColorSelectors from "./color-selectors";
import * as ShadowSelectors from "./shadow-selectors";
import * as SpacingSelectors from "./spacing-selectors";
import * as TypographySelectors from "./typography-selectors";

//* ALWAYS IMPORT SELECTORS FROM THIS FILE

export const ThemeSelectors = {
  ...ColorSelectors,
  ...ShadowSelectors,
  ...SpacingSelectors,
  ...TypographySelectors,
};
