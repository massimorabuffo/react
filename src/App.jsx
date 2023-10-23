import Welcome from "./Welcome"
import './App.css'
import { Link, Route, Routes } from "react-router-dom"
import Counter from "./Counter"
import ShowGitHubUser from "./ShowGitHubUser"


const App = () => {
  return <>
          <Link to='/'>Show the Hello component</Link>
          <Link to='counter'> Show the counter</Link>
          <Link to='users/:username'>Show the Github user</Link>
          <Routes>
            <Route path="/" element={<Welcome name='world'/>}/>
            <Route path='/counter' element={<Counter />} />
            <Route path="users/:username" element={<ShowGitHubUser />} />
          </Routes>
        </>
}

export default App
