import '../css/RepoName.css'

function RepoName(props) {

    const { name, owner_link } = props;

    let repo_link = owner_link + "/" + name

    return(
        <div className="repo-name">
            <a href={repo_link} target="_blank" rel="noreferrer">
                <div>
                    {name}
                </div>
            </a>
        </div>
    )
}

export default RepoName;
