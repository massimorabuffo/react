import useSWr from "SWR"

const fetcher = url => fetch(url).then(response => response.json());

const useGitHubUser = (username) => {
    const {data, error, mutate} = username && useSWr(`https://api.github.com/users/${username}`, fetcher);

    const handleNewApiCall = () => {
        mutate();
    }

    return {
        user: data,
        error,
        onNewCall: handleNewApiCall,
    }
}

export default useGitHubUser