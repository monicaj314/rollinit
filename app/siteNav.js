





import React, { Component } from "react";


const SiteNav = (props) => {
    console.log("props")
    console.log(props)
  //Old way to code the line below
  //var style = props.style;
  const { data } = props;
  const { user } = props;
  const { handleClick } = props;
  console.log("data from Results.js");
  console.log(data);
  console.log("user from Results.js");
  console.log(user);

  if (user != ""){
         return (
            <div className="header clearfix">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">
                                <h2>RI</h2>
                            </a>
                            <a className="">
                                <h2>Hello {user}</h2>
                            </a>
                        </div>
                        <ul className="nav nav-pills pull-right">

                            {
                            data.loggedIn.map((item) => (
                                <li 
                                key={item.value} 
                                role="presentation" 
                                id="home-tab" 
                                className=""
                                >
                                    <a onClick={() => handleClick(item.title, item.value)}>
                                        {item.title}
                                    </a>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        );
    } else {
        return (
            <div className="header clearfix">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">
                                <h2>RI</h2>
                            </a>
                            <a className="">
                            </a>
                        </div>
                        <ul className="nav nav-pills pull-right">

                            {
                            data.loggedOut.map((item) => (
                                <li 
                                key={item.value} 
                                role="presentation" 
                                id="home-tab" 
                                className=""
                                >
                                    <a onClick={() => handleClick(item.title, item.value)}>
                                        {item.title}
                                    </a>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
};


// Exporting our Dropdown component
export default SiteNav;





// import React, { Component } from "react";
// import helpers from "./utilities/helpers"

// const SiteNav = React.createClass({
//     getInitialState: function(){
//         return {}
//     },
//     render: function(){
//         return (
//         <div className="header clearfix">
//             <nav className="navbar">
//                 <div className="container">
//                     <div className="navbar-header">
//                         <a className="navbar-brand" href="/">
//                             <h2>QA</h2>
//                         </a>
//                     </div>
//                     <ul className="nav nav-pills pull-right">
//                         <li role="presentation" id="home-tab" className=""><a href="/">Home</a></li>
//                         <li role="presentation" id="game-tab" className=""><a href="/game">Game</a></li>
//                         <li role="presentation" id="tournaments-tab" className=""><a href="/tournaments">Tournaments</a></li>
//                         <li role="presentation" id="profile-tab" className=""><a href="/profile">Profile</a></li>
//                         <li role="presentation" id="team-tab" className=""><a href="/teams">Teams</a></li>
//                         <li role="presentation" id="team-tab" className=""><a href="/links">Links</a></li>
//                         <li role="presentation" id="login-tab" className=""><a href="/login">Log-in</a></li>
//                         <li role="presentation" id="register-tab" className=""><a href="/register">Register</a></li>
//                         <li role="presentation" id="logout-tab" ><a href="/users/logout">Log-out</a></li>
//                     </ul>
//                 </div>
//             </nav>
//         </div>
//         );
//     }
// });


// // ReactDOM.render(<SiteNav />, document.getElementById("siteNav"));

// // Exporting our Dropdown component
// export default SiteNav;
