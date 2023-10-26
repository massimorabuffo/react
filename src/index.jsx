import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import {SWRConfig} from 'swr'

const fetcher = url => fetch(url).then(response => response.json());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SWRConfig value={{fetcher}}>
      <App />
    </SWRConfig>
  </React.StrictMode>,
)
