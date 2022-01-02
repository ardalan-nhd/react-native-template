// Here is the theme creator for react navigation. It will be used by the package and make screen styling easier

const createNavigationTheme = (defaultTheme, palette) => ({
    ...defaultTheme,
    dark: true,
    colors: {
        ...defaultTheme.colors,
        primary: palette.primary,
        background: palette.background,
        card: palette.cardBG,
        text: palette.typography,
        border: null
    }
})

export default createNavigationTheme