export function AlertClock() {
    const alertTime = () => {
        const time = new Date().toLocaleTimeString();
        alert(`The current time is: ${time}.`)
    }
    return <>
            <button onClick = {alertTime}>Click here to show the current time!</button>
            </>
}