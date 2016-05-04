import React from 'react';
import {Link} from 'react-router';
import display from '../styles/styles';
import {Navbar, NavItem} from 'react-materialize';

const Nav = React.createClass({
  render: function() {
    return(

      <div style={display.header} className="headerBar">
        <ul style={display.logo} style={display.nav}>
          <Link to='/'>
            <li className="navBarEl">GeoTube</li>
          </Link>
          <li className="navBarEl">About</li>
          <li className="navBarEl">Hearted Vids</li>
        </ul>
      </div>

    )
  }
})

export default Nav;
//
//
//
// <Navbar brand='GeoTube' right>
//   <NavItem href='get-started.html'>About</NavItem>
//   <NavItem href='components.html'>Hearted Vids</NavItem>
// </Navbar>
//
