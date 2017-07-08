


import React from "react";
import helpers from "./../../utilities/helpers"


var HomeContainer = React.createClass({
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
                                <h1>Welcome to Roll Initiative</h1>
                                <h3>Your tabletop roleplaying game assistant</h3>
                            </div>
                            <br />
                            <div className="features col-xs-6 col-md-6">
                                <ul>
                                    <li className="d20">Easily create your roleplaying character &amp; character sheet</li>
                                    <li className="d20">Manage multiple tabletop adventure campaigns</li>
                                    <li className="d20">Join a campaign or create your own and invite players</li>
                                </ul>
                            </div>
                            <div className="features col-xs-6 col-md-6">
                                <ul>
                                    <li className="d20">Instantly look up your class features, spells, and racial abilities</li>
                                    <li className="d20">Roll high with our built-in d4-d20 dice roller</li>
                                    <li className="d20">Game Masters, send in-app notifications directly to your players</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <h1 className="welcome">How it works</h1>
                            <div className="container how-to">

                                <div className="row step step-one">
                                    <div className="col-md-6">
                                        <h3>Choose to be a Player or a Game Master</h3>
                                    </div>
                                    <div className="col-md-6">
                                        <img src="../images/choose-wisely.png" alt="Choose to be a Player or a Game Master" />
                                    </div>
                                </div>
                                <div className="row step step-two">
                                    <div className="col-md-6">
                                        <img src="../images/customize.png" alt="Players can customize their character and generate a detailed character sheet" />
                                    </div>
                                    <div className="col-md-6">
                                        <h3>Players can customize their character and generate a detailed character sheet</h3>
                                    </div>
                                </div>
                                <div className="row step step-three">
                                    <div className="col-md-6">
                                        <h3>Game Masters can start a new campaign and invite Players to join</h3>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src="../images/dungeon-key.png" alt="Game Masters can start a new campaign and invite Players to join" />
                                    </div>
                                </div>
                                <div className="row step step-four">
                                    <div className="col-md-6">
                                        <img src="../images/journal.png" alt="Track your game progress with Quest Logs, Session Notes, and Campaign Journal" />
                                    </div>
                                    <div className="col-md-6">
                                        <h3>Track your game progress with Quest Logs, Session Notes, and Campaign Journal</h3>
                                    </div>
                                </div>
                                <div className="welcome">
                                    <button data-toggle="modal" data-target="#login-container" className="btn btn-default check-us welcome" role="button">Check us out!</button>
                                </div>
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
export default HomeContainer;
