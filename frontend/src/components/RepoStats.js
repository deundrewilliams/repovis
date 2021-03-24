import Forks from './Forks'
import Stars from './Stars'
import Issues from './Issues'
import SectionHeader from './SectionHeader'

import '../css/RepoStats.css';

function RepoStats(props) {

    const { forks, stars, issues } = props;

    return(
        <div className="repo-stats">
            <SectionHeader text="Stats"/>
            <div className="stats-content">
                <Forks fork_count={forks} />
                <Stars star_count={stars} />
                <Issues issue_count={issues} />
            </div>

        </div>
    )

}

export default RepoStats;
