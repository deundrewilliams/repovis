function Issues(props) {

    const { issue_count } = props;

    return(
        <div className="issues">
            Issues: {issue_count}
        </div>
    )

}

export default Issues;
