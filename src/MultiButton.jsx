export function MultiButton({name1, name2, name3}) {
    function handleButtonEvent(event) {
        console.log(event.target.name)
    }
  
    return <div>
                <button name = {name1} onClick={handleButtonEvent}>Click here to see "{name1}" on console!</button>
                <button name = {name2} onClick={handleButtonEvent}>Click here to see "{name2}" on console!</button>
                <button name = {name3} onClick={handleButtonEvent}>Click here to see "{name3}" on console!</button>
            </div>
}

