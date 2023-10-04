function Welcome({ name, age }) {
    return (
        <>
            {name ? <p>Welcome, {name}!</p> : <p>Please, insert a name!</p>}
            {(age > 18 && age < 65) && name === "John" ? <Age age={ age } /> : !age}
        </>
    )
}

function Age({ age }) {
    return (
        <>
            {!!age && <p>Your age is {age}.</p>}
        </>
    )
}

export function App() {
    return <Welcome name="John" age={26}/>
}

// In questo caso a riga 19 ho dovuto modificare il tipo di valore passato a "name" da JSX a stringa, altrimenti la seconda condizione
// a riga 5 risulta sempre falsy. C'è un modo per far funzione il codice anche passando un JSX ad un prop?