import { useEffect, useRef } from "react"

const FocusableInput = () => {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return <>
            <form>
                <input type="text" ref={inputRef} />
            </form>
            </>
}

export default FocusableInput