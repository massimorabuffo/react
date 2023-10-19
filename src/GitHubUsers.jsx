import { useState } from "react";
import GitHubUser from "./GitHubUser";

const users = ['massimorabuffo', 'massimorabuffo', 'massimorabuffo'];

const GitHubUsers = () => {
    const [data, setData] = useState(null);

    const handleInput = (event) => {
        setData(event.target.value);
    }

    const handleSubmit = () => {

    }

    return <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={data} onChange={handleInput} />
                <button>Search User</button>
            </form>
            </>
}

 export default GitHubUsers