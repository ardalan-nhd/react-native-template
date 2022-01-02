import React from 'react'
import { StatusBar, View, StyleSheet } from 'react-native'
import { ThemeProvider } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native'
import { createTheme } from './helpers'

export default function Start() {
    const theme = createTheme()
    return (
        <>
            <StatusBar
                backgroundColor="transparent"
                translucent />
            <ThemeProvider> {/** react native elements theme */}
                <NavigationContainer> {/* react navigation container */}
                    <View style={[styles.container, { backgroundColor: palette.background }]}>
                    </View>
                </NavigationContainer>
            </ThemeProvider>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})