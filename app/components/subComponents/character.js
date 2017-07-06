


import React from "react";
import helpers from "./../../utilities/helpers"

var CharacterContainer = React.createClass({
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
                                <h1>Characters</h1>
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
                            <div className="features">
                                <ul>
                                <h1>Make a New one</h1>
                                    <li className="char">Name: </li>
                                    <li className="char">Age: </li>
                                    <li className="char">Shelia Factor: </li>
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
export default CharacterContainer;
