import { useState } from 'react'

export function Counter() {
    const [counter, setCounter] = useState(0)
    function handleIncrement() {
        setCounter(counter + 1)
        // In questo caso va bene anche passare un valore immediato anziché una callback. Se invece avessimo bisogno di cambiare immediatamente il valore di counter, dovremmo appunto usare una callback.
    }

    return <>
            <h2>{counter}</h2>
            <button onClick={handleIncrement}>Click to increment!</button>
            </>
}
