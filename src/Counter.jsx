import { useState } from 'react'

export function Counter({initialValue, incrementAmount}) {
    const [counter, setCounter] = useState(initialValue);

    function handleIncrement() {
        setCounter(c => c + incrementAmount);
    }

    return <>
                <h2>{counter}</h2>
                <button onClick={handleIncrement}>Click to increment!</button>
            </>
}