import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
// import Auth from '../auth/Auth'
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Home from './home'
import TourneyIndex from '../tournaments/TourneyIndex'

const Sidebar = (props) => {
  return (
    <div>
      <h3>SMASH INDY</h3>
      <Nav>
        <NavItem>
          <NavLink href="#"><Link to="/">Home</Link></NavLink>
        </NavItem>
        <NavLink href="#"><Link to="/tourney">Host/Create</Link></NavLink>
        <NavItem>
          <NavLink href="#">Find Tournaments</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#"></NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#"></NavLink>
        </NavItem>
      </Nav>
      <hr />
      <Switch>
      <Route exact path="/home"><Home /></Route>
      <Route exact path="/tourney"><TourneyIndex token={props.token} /></Route>
      </Switch>
    </div>
  );
}

export default Sidebar;