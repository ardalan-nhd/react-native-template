import React from 'react'
import { View, Text } from 'react-native'
import { makeStyles, useTheme } from 'react-native-elements'

function Typography({ variant, textStyle, containerStyle, children, color }) {
    const styles = useStyles({ variant, color })
    const { theme } = useTheme()

    return (
        <View style={[{ ...theme?.Typography.containerStyle }, containerStyle]}>
            <Text style={[styles.text, textStyle]}>
                {children}
            </Text>
        </View>
    )
}

const useStyles = makeStyles((theme, { variant, color }) => ({
    text: {
        color: color ? theme.colors[color] ?? color : theme.colors.typography,
        fontFamily: theme.typography[variant]?.fontFamily ?? theme.typography.default.fontFamily,
        fontSize: theme.typography[variant]?.fontSize ?? theme.typography.default.fontSize,
        fontStyle: theme.typography[variant]?.fontStyle ?? theme.typography.default.fontStyle,
        fontWeight: theme.typography[variant]?.fontWeight ?? theme.typography.default.fontWeight,
        fontVariant: theme.typography[variant]?.fontVariant ?? theme.typography.default.fontVariant,
        letterSpacing: theme.typography[variant]?.letterSpacing ?? theme.typography.default.letterSpacing,
        lineHeight: theme.typography[variant]?.lineHeight ?? theme.typography.default.lineHeight
    }
}))

export default Typography
