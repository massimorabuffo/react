export function MouseClicker({name}) {
    function handleButtonEvent(event) {
        console.log(event.currentTarget.name)
    }
    return <button name = {name} onClick={handleButtonEvent}>
                <img width={25} height={25}/>
                Click here to see "{name}" on console!
           </button>
}