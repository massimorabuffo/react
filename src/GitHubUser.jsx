import useGitHubUser from "./hookGitHubUser"

const GitHubUser = ({ username }) => {
    const {data} = useGitHubUser(username)
  
    return <>
            <h3>{data.name}</h3>
            <h3>{data.login}</h3>
            <img src={data.avatar_url} alt="avatar" />
        </>
}
 
export default GitHubUser