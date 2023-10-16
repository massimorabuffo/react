import Counter from './Counter'
import Container from './Container'
import { useState } from 'react'


function App() {
  const [value, setValue] = useState(false);

  const handleToggle = (event) => {
    setValue(p => !p);
  }

  return (
    <Container title={<h1 onClick={handleToggle}>Hello, word!</h1>}>
      {value && <Counter prop={0} />}
    </Container>
  )
}

export default App
