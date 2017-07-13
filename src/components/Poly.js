import React, {Component} from "react";
import Output from "./children/Output";

const data = [
    {
        id: 0,
        name: "d20",
        sides: 20,
        value: 0,
        results:[],
        selected: false,
        advantage: false,
        disadvantage: false,
        luck: false,
        img: "./images/d20.jpg"
    },
    {   id: 1,
        name: "d12",
        sides: 12,
        value: 0,
        results:[],
        selected: false,
        img: "./images/d12.png"
    },
    {   id: 2,
        name: "d10",
        sides: 10,
        value: 0,
        results:[],
        selected: false,
        img: "./images/d10.png"
    },
    {
        id: 3,
        name:"d8",
        sides: 8,
        value: 0,
        results:[],
        selected: false,
        img: "./images/d8.jpg"
    },
    {
        id: 4,
        name:"d6",
        sides: 6,
        value: 0,
        results:[],
        selected: false,
        img:"./images/d6.jpg"
    },
    {
        id: 5,
        name:"d4",
        sides: 4,
        value: 0,
        results:[],
        selected: false,
        img:"./images/d4.png"
    },
    {
        id: 6,
        name:"d00",
        sides: 100,
        value: 0,
        results:[],
        selected: false,
        img:"./images/percentile.jpg"
    }
];

const Die = (props) => {
  return(
    <li 
        value={props.value} 
        className="die" 
        id={props.sides}
        onClick={props.update}
    >
<img width="100px" height="100px" src={props.img} alt={props.name} />
    </li>
  )
}

export default class Poly extends Component {
    constructor() {
        super();
        this.state = {
            value: 0,
            selected: false,
            results : "",
            output:[],
            total: 0
        };
        this.renderDice = this.renderDice.bind(this);
        this.rollDie = this.rollDie.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log("clicked d"+ e.currentTarget.id);
        let die = e.currentTarget.id;
        let rolled = this.rollDie(die);
        this.setState({value:rolled})
    }
    renderDice() { 
        let allDice = [];
        for (var i = 0; i < data.length; i++) {
            allDice.push(
                <Die 
                    data={data[i]} 
                    update={this.handleClick}
                    className={data[i].name} 
                    key={data[i].id} 
                    sides={data[i].sides}
                    value={this.state.value} 
                    selected={false}
                    img={data[i].img}
                />
            )
        }  
    return  allDice;
    }

    rollDie(die){
    let rolled = Math.floor(Math.random() * die + 1);
    console.log(`Roll d${die} result: ${rolled}`)
    return rolled;
  }


// roll(number, sides, mod){
//     console.log("vvvvvvvv Multiple Dice vvvvvvv");
//     let results =[];
//     let total = 0;
//     console.log(`Roll ${number}d${sides} + ${mod}`)
//     while (number > 0){
//         number--; 
//         results.push(rollDie(sides))
//     } 
//     console.log(`Results: ${results}`);
//     let sum = results.reduce(function(dieRoll, amount){
//         return dieRoll + amount;
//     });
//     console.log(`Sum: ${sum}`);
//     console.log(`Modifier: ${mod}`)
//     total = sum + mod;
//     console.log(`Total: ${sum} + ${mod} = ${total}`)
//     return total;
// }

    render() {
        return (
      <div className="poly-container">
        <div className="output-container">
          <Output value={this.state.value} />
        </div>
        <div className="dice-container">
            <ul>
                {this.renderDice()}
          </ul>
        </div>
      </div>
        )
    }
}

