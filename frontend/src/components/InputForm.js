import React from 'react';

import '../css/InputForm.css'

class InputForm extends React.Component {

    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(e) {
        e.preventDefault()

        let owner = document.getElementById('owner-field').value
        let name = document.getElementById('name-field').value

        this.props.handleSearch(owner, name)
    }

    render() {

        return(
            <div className="input-form">
                <form id="repo-form" onSubmit={this.handleSearch}>
                    <p>github.com/</p>
                    <input type="text" id="owner-field" name="owner" placeholder="repo owner"></input>
                    <p>/</p>
                    <input type="text" id="name-field" name="name" placeholder="repo name"></input>
                    <input type="submit" value="Search" id="repo-submit"></input>
                </form>

            </div>
        )

    }

}

export default InputForm;
