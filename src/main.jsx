import React from 'react'
import ReactDOM from 'react-dom/client'
import { Counter } from './Counter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter initialValue = {0} incrementAmount={1} decrementAmount={1}/>
  </React.StrictMode>,
)
