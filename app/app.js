// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";


import AllContainer from "./components/AllContainer";

// Creating an App component which renders a Panel inside of a Container
const App = () => (
  <AllContainer />
);

ReactDOM.render(<App />, document.getElementById("app"));
