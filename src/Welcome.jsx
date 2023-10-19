import { Age } from "./Age";

export function Welcome({ name, age }) {
    return (
        <>
            {name ? <p>Welcome, {name}!</p> : <p>Please, insert a name!</p>}
            {(age > 18 && age < 65) && name === "John" ? <Age age={ age } /> : !age}
        </>
    )
}