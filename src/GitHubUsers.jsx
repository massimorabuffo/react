import { useState } from "react";
import GitHubUser from "./GitHubUser";


const GitHubUsers = () => {
    const [data, setData] = useState('');
    const [users, setUsers] = useState([]);

    const handleInput = (event) => {
        setData(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setUsers(p => [...p, data]);
    }

    return <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={data} onChange={handleInput} />
                <button>Search User</button>
            </form>
            {users && <>
                        <ul>
                            {users.map(el => {
                                <li key={Math.random}>{el}</li>
                            })}
                        </ul>
                    </>}
            </>
}

 export default GitHubUsers