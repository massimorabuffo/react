import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


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
                <button type="submit">Search User</button>
            </form>
                <ul>
                    {users.map(el => (
                        <li key={el}>
                            <Link to={el}>Click to show the {el}'s Github info</Link>
                        </li>
                    ))}
                </ul>
                <Outlet />
            </>
}

 export default GitHubUsers