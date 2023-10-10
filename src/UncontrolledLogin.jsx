const UncontrolledLogin = () => {
    const handleFormSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const data = {
            username: formData.get('username'),
            password: formData.get('password'),
            remember: formData.get('remember') === 'on' ? 'ON' : 'OFF',
        }

        // const username = event.target.elements.namedItem('username').value;
        // const password = event.target.elements.namedItem('password').value;
        // const remember = event.target.elements.namedItem('remember').checked
        
        // const data = {
        //     username, password, remember
        // }

        console.log(data);
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