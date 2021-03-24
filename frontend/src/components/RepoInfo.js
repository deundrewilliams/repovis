import RepoName from './RepoName'
import RepoDescription from './RepoDescription'
import RepoOwner from './RepoOwner'
import RepoStats from './RepoStats'


function RepoInfo(props) {

    let info = props.info

    if (info) {
        const { forks, name, description, stargazers_count, open_issues, owner: {login, avatar_url} } = info;

        return(
            <div className="repo-info">
                <RepoName name={name} />
                <RepoDescription description={description} />
                <RepoOwner owner={login} picture={avatar_url} />
                <RepoStats forks={forks} stars={stargazers_count} issues={open_issues}/>
            </div>
        )
    } else {
        return(
            <div>
                Search
            </div>
        )
    }



}

export default RepoInfo;
