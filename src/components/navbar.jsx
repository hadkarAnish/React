/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

// Stateless functional Component is used for the below class as the NavBar class doesnt
// have any state for the componenet or event handler or helper methods and we get all data using props

//we now do object destructing for the props keyword as it maybe used multiple times in this file, hence its not ideal to keep using "props." for every use
// cant use lifecycle hooks in sfc as they can be used in class componenets
const NavBar = props => {
  // const NavBar = ({ totalCounter }) => {
  console.log("NavBar rendered");
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {props.totalCounter}
          {/* since we are using object destructing we can directly use totalCounter */}
          {/* {totalCounter} */}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

// class NavBar extends Component {
//   render() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar
//           <span class="badge badge-pill badge-secondary m-2">
//             {this.props.totalCounter}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// export default NavBar;
