import Welcome from "./Welcome"
import './App.css'
import { Route, Routes } from "react-router-dom"


const App = () => {
  return <>
          <Routes>
            <Route path="/" element={<Welcome name='world'/>}/>
          </Routes>
        </>
}

export default App
