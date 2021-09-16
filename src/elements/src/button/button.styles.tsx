import styled from 'styled-components'
import { ButtonTypes } from './button.types'
import { ThemeSelectors } from '../../../foundations/src/selectors/theme-selectors'

export const Button = styled.button<ButtonTypes>`
    background-color: ${({ displayType, theme }) => displayType === 'primary' ? ThemeSelectors.getPrimary(theme) : ThemeSelectors.getSecondary(theme)};    
    border: none;
    border-radius: 4px;
    box-shadow: ${({ theme }) => ThemeSelectors.getShadow(theme)};
    color: ${({ theme }) => ThemeSelectors.getWhite(theme)};    
    cursor: pointer;
    display: inline-block;
    font-family: ${({ theme }) => ThemeSelectors.getFontRegular(theme)};
    outline: none;
    padding: 8px 12px;
`