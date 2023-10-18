import useCounter from "./hookCounter"

const Counter = ({ initialValue = 0 }) => {
    const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue);

    return <>
            <h3>{counter}</h3>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
            </>
}

export default Counter