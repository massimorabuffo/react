import { AlertClock } from "./AlertClock"
import { Welcome } from "./Welcome"

export function App() {
    return <>
                <Welcome name="John" age={18}/>
                <AlertClock />
            </>
}