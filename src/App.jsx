import { Hello, Message } from "./Hello"

export function App() {
  return(
      <div>
        <Hello />
        <Message/>
        
        {/* Posso renderizzare il componente <Message/> all'interno del componente <App/>, a patto di importarlo. */}
      </div>
  )
}