const UncontrolledLogin = () => {
    const handleFormSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const data = {
            username: formData.get('username'),
            password: formData.get('password'),
            remember: formData.get('remember') === 'on' ? 'ON' : 'OFF',
        }

        console.log(data);
        
        // Usare l'API FormData è modo non standard di accedere ai dati del form.
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