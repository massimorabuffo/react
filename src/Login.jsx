import { useState } from "react"

function Login({login}) {
  const [data, setData] = useState({
    userName: '',
    password: '',
    remember: false,
  })

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    const checked = event.target.checked;

    setData((data) => {
      return {
        ...data,
        [name]: name === 'remember' ? checked : value,
      }
    })
  }

  function handleLogin() {
    login(data);
  }

  function handleReset() {
    setData((data) => {
        return{
            userName: '',
            password: '',
            remember: false,
        }
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
  }

  return <>
          <form onSubmit={handleFormSubmit}>
            <input type="text" name = 'userName' value = {data.userName} onChange={handleChange}/>
            <input type="password" name = 'password' value = {data.password} onChange={handleChange}/>
            <input type="checkbox" name = 'remember' checked = {data.remember} onChange={handleChange} />
            <label>Remember me</label>
            <button disabled={!data.userName || !data.password}>login</button>
            <button onClick={handleReset}>reset</button>
          </form>
         </>
}

// Esercizio aggiornato usando il metodo preventDefault che viene spiegato nella lezione sugli uncontrolled forms, mentre questo esercizio
// è classificato come controlled forms.


export default Login