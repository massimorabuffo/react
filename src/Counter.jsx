import { useState } from "react"

const Counter = () => {
    const [data, setData] = useState(0);

    const handleCounter = (event) => {
        if(event.target.name === 'up') {
            setData(d => d+1);
        } else if(event.target.name === 'down') {
            setData(d => d-1);
        }
    }

    return <>
            <button name='up' onClick={handleCounter}>Up</button>
            <div style={{
                width: '50px',
                height: '50px',
                backgroundColor: 'red',
                borderRadius: '50px',
                textAlign: 'center'
            }}>{data}</div>
            <button name='down'onClick={handleCounter}>Down</button>
            </>
}

export default Counter