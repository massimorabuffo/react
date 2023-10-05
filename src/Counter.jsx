import { useState } from 'react'

export function Counter() {
    const [counter, setCounter] = useState(0)
    function handleIncrement() {
        setCounter(counter + 1)
    }

    return <>
            <h2>{counter}</h2>
            <button onClick={handleIncrement}>Click to increment!</button>
            </>
}