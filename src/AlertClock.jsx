export function AlertClock({alertTime}) {
    return <>
            <button onClick = {alertTime}>Click here to show the current time!</button>
            </>
}

export const handleTime = () => {
    const time = new Date().toLocaleTimeString();
    return alert(`The current time is: ${time}.`)
}

// Ho importato il time handler nel componente App.