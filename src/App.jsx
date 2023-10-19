import { AlertClock } from "./AlertClock"
import { Welcome } from "./Welcome";

export function App() {
    const handleTime = () => {
        const time = new Date().toLocaleTimeString();
        return alert(`The current time is: ${time}.`)
    }

    return <>
            <Welcome name="John" age={18}/>
            <AlertClock alertTime = {handleTime}/>
            </>
}
