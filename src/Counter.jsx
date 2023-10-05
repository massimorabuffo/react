import { useState } from 'react'

export function Counter({initialValue, incrementAmount}) {
    const [counter, setCounter] = useState(initialValue)
    function handleIncrement() {
        setCounter(counter + incrementAmount)
    }

    return <>
            <h2>{counter}</h2>
            <button onClick={handleIncrement}>Click to increment!</button>
            </>
}