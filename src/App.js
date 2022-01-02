import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { Provider as StoreProvider } from 'react-redux'
import store from './store/createStore'

export default function App() {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <StoreProvider store={store}>
    </StoreProvider>
  )
}
