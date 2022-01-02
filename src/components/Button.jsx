import React from 'react'
import { Button as Btn, useTheme } from 'react-native-elements'

function Button({ children, loading, onPress, variant = "primary", type = "solid", fullWidth, ...props }) {
    const { theme } = useTheme()
    const newVariant = variant.charAt(0).toUpperCase() + variant.slice(1)
    const newType = type.charAt(0).toUpperCase() + type.slice(1)
    return (
        <Btn {...props}
            {...theme[`Btn${newType}${newVariant}`]} /* inside createtheme add a BtnSolidPrimary for example */
            containerStyle={{ alignSelf: fullWidth && 'stretch' }}
            onPress={onPress}
            title={children}
            type={type} />
    )
}

export default Button