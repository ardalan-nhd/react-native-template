// We create react-native-elements theme using this function
// Here is an example theme to get you started

const createTheme = (palette) => ({
    colors: { ...palette },
    typography: {
        default: {
            fontSize: 16,
            letterSpacing: -0.3,
            fontFamily: "IRANSans"
        },
        heading: {
            fontSize: 18,
            fontFamily: 'IRANSansBold',
            lineHeight: 31,
        },
        headingNormal: {
            fontSize: 18,
            lineHeight: 31,
        },
        body: {
            fontSize: 16,
            lineHeight: 27,
        },
        title: {
            fontSize: 18,
            lineHeight: 31,
        },
        subtitle: {
            fontSize: 15,
            lineHeight: 25
        },
        tabLabel: {
            fontSize: 12,
            lineHeight: 20
        },
    },
    Card: {
        containerStyle: {
            backgroundColor: palette.cardBG,
            borderColor: `${palette.primary}90`,
            borderWidth: 1,
            borderRadius: 20,
            margin: 0
        }
    },
    Button: {
        buttonStyle: {
            borderRadius: 15,
            paddingVertical: 10
        },
        titleStyle: {
            fontSize: 20,
            fontFamily: 'IRANSans'
        }
    },
    BtnSolidPrimary: {
        buttonStyle: {
            backgroundColor: palette.primary
        }
    },
    BtnSolidSecondary: {
        buttonStyle: {
            backgroundColor: palette.secondary
        }
    },
    Typography: {
        containerStyle: {
            alignItems: 'center'
        }
    }
})

export default createTheme