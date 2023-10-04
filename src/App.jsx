function Welcome({ name, age }) {
    return (
        <>
            {name ? <p>Welcome, {name}!</p> : <p>Please, insert a name!</p>}
            {!!age && <p>Your age is {age}.</p>}
        </>
    )
}

export function App() {
    return <Welcome name="Massimo" age={26}/>
}
