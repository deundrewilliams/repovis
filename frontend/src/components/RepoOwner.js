function RepoOwner(props) {

    const { owner, picture } = props;

    return(
        <div className="repo-owner">
            Owner: {owner}
            <img src={picture} alt="avatar profile"/>
        </div>
    )

}

export default RepoOwner;
