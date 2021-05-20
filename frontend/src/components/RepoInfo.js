import RepoName from './RepoName';
import RepoDescription from './RepoDescription';
import RepoOwner from './RepoOwner';
import RepoStats from './RepoStats';
import CreationDate from './CreationDate';

import '../css/RepoInfo.css'


function RepoInfo(props) {

    let info = props.info;

    if (info) {
        const { forks, name, description, stargazers_count, open_issues, created_at,
                owner: {login, avatar_url, html_url} } = info;

        return(
            <div className="repo-info">
                <RepoName name={name} owner_link={html_url}/>
                <RepoDescription description={description} />
                <RepoOwner owner={login} picture={avatar_url} owner_link={html_url}/>
                <CreationDate creation_date={created_at}/>
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
