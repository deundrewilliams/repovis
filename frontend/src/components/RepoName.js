function RepoName(props) {

    const { name } = props;

    return(
        <div className="repo-name">
            Name: {name}
        </div>
    )
}

export default RepoName;
