import { useState } from 'react'


export function Counter({initialValue, incrementAmount}) {
    const [counter, setCounter] = useState(initialValue)
    function handleIncrement() {
        setCounter(counter + incrementAmount)
    }
    return <>
            <CounterDisplay count = {counter}/>
            <button onClick={handleIncrement}>Click to increment!</button>
            </>
}

function CounterDisplay({count}) {
    return <h2>{count}</h2>
}