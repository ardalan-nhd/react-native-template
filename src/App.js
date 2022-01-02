import 'react-native-gesture-handler'
import React, { useEffect, useLayoutEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { Provider as StoreProvider } from 'react-redux'
import store from './store/createStore'
import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Start from './Start'

export default function App() {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  useLayoutEffect(() => {
    // check whether the app is in RTL or LTR mode and manage it
    if (!I18nManager.isRTL) {
      I18nManager.forceRTL(true)
      RNRestart.Restart() // Restart is required for styles to take effect
    }
  }, [])

  return (
    <StoreProvider store={store}> { /* Redux store provider  */}
      <SafeAreaProvider> {/* safe area provider to make use of it in <SafeAreaView /> component */}
        <Start /> {/* the entry point to our app */}
      </SafeAreaProvider>
    </StoreProvider>
  )
}
