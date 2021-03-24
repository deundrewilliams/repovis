import '../css/RepoOwner.css'

function RepoOwner(props) {

    const { owner, picture } = props;

    return(
        <div className="repo-owner">
            Owner: {owner}<br></br>
            <img id="owner-pic" src={picture} alt="avatar profile"/>
        </div>
    )

}

export default RepoOwner;
