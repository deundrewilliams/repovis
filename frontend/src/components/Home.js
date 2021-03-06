import React from 'react'
import axios from 'axios'

import InputForm from './InputForm'
import SiteBanner from './SiteBanner'
import RepoInfo from './RepoInfo'

import '../css/Home.css'

// const mock_data = {
//     forks: 18293,
//     name: 'create-react-app',
//     description: 'Set up a modern web app by running one command.',
//     stargazers_count: 67412,
//     open_issues: 1203,
//     owner: {
//         login: 'facebook',
//         avatar_url: 'https://avatars.githubusercontent.com/u/69631?s=200&v=4',
//         html_url: 'https://github.com/facebook'
//     }
// }

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
       var c = ca[i];
       while (c.charAt(0)===' ') c = c.substring(1);
       if(c.indexOf(name) === 0)
          return c.substring(name.length,c.length);
    }
    return "";
}

class Home extends React.Component {

    constructor() {
        super()

        this.state = {
            repoData: undefined
        }

        this.fetchRepo = this.fetchRepo.bind(this);
        this.setRepoInfo = this.setRepoInfo.bind(this);

    }

    setRepoInfo(data) {
        this.setState({repoData: data})
    }


    fetchRepo(repo_owner, repo_name) {

        axios.defaults.xsrfCookieName = 'csrftoken';


        axios({
            method: 'get',
            url: `/api/repos/${repo_owner}/${repo_name}`,
            headers: {"X-CSRFToken": getCookie('csrftoken')}
        })
        .then(function(res) {
            console.log(res.data)
            return res
        })
        .then((res) => this.setRepoInfo(res.data))
        .catch((err) => console.log(err))

    }

    render() {
        return(
            <div className="home">
                <SiteBanner />
                <section className="site-content">
                    <InputForm
                        handleSearch={this.fetchRepo}
                    />
                    <RepoInfo info={this.state.repoData}/>
                </section>
                <a href="https://icons8.com/">Icons by Icons8</a>
            </div>
        )
    }


}

export default Home;
