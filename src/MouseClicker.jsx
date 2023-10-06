export function MouseClicker({name}) {
    function handleButtonEvent(event) {
        console.log(event.currentTarget.name)
    }
    function handleImgClick(event) {
        console.log(event.currentTarget.src)
    }
    return <button name = {name} onClick={handleButtonEvent}>
            <img src={"source of the image"}width={25} height={25} onClick={handleImgClick}/>
            Click here to see "{name}" on console!
           </button>
}

// L'attributo "name" del button viene stampato in console se si clicca sull'imagine, questo perché viene triggerato l'onClick event sia
// dell'img sia del button.Se invece a riga 3 scrivessi event.target.name, a quel punto il "name" verrebbe stampato solo
// al click sul button, ma non al click sull' img. Questo perché l'event.target si riferisce solo all'elemento HTML su cui si fa click col
// mouse: in questo caso, l'img.