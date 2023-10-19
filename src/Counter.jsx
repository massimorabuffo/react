import { useState } from 'react'
import CounterDisplay from './assets/CounterDisplay'


export function Counter({initialValue, incrementAmount}) {
    const [counter, setCounter] = useState(initialValue)
    function handleIncrement() {
        setCounter(c => c + incrementAmount)
    }
    return <>
            <CounterDisplay count = {counter}/>
            <button onClick={handleIncrement}>Click to increment!</button>
            </>
}
