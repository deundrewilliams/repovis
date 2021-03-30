function Forks(props) {

    const { fork_count } = props;

    return(
        <div className="forks">
            <img src="https://img.icons8.com/ios/100/000000/code-fork.png" alt="fork icon"/>
            <p>{Number(fork_count).toLocaleString()} forks</p>
        </div>
    )

}

export default Forks;
