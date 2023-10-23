import { useParams } from "react-router-dom"
import GitHubUser from "./GitHubUser";

const ShowGitHubUser = () => {
    const {username} = useParams();

    return <>
                <GitHubUser username={username} />
            </>
}

export default ShowGitHubUser