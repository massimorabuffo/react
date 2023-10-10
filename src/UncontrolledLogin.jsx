const UncontrolledLogin = () => {
    const handleFormSubmit = (event) => {
        event.preventDefault();

     console.log(event.target.username.value)
     // Credo che questo sia un modo non standandard per accedere ai dati del form.
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" name = 'username' />
            <input type="password" name = 'password' />
            <input type="checkbox" name = 'remember' />
            <label>Remember me</label>
            <button >login</button>
            <button type="reset">reset</button>
        </form>
)}

export default UncontrolledLogin