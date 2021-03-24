function RepoDescription(props) {

    const { description } = props;

    return(
        <div className="repo-description">
            Description: {description}
        </div>
    )

}

export default RepoDescription;
