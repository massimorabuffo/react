import Counter from './Counter'
import Container from './Container'


function App() {

  return (
    <Container title={<h1>Hello, word!</h1>}>
      <Counter prop={0} />
    </ Container>
  )
}

export default App
