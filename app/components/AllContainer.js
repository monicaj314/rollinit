


import React from "react";
import helpers from "./../utilities/helpers"
import SiteNav from "./../siteNav";
import HomeContainer from "./subComponents/home"
import FauxHomeContainer from "./subComponents/fauxHome"
import LinkContainer from "./subComponents/links"
import FauxLinkContainer from "./subComponents/fauxLinks"
import ProfileContainer from "./subComponents/profile"
import CharacterContainer from "./subComponents/character"
import FauxCharacterContainer from "./subComponents/fauxCharacter"
import RegisterContainer from "./subComponents/register"
import LoginContainer from "./subComponents/login"
// // Our Container component's only purpose will be to hold and center the rest of our content
// // props.children will be substituted for any nested components deployed
// const TournamentContainer = props => (
//   <div style={styles.containerStyle} className="container">
//     <div className="row">
//       <div className="col-md-12 col-md-offset-3">
//         {props.children}
//       </div>
//     </div>
//   </div>
// );

var AllContainer = React.createClass({
    getInitialState: function(){
        return {
            display:{
                loggedIn: [
                    {
                        title: "Home",
                        value: "home",
                        loggedIn: "both"
                    },
                    {
                        title: "Character Creator",
                        value: "character",
                        loggedIn: "both"
                    },
                    {
                        title: "Profile",
                        value: "profile",
                        loggedIn: "loggedIn"
                    },
                    {
                        title: "Links",
                        value: "links",
                        loggedIn: "both"
                    },
                    {
                        title: "Log-out",
                        value: "logout",
                        loggedIn: "loggedIn"
                    }
                ],
                loggedOut: [
                    {
                        title: "Home",
                        value: "fauxHome",
                        loggedIn: "both"
                    },
                    {
                        title: "Character Creator",
                        value: "fauxCharacter",
                        loggedIn: "both"
                    },
                    {
                        title: "Links",
                        value: "fauxLinks",
                        loggedIn: "both"
                    },
                    {
                        title: "Log-in",
                        value: "login",
                        loggedIn: "loggedOut"
                    },
                    {
                        title: "Register",
                        value: "register",
                        loggedIn: "loggedOut"
                    }
                ]
            },
            currentDisplay: "character", 
            currentUser: "Jim"
        }
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
    selectDisplay: function (title, value){
        this.setState({currentDisplay: value})
        console.log(title + " Title select clicked.");
        console.log(value + " Value select clicked.");
    },
    render: function() {
        switch (this.state.currentDisplay) {
            case "home": return (
                <div className="container home-container" id="home-container">
                    <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
		            <h2 className="page-header"> Home </h2>
                    <HomeContainer data={this.state.display} user={this.state.currentUser}/>
                </div>
            )
            case "fauxHome": return (
                <div className="container home-container" id="home-container">
                    <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
		            <h2 className="page-header"> Home </h2>
                    <FauxHomeContainer data={this.state.display} user={this.state.currentUser}/>
                </div>
            )
            case "character": return (
                <div className="container game-container" id="game-container">
                    <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
		            <h2 className="page-header"> Character </h2>
                    <CharacterContainer data={this.state.display} user={this.state.currentUser}/>
                </div>
            )
            case "fauxCharacter": return (
                <div className="container game-container" id="game-container">
                    <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
		            <h2 className="page-header"> Character </h2>
                    <FauxCharacterContainer data={this.state.display} user={this.state.currentUser}/>
                </div>
            )
            case "profile": return (
                <div className="container profile-container" id="profile-container">
                    <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
		            <h2 className="page-header"> Profile </h2>
                    <ProfileContainer data={this.state.display} user={this.state.currentUser}/>
                </div>
            )
            case "links": return (
                <div className="container links-container" id="links-container">
                    <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
		            <h2 className="page-header"> Links </h2>
                    <LinkContainer data={this.state.display} user={this.state.currentUser}/>
                </div>
            )
            case "fauxLinks": return (
                <div className="container links-container" id="links-container">
                    <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
		            <h2 className="page-header"> Links </h2>
                    <FauxLinkContainer data={this.state.display} user={this.state.currentUser}/>
                </div>
            )
            case "login": return (
                <div className="container login-container" id="login-container">
                    <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
		            <h2 className="page-header"> Log-In </h2>
                    <LoginContainer data={this.state.display} user={this.state.currentUser}/>
                </div>
            )
            case "register": return (
                <div className="container register-container" id="register-container">
                    <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
		            <h2 className="page-header"> Register </h2>
                    <RegisterContainer data={this.state.display} user={this.state.currentUser}/>
                </div>
            )
            case "logout": return (
                <div className="container logout-container" id="logout-container">
                    <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
		            <h2 className="page-header"> Log-Out </h2>
                </div>
            )
        }
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
export default AllContainer;
