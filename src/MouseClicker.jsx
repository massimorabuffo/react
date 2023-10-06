export function MouseClicker({name}) {
    function handleButtonEvent(event) {
        console.log(event.target.name)
    }
    function handleImgClick(event) {
        console.log(event.currentTarget.src)
    }
    return <button name = {name} onClick={handleButtonEvent}>
            <img src={"source of the image"}width={25} height={25} onClick={handleImgClick}/>
            Click here to see "{name}" on console!
           </button>
}

// Usando l'event.target al posto dell'event.currentTarget nel button handler, si previene la stampa in console di "name".