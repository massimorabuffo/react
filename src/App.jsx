function Welcome({ name, age }) {
    return (
        <>
            {name ? <p>Welcome, {name}!</p> : <p>Please, insert a name!</p>}
            {age ? <Age age={ age } /> : !age}
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
    return <Welcome name={<strong>Massimo</strong>} />
}

// In questo caso l'operatore ternario a riga 5 è superfluo, poiché ci pensa già il condizionale a riga 15 a rendere "undefined"
// nel caso in cui il prop "age" dovesse mancare. L'ho inserito lo stesso al fine di completare l'esercizio.