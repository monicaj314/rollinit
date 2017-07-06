


import React from "react";
import helpers from "./../../utilities/helpers"

var LoginContainer = React.createClass({
    getInitialState: function(){
        return { username: "", password: ""}
    },
     handleUsernameChange: function(event) {
        this.setState({ username: event.target.value });
    },
    handlePasswordChange: function(event) {
        this.setState({ password: event.target.value });
    },
     // When a user submits...
    handleSubmit: function(event) {
        // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
        // clicking the button
        event.preventDefault();

        // Set the parent to have the search term
        this.props.setTerm(this.state.username, this.state.password);
        helpers.logIn(this.state.username, this.state.password).then(function(response){
            console.log("response from Login.js");
            console.log(response);
            if (response.data.name !== "") {
                console.log("Current User " +  response.data.name);
                //this.setState({ currentUser: response.data.name });
            }
        }.bind(this));
        //this.setState({ username: "" , password: ""});
    },
    // componentDidMount: function() {
    //     console.log("checkUser at least activated.");
    //     helpers.checkUser().then(function(response){
    //         console.log("response.data from AllContainer");
    //         console.log(response.data);
    //         if (response.data.name !== this.state.currentUser) {
    //             console.log("Current User " +  response.data.name);
    //             //this.setState({ currentUser: response.data.name });
    //         }
    //     }.bind(this));
    // },
    // selectDisplay: function (title, value){
    //     this.setState({currentDisplay: value})
    //     console.log(title + " Title select clicked.");
    //     console.log(value + " Value select clicked.");
    // },
    render: function() {
        return (
            <div className="container home-container" id="home-container">
		        <div className="jumbotron-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="welcome">
                                <h1>Log-In</h1>
                            </div>
                            <br />
                            <div className="features">
                                <form method="post" action="" onSubmit={this.handleSubmit}>
                                        <div class="form-group">
                                            <label>Username</label>
                                            <input
                                                value={this.state.username}
                                                type="text"
                                                className="form-control"
                                                id="username"
                                                onChange={this.handleUsernameChange}
                                                required
                                            />
                                        </div>
                                        <div class="form-group">
                                            <label>Password</label>
                                            <input
                                                value={this.state.password}
                                                type="text"
                                                className="form-control"
                                                id="username"
                                                onChange={this.handlePasswordChange}
                                                required
                                            />
                                        </div>
                                        <button
                                            className="btn btn-primary"
                                            type="submit"
                                            id="btnLogIn"
                                        >
                                            Submit
                                        </button>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})


// Exporting this component as the default (only) export
export default LoginContainer;

