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

  return <>
          <input type="text" name = 'userName' value = {data.userName} onChange={handleChange}/>
          <input type="password" name = 'password' value = {data.password} onChange={handleChange}/>
          <input type="checkbox" name = 'remember' checked = {data.remember} onChange={handleChange} />
          <label>Remember me</label>
          <button disabled={!data.userName || !data.password} onClick={handleLogin}>login</button>
         </>
}



export default Login