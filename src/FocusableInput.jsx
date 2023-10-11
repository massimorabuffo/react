import { useEffect, useRef } from "react"

const FocusableInput = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        if(!inputRef.current.value) {
            console.log('First mount');
            inputRef.current.value = 'Changing the value of the input for the exercise';
        }
        inputRef.current.focus();
    }, [])

    return <>
            <form>
                <input type="text" ref={inputRef} />
            </form>
            </>
}

export default FocusableInput