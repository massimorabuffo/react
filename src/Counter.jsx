import { useEffect, useState } from 'react'
import { Clock } from './Clock'
import { MultiButton } from './MultiButton'

export function Counter({initialValue, incrementAmount, decrementAmount}) {
    const [counter, setCounter] = useState(initialValue)
    useEffect(() => {
        console.log(counter)
    }, [counter])

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
            <Clock />
            <MultiButton name1="one" name2="two" name3="three"/>
            </>
}

function CounterDisplay({count}) {
    return <h2>{count}</h2>
}