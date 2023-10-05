import { useEffect, useState } from "react";

export function Clock() {
    const [time, setTime] = useState(new Date())
    
    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [])

    return <h2>Current time is: {time.toLocaleTimeString()}</h2>  
}