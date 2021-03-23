import React from 'react';
import axios from 'axios';

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

class Blob extends React.Component {

    constructor() {
        super()

        this.state = {
            stars: 0
        }

        this.setStars = this.setStars.bind(this)
        this.fetchRepo = this.fetchRepo.bind(this)
    }

    setStars(numStars) {
        this.setState({ stars: numStars})
    }


    fetchRepo() {
        axios.defaults.xsrfCookieName = 'csrftoken';


        axios({
            method: 'get',
            url: `/api/repos/ucfopen/vast`,
            headers: {"X-CSRFToken": getCookie('csrftoken')}
        })
        .then(function(res) {
            return res
        })
        .then((res) => this.setStars(res.data.stargazers_count))
        .catch((err) => console.log(err))

    }

    render() {

        return (
            <div>
                Hello
                <button onClick={this.fetchRepo}>Click Me!</button>
                Num Stars: {this.state.stars}
            </div>
        )
    }


}

export default Blob;
