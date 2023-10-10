const UncontrolledLogin = () => {
    const handleFormSubmit = (event) => {
        event.preventDefault();

        const username = event.target.elements.namedItem('username').value;
        const password = event.target.elements.namedItem('password').value;
        const remember = event.target.elements.namedItem('remember').checked
        
        const data = {
            username, password, remember
        }

        // Ho evitato di creare un handler per disabilitare il login button quando gli input sono vuoti, poiché sarebbe divenuto molto simile
        // ad un controlled form.

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