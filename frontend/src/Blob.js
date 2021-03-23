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


    fetchRepo() {
        axios.defaults.xsrfCookieName = 'csrftoken';


        axios({
            method: 'get',
            url: `/api/repos/ucfopen/canvasapi`,
            headers: {"X-CSRFToken": getCookie('csrftoken')}
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))

    }

    render() {
        this.fetchRepo()
        return (
            <div>
                Hello
            </div>
        )
    }


}

export default Blob;
