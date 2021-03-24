import '../css/RepoOwner.css'

function RepoOwner(props) {

    const { owner, picture, owner_link } = props;

    return(
        <div className="repo-owner">
            Owner: {owner}<br></br>
            <a href={owner_link} target="_blank" rel="noreferrer"><img id="owner-pic" src={picture} alt="avatar profile"/></a>
        </div>
    )

}

export default RepoOwner;
