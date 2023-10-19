import { useState } from 'react'

export function Counter() {
    const [counter, setCounter] = useState(0)
    function handleIncrement() {
        setCounter(c => c+1)
        // Se ho capito bene la domanda, il modo corretto di incrementare "counter" è usare la funzione setCounter (invece che riassegnare un valore direttamenter a counter, del tipo "counter++").
        // Questo perché non è possibile riassegnare valore ad una variabile dichiarata con const (riga 4), inoltre setCounter è una funzione costruita appositamente per modellare la variabile counter.
    }

    return <>
            <h2>{counter}</h2>
            <button onClick={handleIncrement}>Click to increment!</button>
            </>
}
