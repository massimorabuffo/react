import { useState } from "react"

function Welcome({name}) {
  return <>
          <p>Welcome, {name}!</p>
          </>
}

function InteractiveWelcome() {
  const [value, setValue] = useState('')

  function handleChange(event) {
    const value = event.target.value;
    setValue(value);
  }

  return <>
          <input value = {value} onChange={handleChange} type="text"/>
          <Welcome name= {value}/>
        </>
}

function App() {
  return <>
          <InteractiveWelcome />
         </>
}

export default App



