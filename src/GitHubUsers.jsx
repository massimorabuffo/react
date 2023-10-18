import { useState } from "react";
import GitHubUser from "./GitHubUser";

const users = ['massimorabuffo', 'massimorabuffo', 'massimorabuffo'];

const GitHubUsers = () => {
    const [value, setValue] = useState(null);

    const handleClickElement = (event) => {
        setValue(event.target.textContent);
    }
    console.log(value)

    return <>
            {value && <GitHubUser username={value} />} 
            <ul>
                {users.map(el => <li onClick={handleClickElement} key={Math.random()}>{el}</li>)}
            </ul>
            </>
}

 export default GitHubUsers


// const GitHubUsers = () => {
// const [data, setData] = useState(null);
// const [user, setUser] = useState(null);

//     const fetchData = async () => {
//         try{
//             const response = await fetch(`https://api.github.com/users?since=XXX`)
//             const json = await response.json();
//             console.log(json);
//             setData(json);
//         }catch(error) {
//             console.error(error);
//         }
//     }

//     useEffect(() => {
//         fetchData();
//     }, [])

// const handleClickElement = (event) => {
//     setUser(event.target.textContent);
// }

// return <>
//         {user && <GitHubUser username={user}/>}
//         <ul>
//             {data.map(el => <li key={el.id} onClick={handleClickElement}>{el.login}</li>)}
//         </ul>
//        </>
// }