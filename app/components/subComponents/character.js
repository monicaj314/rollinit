


import React from "react";
import helpers from "./../../utilities/helpers";
import CurrentCharacters from "./currentCharacters";
import CreateCharacter from "./createCharacter";


var CharacterContainer = React.createClass({
    getInitialState: function(){
        return {
            options:{
                class: [
                    {
                        name: "Barbarian",
                        value: "barbarianCollections",
                    },
                    {
                        name: "Bard",
                        value: "bardCollections",
                    },
                    {
                        name: "Cleric",
                        value: "clericCollections",
                    },
                    {
                        name: "Druid",
                        value: "druidCollections",
                    },
                    {
                        name: "Fighter",
                        value: "fighterCollections",
                    },
                    {
                        name: "Monk",
                        value: "monkCollections",
                    },
                    {
                        name: "Paladin",
                        value: "paladinCollections",
                    },
                    {
                        name: "Ranger",
                        value: "rangerCollections",
                    },
                    {
                        name: "Rogue",
                        value: "rogueCollections",
                    },
                    {
                        name: "Sorcerer",
                        value: "sorcererCollections",
                    },
                    {
                        name: "Warlock",
                        value: "warlockCollections",
                    },
                    {
                        name: "Wizard",
                        value: "wizardCollections",
                    }
                ],
                race: [
                    {
                        name: "Dwarf",
                        value: "dwarfRace",
                    },
                    {
                        name: "Elf",
                        value: "elfRace",
                    },
                    {
                        name: "Halfling",
                        value: "halflingRace",
                    },
                    {
                        name: "Human",
                        value: "humanRace",
                    },
                    {
                        name: "Dragonborn",
                        value: "dragonbornRace",
                    },
                    {
                        name: "Gnome",
                        value: "gnomeRace",
                    },
                    {
                        name: "Half-Elf",
                        value: "halfElfRace",
                    },
                    {
                        name: "Half-Orc",
                        value: "halfOrcRace",
                    },
                    {
                        name: "Tiefling",
                        value: "tieflingRace",
                    }
                ],
            }
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
    selectedItem: function(value){
        console.log("value" + value);
    },
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
                                <h1>Current Characters</h1>
                                <CurrentCharacters />
                            </div>
                            <div className="features">
                                <h1>Create A New Character</h1>
                                <CreateCharacter data={this.state.options} handleClick={this.selectedItem}/>
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
