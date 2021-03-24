function Stars(props) {

    const { star_count } = props;

    return(
        <div className="stars">
            Stars: {star_count}
        </div>
    )

}

export default Stars;
