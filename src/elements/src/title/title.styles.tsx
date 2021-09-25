import styled from "styled-components";
import { TitleTypes } from "./title.types";
import { ThemeSelectors } from "../../../foundations/src/selectors/theme-selectors";
import { typography } from "../../../foundations/src/typography/typography.settings";

export const Title = styled.h1<TitleTypes>`
  color: ${({ theme }) => ThemeSelectors.getPrimary(theme)};
  ${({ theme }) => typography(theme, "title")};
`;
