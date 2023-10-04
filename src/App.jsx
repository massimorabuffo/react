import { Hello } from "./Hello"

export function App() {
  return(
      <div>
        {/* Ogni volta che uso il componente <Hello/> viene renderizzato il contenuto del suo "return" */}

        <Hello />
        <Hello />
        <Hello />
      </div>
  )
}