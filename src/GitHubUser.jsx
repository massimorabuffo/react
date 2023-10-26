import useGitHubUser from "./hookGitHubUser"

const GitHubUser = ({ username }) => {
    const {user, error, onNewCall} = useGitHubUser(username)
  
    return <>
    <button onClick={onNewCall}>Reload the data</button>
    {(!user && !error) && <div>Loading...</div>}
    {error && <h3>Error</h3>}
    {(user && !error) &&
        <>
            <h3>{user.name}</h3>
            <h3>{user.login}</h3>
            <img src={user.avatar_url} alt="avatar" />
        </>
    }  
</>
}
 
export default GitHubUser