// Ho dimenticato di creare un nuovo branch, quindi questo branch include sia l'esercizio 58 sia il 59, che sono concatenabili

import { useState } from "react"

const ToDoList = ({ array }) => {

    const [items, setItems] = useState(array);
    const [data, setData] = useState('');

    const handleInput = (event) => {
        const input = event.target.value;
        setData(input);
    }

    const handleAddString = () => {
        setItems(items => items.concat(data))
        setData('')
    }

    const handleReset = () => {
        setItems([])
    }

    const handleRemoveSingleItem = (event) => {
        const deletedItem = items.splice(event.target.id, 1);
        const createNewArr = (element) => {
            return element !== deletedItem;
        }
        setItems(items.filter(createNewArr));
    }

    return(<>
            <ul>
                {items.map((element, index) => (
                    <li key={index}>
                        {element}
                        <button id={index} onClick={handleRemoveSingleItem}>Remove this item</button>
                    </li>
                ))}
            </ul>
            <input type="text" value = {data} onChange={handleInput}/>
            <button onClick={handleAddString} disabled={!data}>Push to add!</button>
            <button onClick={handleReset}>Reset the list</button>
        </>)
}

export default ToDoList