import React from 'react'
import axios from 'axios'

import InputForm from './InputForm'
import RepoInfo from './RepoInfo'

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
            <div>
                <h1>Repovis</h1>
                <InputForm
                    handleSearch={this.fetchRepo}
                />
                <RepoInfo info={this.state.repoData}/>
            </div>
        )
    }


}

export default Home;
