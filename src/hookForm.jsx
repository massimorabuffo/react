import { useState } from "react"

const useForm = () => {
    const [value, setValue] = useState({
        username: '',
        password: ''
    });

    const handleUsername = (event) => {
        setValue(p => {
            return {
                ...p,
                username: event.target.value
            }
        })
    }

    const handlePassword = (event) => {
        setValue(p => {
            return {
                ...p,
                password: event.target.value
            }
        })
    }

    return {
        value: value,
        onChangeUsername: handleUsername,
        onChangePassword: handlePassword
    }
}

export default useForm