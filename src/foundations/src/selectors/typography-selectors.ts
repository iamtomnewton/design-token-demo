import { DefaultTheme as Theme } from '../../../tokens/dist/styles'

//! DO NOT IMPORT FROM THIS FILE - USE './theme-selectors.ts' INSTEAD

export const getFontSrc = (theme: Theme) => {
    return theme.typography.fontSrc
}

export const getDefaultStack = (theme: Theme) => {
    return theme.typography.defaultStack
}

export const getFontRegular = (theme: Theme) => {
    return theme.typography.regular.fontName
}

export const getFontMedium = (theme: Theme) => {
    return theme.typography.medium.fontName
}