import { Clock } from "./Clock"
import Counter from "./Counter"
import Login from "./Login"
import Welcome from "./Welcome"
import './index.scss'


const Index = () => {
  return <>
          <Welcome className='welcome'/>
          <Counter />
          <Login />
          <Clock />
        </>
}

export default Index
