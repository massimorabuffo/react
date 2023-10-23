import Welcome from "./Welcome"
import './App.css'
import { Route, Routes } from "react-router-dom"
import Counter from "./Counter"
import ShowGitHubUser from "./ShowGitHubUser"


const App = () => {
  return <>
          <Routes>
            <Route path="/" element={<Welcome name='world'/>}/>
            <Route path='/counter' element={<Counter />} />
            <Route path="users/:username" element={<ShowGitHubUser />} />
          </Routes>
        </>
}

export default App
