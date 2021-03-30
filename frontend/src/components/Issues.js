function Issues(props) {

    const { issue_count } = props;

    return(
        <div className="issues">
            <img src="https://img.icons8.com/ios/100/000000/bug.png" alt="issue icon"/>
            <p>{Number(issue_count).toLocaleString()} Issues</p>
        </div>
    )

}

export default Issues;
