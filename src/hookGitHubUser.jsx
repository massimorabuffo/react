import useSWr from "SWR"

const fetcher = url => fetch(url).then(response => response.json());

const useGitHubUser = (username) => {
    const {data, error} = useSWr(`https://api.github.com/users/${username}`, fetcher);

    return {
        user: data,
        error,
    }
}

export default useGitHubUser