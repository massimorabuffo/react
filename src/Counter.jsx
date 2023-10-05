import { useState } from 'react'


export function Counter({initialValue, incrementAmount, decrementAmount}) {
    const [counter, setCounter] = useState(initialValue)

    function handleIncrement() {
        setCounter(counter + incrementAmount)
    }
    function handleDecrement() {
        setCounter(counter - decrementAmount)
    }
    function handleReset() {
        setCounter(initialValue)
    }
    return <>
            <CounterDisplay count = {counter}/>
            <button onClick={handleIncrement}>Click to increment!</button>
            <button onClick={handleDecrement}>Click to decrement!</button>
            <button onClick={handleReset}>Click to reset!</button>
            </>
}

function CounterDisplay({count}) {
    return <h2>{count}</h2>
}