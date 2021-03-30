function Stars(props) {

    const { star_count } = props;

    return(
        <div className="stars">
            <img src="https://img.icons8.com/ios/100/000000/star--v1.png" alt="star icon"/>
            <p>{Number(star_count).toLocaleString()} stars</p>
        </div>
    )

}

export default Stars;
