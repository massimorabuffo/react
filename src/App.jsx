function Welcome({ name, age }) {
    return (
        <>
            {name ? <p>Welcome, {name}!</p> : <p>Please, insert a name!</p>}
            <Age age={ age } />
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
    return <Welcome name={<strong>Massimo</strong>} age={26}/>
}

