import Welcome from "./Welcome"
import './App.css'
import { Route, Routes } from "react-router-dom"
import Counter from "./Counter"


const App = () => {
  return <>
          <Routes>
            <Route path="/" element={<Welcome name='world'/>}/>
            <Route path='/counter' element={<Counter />} />
          </Routes>
        </>
}

export default App
