import { useEffect, useState } from "react"

const GitHubUser = ({ username }) => {
    const [data, setData] = useState(null);

    const fetchData = async () => {
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
    
    return <>
            {!data && <div>Loading...</div>}{
                data && 
                    <>
                        <h3>{data.name}</h3>
                        <h3>{data.login}</h3>
                        <img src={data.avatar_url} alt="avatar" />
                    </>
            }
            
        </>
}
 
export default GitHubUser