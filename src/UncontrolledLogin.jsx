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

        // Il vantaggio rispetto al DOM API standard è una sintassi leggermente più pulita perché non c'è bisogno di dichiarare una
        // variabile per ogni elemento del form. L'unico "svantaggio" che per ora vedo (nella lezione non si fanno accenni a svantaggi)
        // può essere la necessità di usare l'op. ternario per accedere al valore di "session", poiché restituisce come valore
        // 'on' oppure 'off', e non il nome dell'elemento.
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