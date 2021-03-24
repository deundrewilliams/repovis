import Forks from './Forks'
import Stars from './Stars'
import Issues from './Issues'

function RepoStats(props) {

    const { forks, stars, issues } = props;

    return(
        <div className="repo-stats">
            <Forks fork_count={forks} />
            <Stars star_count={stars} />
            <Issues issue_count={issues} />
        </div>
    )

}

export default RepoStats;
