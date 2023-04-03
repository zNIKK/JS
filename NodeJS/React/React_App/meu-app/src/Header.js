import React from 'react';
import './App.css';
import Menu from "./Menu";

function Header(props) {
    return (
        <header className='header'>
            <h1>{props.name}</h1>
            <Menu links={props.links}></Menu>
        </header>
    );
}
// class Header extends React.Component {
//     constructor(props) {
//         super();
//     }

//     render() {
//         return (
//             <header className='header'>
//                 <h1>{this.props.name}</h1>
//                 <Menu links={this.props.links}></Menu>
//             </header>
//         )
//     }
// }

export default Header