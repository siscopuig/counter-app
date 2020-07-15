import React, { Component } from 'react';

// Stateless Functional Component
//  for simple stateless components
// const NavBar = (props) => {
//     return (
//         <nav className="navbar navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <span className="badge badge-pill badge-secondary">
//                 {props.totalCounters}
//             </span>
//         </nav>
//     );
// }

// Normal way
class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#top">Navbar
                    <span className="badge badge-pill badge-secondary">
                        {this.props.totalCounters}
                    </span>
                </a>
            </nav>
        );
    }
}

export default NavBar;