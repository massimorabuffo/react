import { useEffect, useRef, useState } from "react";

const Counter = () => {
   const [count, setCount] = useState(0);
   const countRef = useRef(null);

    useEffect(() => {
        console.log(countRef.current.innerHTML)
    }, [count])

    const handleUpButton = () => {
        setCount(c => c+1);
    }

    const handleDownButton = () => {
        setCount(c => c-1)
    }

    return (<>
            <button className="border border-black" onClick={handleUpButton}>Up</button>
            <div ref={countRef}>{count}</div>
            <button className="border border-black" onClick={handleDownButton}>Down</button>
            </>)
            
}

export default Counter