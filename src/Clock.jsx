export function Clock() {
    const time = new Date().toLocaleTimeString();
    
    return <> 
            <div>{time}</div>
            </>
}