import { Counter } from "./Counter"

const App = () => {
    return <>
                <Counter initialValue = {0} incrementAmount={1} decrementAmount={1}/>
            </>
}

export default App