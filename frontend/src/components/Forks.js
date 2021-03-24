function Forks(props) {

    const { fork_count } = props;

    return(
        <div className="forks">
            Forks: {fork_count}
        </div>
    )

}

export default Forks;
