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
      {helloName(<h6>Massimo</h6>)}

      {/* Passando come parametro un'espressione JSX, la funzione ritornerà a schermo una stringa che contine però le caratteristiche html del 
      tag passato, il questo caso il tag <h6> mantiene la sua caratteristica di block-level tag. */}
    </>
  )
}

export default App
