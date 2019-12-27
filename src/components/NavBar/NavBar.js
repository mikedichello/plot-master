import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'
import './NavBar.css'

class NavBar extends Component {
  render () {
    let navBarItems = [
    <NavItem key={1} href='/plot'>My Plot</NavItem>, 
    <NavItem key={2} href='/plantchart'>Plant Chart</NavItem>,
    <NavItem key={3} href='/viewall'>View All Plants</NavItem>
    ]
    // if (this.props.isLoggedIn) {
    //   navBarItems.push(<NavItem key={4} href='/logout'>Log Out</NavItem>)
    // } else {
    //   navBarItems.push(<NavItem key={5} href='/signup'>Sign Up</NavItem>)
    //   navBarItems.push(<NavItem key={6} href='/login'>Log In</NavItem>)
    // }
    return (
      <Navbar className='nav'>
        {navBarItems}
      </Navbar>
    )
  }
}

export default NavBar
