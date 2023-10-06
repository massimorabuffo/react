export function MouseClicker({name}) {
    function handleButtonEvent(event) {
        console.log(event.target.name)
    }
    return <button name = {name} onClick={handleButtonEvent}>Click here to see "{name}" on console!</button>
}