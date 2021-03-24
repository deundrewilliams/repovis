function Issues(props) {

    const { issue_count } = props;

    return(
        <div className="issues">
            <img src="https://img.icons8.com/ios/100/000000/bug.png" alt="issue icon"/>
            <p>{issue_count} Issues</p>
        </div>
    )

}

export default Issues;
