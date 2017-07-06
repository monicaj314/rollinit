


import React from "react";
import helpers from "./../../utilities/helpers"

var FauxCharacterContainer = React.createClass({
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
                                <h1>Sample Characters</h1>
                            </div>
                            <div className="subWelcome">
                                <h3>Once you Log-In you'll be able to create and keep track of your characters.</h3>
                                <h3>There will also be a personal profile page to explore characters in depth.</h3>
                            </div>
                            <br />
                            <div className="features">
                                <ul>
                                <h1>Created Characters</h1>
                                    <li className="char">bob</li>
                                    <li className="char">Gary</li>
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
export default FauxCharacterContainer;
