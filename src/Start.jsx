import React from 'react'
import { StatusBar, View } from 'react-native'
import { makeStyles } from 'react-native-elements'

export default function Start() {
    const styles = useStyles()
    return (
        <>
            <StatusBar
                backgroundColor="transparent"
                translucent />
            <View style={styles.container}>
            </View>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.colors.background,
        flex: 1
    }
}))