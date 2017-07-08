



import React, { Component } from "react";
//import barbarianCollections from "./../../../assets/js/classCollections/barbarianCollections"
// Importing our dropdown component
import barbarianAll from "./../../../assets/js/classCollections/barbarianCollections";
//import bardAll from "./../../../assets/js/classCollections/bardCollections";
import clericAll from "./../../../assets/js/classCollections/clericCollections";
//import druidAll from "./../../../assets/js/classCollections/druidCollections";
import fighterAll from "./../../../assets/js/classCollections/fighterCollections";
import monkAll from "./../../../assets/js/classCollections/monkCollections";
import paladinAll from "./../../../assets/js/classCollections/paladinCollections";
import rangerAll from "./../../../assets/js/classCollections/rangerCollections";
import rogueAll from "./../../../assets/js/classCollections/rogueCollections";
import sorcererAll from "./../../../assets/js/classCollections/sorcererCollections";
import warlockAll from "./../../../assets/js/classCollections/warlockCollections";
import wizardAll from "./../../../assets/js/classCollections/wizardCollections";
import CreateDropdown from "./createDropdown";


console.log("TesterAll.name from createCharacter")
console.log(clericAll)
// Defining a list of dropwdown options here
const dropdownOptions = [
    {
        text: "Barbarian",
        value: "barbarianCollections",
        sheet: barbarianAll
    },
    // {
    //     text: "Bard",
    //     value: "bardCollections",
    //     sheet: bardAll
    // },
    {
        text: "Cleric",
        value: "clericCollections",
        sheet: clericAll
    },
    // {
    //     text: "Druid",
    //     value: "druidCollections",
    //     sheet: druidAll
    // },
    {
        text: "Fighter",
        value: "fighterCollections",
        sheet: fighterAll
    },
    {
        text: "Monk",
        value: "monkCollections",
        sheet: monkAll
    },
    {
        text: "Paladin",
        value: "paladinCollections",
        sheet: paladinAll
    },
    {
        text: "Ranger",
        value: "rangerCollections",
        sheet: rangerAll
    },
    {
        text: "Rogue",
        value: "rogueCollections",
        sheet: rogueAll
    },
    {
        text: "Sorcerer",
        value: "sorcererCollections",
        sheet: sorcererAll
    },
    {
        text: "Warlock",
        value: "warlockCollections",
        sheet: warlockAll
    },
    {
        text: "Wizard",
        value: "wizardCollections",
        sheet: wizardAll
    }
];

class CreateCharacter extends Component {
  // Initializing our dropdownOptions on state, setting a default selected option
  // Also setting all of our possible options using the dropdownOptions variable
  constructor() {
    super();
    this.state = {
      dropdownOptions,
      selected: {
        text: "Choose Class",
        value: "",
        sheet: ""
      }
    };
    // Binding handleDropdownSelect to our component since we'll be passing
    // This method to another component
    this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
    this.panelDisplay = this.panelDisplay.bind(this);
  }
  // This function is called by the Dropdown component whenever an option is chosen
  handleDropdownSelect(option) {
      console.log("handleDropdownSelect Option: ");
      console.log(option);
    // Setting this.state.selected to the dropdown option the user clicks
    this.setState({ selected: option });
  }

    classPanelDisplay(selectedClass){
        console.log("classPanelDisplay ")
        console.log(selectedClass);
    if (selectedClass == ""){
        return(
            <div>
                <h2>Default Class Panel</h2>
            </div>
        );
    } else {
        return(
            <div>
                <div>
                    <h2>apple: </h2>
                    <h2>{selectedClass.name}</h2>
                </div>
                <div>
                    <h2>hitDie: </h2>
                    <h2>{selectedClass.hit_die}</h2>
                </div>
                {/*<div>
                    <h2>skillChoices: </h2>
                    <h2>
                        {selectedClass.skillChoices[0].from.map(option => (
                        <li
                            key={option.name}
                        >
                            <a>{option.name}</a>
                        </li>
                        ))}
                    </h2>
                </div>
                <div>
                    <h2>proficiencies: </h2>
                    <h2>
                        {selectedClass.proficiencies.map(option => (
                        <li
                            key={option.name}
                        >
                            <a>{option.name}</a>
                        </li>
                        ))}
                    </h2>
                </div>
                <div>
                    <h2>saving_throws: </h2>
                    <h2>
                        {selectedClass.saving_throws.map(option => (
                        <li
                            key={option.name}
                        >
                            <a>{option.name}</a>
                        </li>
                        ))}
                    </h2>
                </div>
                <div>
                    <h2>Starting Equipment: </h2>
                    <h2>{selectedClass.starting_equipment.equipment}</h2>
                </div>*/}
            </div>
        );
    // default:
    //     return(
    //         <div>
    //             <h2>Default Class Panel</h2>
    //         </div>
    //     );
     }
    }

  panelDisplay(option){
      console.log("panelDisplay Option: ")
      console.log(option)
    switch(option){
        case "barbarianCollections":         
            return (
                <div>
                    <h1>Barbarian</h1>
                    <h2>{option._id}</h2>

                </div>
            );
        case "bardCollections":         
            return (
                <div>Bard</div>
            );
        case "clericCollections":         
            return (
                <div>"Cleric"
                    <h2>{option._id}</h2>
                </div>

            );
        case "druidCollections":         
            return (
                <div>Druid</div>
            );
        case "fighterCollections":         
            return (
                <div>Fighter</div>
            );
        case "monkCollections":         
            return (
                <div>Monk</div>
            );
        case "paladinCollections":         
            return (
                <div>Paladin</div>
            );
        case "rangerCollections":         
            return (
                <div>Ranger</div>
            );
        case "rogueCollections":         
            return (
                <div>Rogue</div>
            );
        case "sorcererCollections":         
            return (
                <div>Sorcerer</div>
            );
        case "warlockCollections":         
            return (
                <div>Warlock</div>
            );
        case "wizardCollections":         
            return (
                <div>Wizard</div>
            );
        default: 
            return (
                <div>Choose which tournaments you would like to see.</div>
            );
    };
    // if (this.state.selected == )
    // function UserGreeting(props) {
    //   return <h1>Welcome back!</h1>;
    // }

    // function GuestGreeting(props) {
    //   return <h1>Please sign up.</h1>;
    // }
  }


  render() {
    let selectedOption = this.state.selected.value;
    let selectedSheet = this.state.selected.sheet;
    return (
      <div className="panel panel-default">
        <div
          style={styles.panelHeadingStyle}
          className="panel-heading"
        >
          Choose One!
          <CreateDropdown
            style={styles.dropdownStyle}
            options={this.state.dropdownOptions}
            selected={this.state.selected}
            handleSelect={this.handleDropdownSelect}  
          />
        </div>
        <div className="panel-body">
        {this.panelDisplay(selectedOption)}
        </div>
        {this.classPanelDisplay(selectedSheet)}
      </div>
    );
  }
}

// Some styles we'll pass to our Panel component and dropwdown component
const styles = {
  dropdownStyle: {
    float: "right",
    bottom: 10
  },
  panelHeadingStyle: {
    padding: 20
  }
};

// Exporting our Panel component
export default CreateCharacter;



// import React, { Component } from "react";
// import createDropdown from "./createDropdown";

// const classOptions = [
//     {
//         name: "Barbarian",
//         value: "barbarianCollections",
//     },
//     {
//         name: "Bard",
//         value: "bardCollections",
//     },
//     {
//         name: "Cleric",
//         value: "clericCollections",
//     },
//     {
//         name: "Druid",
//         value: "druidCollections",
//     },
//     {
//         name: "Fighter",
//         value: "fighterCollections",
//     },
//     {
//         name: "Monk",
//         value: "monkCollections",
//     },
//     {
//         name: "Paladin",
//         value: "paladinCollections",
//     },
//     {
//         name: "Ranger",
//         value: "rangerCollections",
//     },
//     {
//         name: "Rogue",
//         value: "rogueCollections",
//     },
//     {
//         name: "Sorcerer",
//         value: "sorcererCollections",
//     },
//     {
//         name: "Warlock",
//         value: "warlockCollections",
//     },
//     {
//         name: "Wizard",
//         value: "wizardCollections",
//     }
// ];

// const raceOptions = [
//     {
//         name: "Dwarf",
//         value: "dwarfRace",
//     },
//     {
//         name: "Elf",
//         value: "elfRace",
//     },
//     {
//         name: "Halfling",
//         value: "halflingRace",
//     },
//     {
//         name: "Human",
//         value: "humanRace",
//     },
//     {
//         name: "Dragonborn",
//         value: "dragonbornRace",
//     },
//     {
//         name: "Gnome",
//         value: "gnomeRace",
//     },
//     {
//         name: "Half-Elf",
//         value: "halfElfRace",
//     },
//     {
//         name: "Half-Orc",
//         value: "halfOrcRace",
//     },
//     {
//         name: "Tiefling",
//         value: "tieflingRace",
//     }
// ];



// class CreateCharacter extends React.Component {
//     constructor() {
//         super();
//         // This component has an "open" state that's either true or false
//         this.state = {
//         classOptions, 
//         selectedClass: {
//             name: "Barbarian", 
//             value: "barbarianCollections"
//         }
//     };
//         // Binding these methods to our component otherwise their 'this'
//         // will change
//         this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
//         this.panelDisplay = this.panelDisplay.bind(this);
//     } 

//     // This method will toggle this component's "open" state
//     handleDropdownSelect(option) {
//         // Setting this.state.selected to the dropdown option the user clicks
//         this.setState({ selected: option });
//     }

//     panelDisplay(option){
//         switch(option){
//             case "barbarianCollections":         
//                 return (
//                     <div>Barbarian</div>
//                 );
//             case "bardCollections":         
//                 return (
//                     <div>Bard</div>
//                 );
//             case "clericCollections":         
//                 return (
//                     <div>"Cleric"</div>
//                 );
//             case "druidCollections":         
//                 return (
//                     <div>Druid</div>
//                 );
//             case "fighterCollections":         
//                 return (
//                     <div>Fighter</div>
//                 );
//             case "monkCollections":         
//                 return (
//                     <div>Monk</div>
//                 );
//             case "paladinCollections":         
//                 return (
//                     <div>Paladin</div>
//                 );
//             case "rangerCollections":         
//                 return (
//                     <div>Ranger</div>
//                 );
//             case "rogueCollections":         
//                 return (
//                     <div>Rogue</div>
//                 );
//             case "sorcererCollections":         
//                 return (
//                     <div>Sorcerer</div>
//                 );
//             case "warlockCollections":         
//                 return (
//                     <div>Warlock</div>
//                 );
//             case "wizardCollections":         
//                 return (
//                     <div>Wizard</div>
//                 );
//         default: 
//             return (
//             <div>Choose which tournaments you would like to see.</div>
//             );
//         };
//     }

//  render() {
//     let selectedOption = this.state.selectedClass.value;
//     return (
//       <div className="panel panel-default">
//         <div
//           style={styles.panelHeadingStyle}
//           className="panel-heading"
//         >
//           Choose One!
//           <createDropdown
//             style={styles.dropdownStyle}
//             data={this.classOptions}
//             selected={this.state.selectedClass}
//             handleClick={this.handleDropdownSelect}  
//           />
//         </div>
//         <div className="panel-body">
//         {this.panelDisplay(selectedOption)}
//         </div>
//       </div>
//     );
//   }
// }

// // Some styles we'll pass to our Panel component and dropwdown component
// const styles = {
//   dropdownStyle: {
//     float: "right",
//     bottom: 10
//   },
//   panelHeadingStyle: {
//     padding: 20
//   }
// };


// export default CreateCharacter;