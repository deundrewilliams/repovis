import '../css/RepoName.css'

function RepoName(props) {

    const { name } = props;

    return(
        <div className="repo-name">
            {name}
        </div>
    )
}

export default RepoName;
