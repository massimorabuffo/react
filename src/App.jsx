import Login from "./Login"
import UncontrolledLogin from "./UncontrolledLogin";

const onLogin = (data) => {
  console.log(data);
}

function App() {
  return <>
          <UncontrolledLogin />
         </>
}

export default App



