import useSWr from "SWR"

const useGitHubUser = (username) => {
    const {data, error, mutate} = username && useSWr(`https://api.github.com/users/${username}`);

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