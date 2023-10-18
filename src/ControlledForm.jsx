import useForm from "./hookForm"

const ControlledForm = () => {
    const {value, onChangeUsername, onChangePassword} = useForm({});

    return <>
            <form>
                <input type="text" value={value.username} onChange={onChangeUsername}/>
                <input type="password" value={value.password} onChange={onChangePassword}/>
                <button>Submit</button>
            </form>
            </>
}

export default ControlledForm