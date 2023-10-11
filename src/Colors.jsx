import Color from "./Color"

const Colors = ({ items }) => {
    return (
        <ul>
            {items.map((element) => 
                <Color key = {element.id} obj = {element}/>
            )}
        </ul>
    )
}

export default Colors