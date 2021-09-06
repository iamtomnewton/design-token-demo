export interface DefaultTheme {
    color:  Color;
    button: Button;
    size:   Size;
    font:   DefaultThemeFont;
}

export interface Button {
    border: Border;
    text:   Text;
    height: string;
}

export interface Border {
    radius: string;
}

export interface Text {
    size: string;
}

export interface Color {
    brand:     Brand;
    base:      Base;
    primary:   string;
    secondary: string;
    action:    Action;
    font:      Action;
}

export interface Action {
    primary:   string;
    secondary: string;
    tertiary:  string;
    base?:     string;
}

export interface Base {
    black: string;
    white: string;
    gray:  Gray;
    red:   string;
    green: string;
}

export interface Gray {
    light:  string;
    medium: string;
    dark:   string;
}

export interface Brand {
    primary:    string;
    secondary:  string;
    testValue?: string;
    darkTest?:  string;
}

export interface DefaultThemeFont {
    platform: Platform;
}

export interface Platform {
    system: string;
}

export interface Size {
    font: SizeFont;
}

export interface SizeFont {
    small:  string;
    medium: string;
    large:  string;
    base:   string;
}
