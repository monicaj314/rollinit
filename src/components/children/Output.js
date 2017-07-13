import React, {Component} from "react";

const Output = (props) => {
    return (
        <div id="output-box">
            <h5>Dice Roller</h5>
            <textarea value={props.value}>
                <p></p>
            </textarea>
            {/*<button id="roll" className="btn-small">Roll</button>*/}
            {/*<button id="clear" className="btn-small">Clear</button>*/}
        </div>
    );
};

export default Output;
