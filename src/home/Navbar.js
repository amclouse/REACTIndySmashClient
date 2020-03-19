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
import { Button } from 'reactstrap'
import TourneyDisplayAll from '../tournaments/TourneyDisplayAll'


const Sidebar = (props) => {

  console.log(`NAVBAR: ${props.token}`)

  return (
    <div>
      <h3></h3>
      <Nav className="Nav">
        <NavItem>
          <NavLink className="nav-link" href="#"><Link to="/">Home</Link></NavLink>
        </NavItem>
        <NavLink href="#"><Link to="/tourney">Profile</Link></NavLink>
        <NavItem>
          <NavLink href="#"><Link to="/findtourneys">Find Tournaments</Link></NavLink>
        </NavItem>
      </Nav>
      
      <hr />
      <Switch>
        <Route exact path="/home"><Home /></Route>
        <Route exact path="/tourney"><TourneyIndex className="tourney-index" token={props.token} /></Route>
        <Route exact path="/findtourneys"><TourneyDisplayAll token={props.token} /></Route>
      </Switch>
    </div>
  );
}

export default Sidebar;