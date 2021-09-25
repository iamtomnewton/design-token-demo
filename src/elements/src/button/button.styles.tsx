import styled from "styled-components";
import { ButtonTypes } from "./button.types";
import { ThemeSelectors } from "../../../foundations/src/selectors/theme-selectors";
import { typography } from "../../../foundations/src/typography/typography.settings";

export const Button = styled.button<ButtonTypes>`
  background-color: ${({ displayType, theme }) =>
    displayType === "primary"
      ? ThemeSelectors.getPrimary(theme)
      : ThemeSelectors.getSecondary(theme)};
  border: none;
  border-radius: ${({ theme }) => ThemeSelectors.getBorderRadius(theme)};
  box-shadow: ${({ theme }) => ThemeSelectors.getShadow(theme)};
  color: ${({ theme }) => ThemeSelectors.getWhite(theme)};
  cursor: pointer;
  display: inline-block;
  outline: none;
  padding: ${({ theme }) => ThemeSelectors.getGroupTwoSpacing(theme)}
    ${({ theme }) => ThemeSelectors.getGroupFourSpacing(theme)};

  ${({ theme }) => typography(theme)};
`;
