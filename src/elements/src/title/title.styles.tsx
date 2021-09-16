import styled from "styled-components";
import { TitleTypes } from "./title.types";
import { ThemeSelectors } from "../../../foundations/src/selectors/theme-selectors";

export const Title = styled.h1<TitleTypes>`
  color: ${({ theme }) => ThemeSelectors.getPrimary(theme)};
  font-family: ${({ theme }) => ThemeSelectors.getFontRegular(theme)};
  font-size: 32px;
`;
