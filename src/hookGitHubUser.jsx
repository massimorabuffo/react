import { useEffect, useState } from "react"

const useGitHubUser = (username) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (username) => {
        setLoading(true);
        setError(null);

        try{
            const response = await fetch(`https://api.github.com/users/${username}`);
            const json = await response.json();

            if(response.status !== 200){
                setError(new Error());
            }
            setData(json);

        } catch (error){
            console.error(error);
            setData(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(username);
    }, [username])

    return {
        data,
        loading,
        error,
    }
}

export default useGitHubUser