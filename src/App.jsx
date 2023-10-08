function Welcome({ name = "unknown" }) {
    return (
        <>
            <p>Welcome, {name}!</p>
        </>
    )
}


export function App() {
    return <Welcome />
}

// Se non passo alcun prop a <Welcome>, in pagina vedrò renderizzata la stringa "Hello, unknown!".