import { AlertClock } from "./AlertClock"

function Welcome({ name, age }) {
    return (
        <>
            {name ? <p>Welcome, {name}!</p> : <p>Please, insert a name!</p>}
            {<Age age={ age } />}
        </>
    )
}

function Age({ age }) {
    return (
        <>
            {age > 18 ? <p>Your age is {age}.</p> : <p>You are very young!</p>}
        </>
    )
}

export function App() {
    return <>
             <Welcome name="John" age={18}/>
             <select>
                <option value="it">ITA</option>
                <option value="en">ENG</option>
             </select>
             <AlertClock />
            </>
}