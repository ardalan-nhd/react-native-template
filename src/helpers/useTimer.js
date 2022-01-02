// Custom countdown timer hook

import { useState, useEffect, useRef } from 'react'
import { AppState } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function useTimer({ from, to, intervalS, finished }) {
    const appState = useRef(AppState.currentState)
    const [timer, setTimer] = useState(from)
    const timerRef = useRef(from)
    const interval = useRef()

    const start = () => {
        if (!interval.current) {
            interval.current = setInterval(() => {
                setTimer(timer => {
                    timerRef.current = timer - intervalS
                    return timer - intervalS
                })
            }, intervalS * 1000)
        }
    }

    const pause = () => {
        clearInterval(interval.current)
        interval.current = null
    }

    const stop = () => {
        clearInterval(interval.current)
        interval.current = null
        setTimer(from)
        timerRef.current = from
    }

    const restart = () => {
        finished(false)
        clearInterval(interval.current)
        interval.current = null
        setTimer(from)
        timerRef.current = from
        start()
    }

    const appStateHandler = async (nextAppState) => {
        if (appState.current.match(/inactive|background/) && nextAppState === "active") {
            try {
                let lastTime = await AsyncStorage.getItem('timer')
                lastTime = lastTime.split('-')
                const now = Math.floor(Date.now() / 1000)
                setTimer((lastTime[1] - (now - lastTime[0])) > to ? lastTime[1] - (now - lastTime[0]) : to)
                timerRef.current = (lastTime[1] - (now - lastTime[0])) < to ? lastTime[1] - (now - lastTime[0]) : to
            }
            catch (err) {
                console.log(err)
            }
        } else if (appState.current === "active" && nextAppState.match(/inactive|background/)) {
            try {
                await AsyncStorage.setItem('timer', `${Math.floor(Date.now() / 1000)}-${timerRef.current}`)
            }
            catch (err) {
                console.log('error happened', err)
            }
        }
        appState.current = nextAppState
    }

    useEffect(() => {
        AppState.addEventListener('change', appStateHandler)
        return () => {
            AppState.removeEventListener('change', appStateHandler)
            clearInterval(interval.current)
        }
    }, [])

    useEffect(() => {
        if (timer === to) {
            finished(true)
            clearInterval(interval.current)
        }
    }, [timer])

    return {
        value: timer,
        start,
        pause,
        restart,
        stop
    }
}
