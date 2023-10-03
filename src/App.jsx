import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const sum = (a, b) => {
    return <h2>{a + b}</h2>
  }

  return (
    <>
      {sum(3, 3)}
    </>
  )
}

export default App
