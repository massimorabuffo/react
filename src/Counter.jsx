import { useEffect, useState } from 'react'
import { Clock } from './Clock'
import { MouseClicker } from './MouseClicker'
import CounterDisplay from './CounterDisplay'

export function Counter({initialValue, incrementAmount, decrementAmount}) {
    const [counter, setCounter] = useState(initialValue)
    useEffect(() => {
        console.log(counter)
    }, [counter])

    function handleIncrement() {
        setCounter(c => c + incrementAmount)
    }
    function handleDecrement() {
        setCounter(c => c - decrementAmount)
    }
    function handleReset() {
        setCounter(initialValue)
    }

    return <>
            <CounterDisplay count = {counter}/>
            <button onClick={handleIncrement}>Click to increment!</button>
            <button onClick={handleDecrement}>Click to decrement!</button>
            <button onClick={handleReset}>Click to reset!</button>
            <Clock />
            <MouseClicker name="one"/>
            </>
}