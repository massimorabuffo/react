import { Counter } from "./Counter"
import { MultiButton } from "./MultiButton"

const App = () => {
    return <>
                <Counter initialValue = {0} incrementAmount={1} decrementAmount={1}/>
                <MultiButton name1="one" name2="two" name3="three"/>
            </>
}

export default App