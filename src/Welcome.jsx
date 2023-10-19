import { Age } from "./Age";

export function Welcome({ name, age }) {
    return (
        <>
            {name ? <p>Welcome, {name}!</p> : <p>Please, insert a name!</p>}
            {<Age age={ age } />}
        </>
    )
}