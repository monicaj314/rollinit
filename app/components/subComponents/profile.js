


import React from "react";
import helpers from "./../../utilities/helpers"


var ProfileContainer = React.createClass({
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
                                <h1>Personal Profile</h1>
                            </div>
                            <br />
                            <div className="features col-md-6">
                                <ul>
                                <h1>Created Characters</h1>
                                    <li className="char">bob</li>
                                    <li className="char">Gary</li>
                                    <li className="char">Shelia</li>
                                </ul>
                            </div>
                            <div className="features col-md-6">
                                <ul>
                                <h1>Saved Notes</h1>
                                    <li className="char">note one</li>
                                    <li className="char">two note</li>
                                    <li className="char">Shelia</li>
                                </ul>
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
export default ProfileContainer;
