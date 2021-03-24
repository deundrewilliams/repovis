function Stars(props) {

    const { star_count } = props;

    return(
        <div className="stars">
            <img src="https://img.icons8.com/ios/100/000000/star--v1.png" alt="star icon"/>
            <p>{star_count} stars</p>
        </div>
    )

}

export default Stars;
