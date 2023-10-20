import { useEffect, useState } from "react"

const useGitHubUser = (username) => {
    const [data, setData] = useState(null);

    const fetchData = async (username) => {
        try{
            const response = await fetch(`https://api.github.com/users/${username}`);
            const json = await response.json();
            setData(json);
        }catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData(username);
    }, [username])

    return {data}
}

export default useGitHubUser