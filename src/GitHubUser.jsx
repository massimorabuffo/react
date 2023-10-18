import useGitHubUser from "./hookGitHubUser"

const GitHubUser = ({ username }) => {
    const {data, loading, error} = useGitHubUser(username)
  
    return <>
            {loading && <h3>Loading...</h3>}
            {error && <h3>Error!</h3>}
            <h3>{data.name}</h3>
            <h3>{data.login}</h3>
            <img src={data.avatar_url} alt="avatar" />
        </>
}
 
export default GitHubUser