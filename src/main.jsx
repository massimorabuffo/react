import React from 'react'
import ReactDOM from 'react-dom/client'
import { Counter } from './Counter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter initialValue = {2} incrementAmount={3}/>
  </React.StrictMode>,
)
