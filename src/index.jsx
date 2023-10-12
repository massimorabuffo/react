import Counter from "./Counter"
import Login from "./Login"
import Welcome from "./Welcome"
import './index.css'


const Index = () => {
  return <>
          <Welcome className='welcome'/>
          <Counter />
          <Login />
        </>
}

export default Index
