


import React from "react";
import helpers from "./../../utilities/helpers"

var RegisterContainer = React.createClass({
    getInitialState: function(){
        return {}
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
                                <h1>Register</h1>
                            </div>
                            <br />
                            <div className="features">
                                <form method="post" action="">
									<div class="form-group">
										<label>Name</label>
										<input type="text" class="form-control" placeholder="Name" name="name" />
									</div>
									<div class="form-group">
										<label>Username</label>
										<input type="text" class="form-control" placeholder="Username" name="username" />
									</div>
									<div class="form-group">
										<label>Email</label>
										<input type="text" class="form-control" placeholder="Email" name="email" />
									</div>
									<div class="form-group">
										<label>Password</label>
										<input type="password" class="form-control" placeholder="Password" name="password" />
									</div>
									<div class="form-group">
										<label>Confirm Password</label>
										<input type="password" class="form-control" placeholder="Password" name="password2" />
									</div>
									<button type="submit" data-dismiss="modal" class="btn btn-default">Cancel</button>
									<button id="btnSignUp" type="submit" class="btn btn-primary">Submit</button>
								</form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})
// // An object we'll use to apply inline styles to this component
// const styles = {
//   containerStyle: {
//     marginTop: 50,
//     textAlign: "center"
//   }
// };

// Exporting this component as the default (only) export
export default RegisterContainer;
