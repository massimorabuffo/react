import Welcome from "./Welcome"
import './App.css'
import { Link, Route, Routes } from "react-router-dom"
import Counter from "./Counter"
import ShowGitHubUser from "./ShowGitHubUser"
import GitHubUsers from "./GitHubUsers"


const App = () => {
  return <>
          <Link to='/'>Show the Hello component</Link>
          <Link to='counter'> Show the counter</Link>
          <Link to='users'>Show the Github user</Link>
          <Routes>
            <Route path="/" element={<Welcome name='world'/>}/>
            <Route path='/counter' element={<Counter />} />
            <Route path="users" element={<GitHubUsers />}>
              <Route path=":username" element={<ShowGitHubUser />}/>
            </Route>
            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </>
}

export default App
