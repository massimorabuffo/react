import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const helloName = (name) => {
    return <h1>Hello, {name}!</h1>
  }

  return (
    <>
      {helloName()}
      
      {/* Non passando alcun parametro alla funzione, in pagina avrò un semplice h1: "Hello, !" */}
    </>
  )
}

export default App
