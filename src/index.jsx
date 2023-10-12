import Counter from "./Counter"
import Welcome from "./Welcome"
import './index.css'


const Index = () => {
  return <>
          <Welcome className='welcome'/>
          <Counter />
        </>
}

export default Index
