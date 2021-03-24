import '../css/RepoDescription.css'

function RepoDescription(props) {

    const { description } = props;

    return(
        <div className="repo-description">
            "{description}"
        </div>
    )

}

export default RepoDescription;
