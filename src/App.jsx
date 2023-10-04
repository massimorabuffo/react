function Welcome({ name }) {
    return (
        <>
            {name ? <p>Welcome, {name}!</p> : <p>Please, insert a name!</p>}
        </>
    )
}

export function App() {
    return <Welcome />
}

// Se non passo alcun prop a <Welcome>, in pagina vedrò renderizzata semplicemente la stringa "Hello, !".