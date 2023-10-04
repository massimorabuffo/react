function Welcome({ name, age }) {
    return (
        <>
            {name ? <p>Welcome, {name}!</p> : <p>Please, insert a name!</p>}
            {!!age && <p>Your age is {age}.</p>}
        </>
    )
}

export function App() {
    return <Welcome name={<strong>Massimo</strong>} age={26}/>
}

// Se assegno ad un prop un'espressione jsx al posto di una stringa (usando le {}), questo assume le proprietà di quello specifico tag.
// In questo caso, <strong> è un inline-tag che rende il suo contenuto in grassetto.