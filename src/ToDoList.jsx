import { useState } from "react"

const ToDoList = ({ array }) => {

    const [items, setItems] = useState(array);
    const [data, setData] = useState('');

    const handleInput = (event) => {
        const input = event.target.value;
        setData(input);
    }

    const handleAddString = () => {
        console.log(data)
        setItems(items => items.concat(data))
        setData('')
    }

    return(<>
            <ul>
                {items.map((element, index) => (
                    <li key={index}>{element}</li>
                ))}
            </ul>
            <input type="text" value = {data} onChange={handleInput}/>
            <button onClick={handleAddString}>Push to add!</button>
        </>)
}

export default ToDoList