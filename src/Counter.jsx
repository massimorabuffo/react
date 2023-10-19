import { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    function handleIncrement() {
        setCounter(c => c+1);
    }

    return <>
                <h2>{counter}</h2>
                <button onClick={handleIncrement}>Click to increment!</button>
            </>
}

export default Counter