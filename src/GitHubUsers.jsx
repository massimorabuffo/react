import { useEffect, useState } from "react";
import GitHubUser from "./GitHubUser";

const GitHubUsers = () => {
const [data, setData] = useState(null);
const [user, setUser] = useState(null);

    const fetchData = async () => {
        try{
            const response = await fetch(`https://api.github.com/users?since=XXX`)
            const json = await response.json();
            setData(json);
        }catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

const handleClickElement = (event) => {
    setUser(event.target.textContent);
}

return <>
        {user && <GitHubUser username={user}/>}
        <ul>
            {data.map(el => <li onClick={handleClickElement}>{el.login}</li>)}
        </ul>
       </>
}

 export default GitHubUsers
