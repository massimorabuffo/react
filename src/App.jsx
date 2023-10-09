import Login from "./Login"

const onLogin = (data) => {
  console.log(data);
}

function App() {
  return <>
          <Login login={onLogin}/>
         </>
}

export default App



