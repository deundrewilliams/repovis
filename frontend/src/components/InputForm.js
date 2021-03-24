import React from 'react';

class InputForm extends React.Component {

    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(e) {
        e.preventDefault()

        let owner = document.getElementById('owner').value
        let name = document.getElementById('name').value

        this.props.handleSearch(owner, name)
    }

    render() {

        return(
            <div className="input-form">
                <form id="repo-form" onSubmit={this.handleSearch}>
                    github.com/
                    <input type="text" id="owner" name="owner" placeholder="repo owner"></input>
                    /
                    <input type="text" id="name" name="name" placeholder="repo name"></input>
                    <input type="submit" value="Search" id="repo-submit"></input>
                </form>

            </div>
        )

    }

}

export default InputForm;
