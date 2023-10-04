function Welcome({ name }) {
    return <p>Welcome, {name}!</p>
}

export function App() {
    return <Welcome name="Massimo" />
}