// import React from 'react'
// import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, Nav, NavItem, NavLink, Fa, Button} from "mdbreact";
import logo1 from './pages/img/LOGO_WHITE.svg'


import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink} from 'mdbreact';


class MyNavBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
          isWideEnough: false
      };
  this.onClick = this.onClick.bind(this);
}

onClick(){
  this.setState({
      collapse: !this.state.collapse,
    });
}

render() {
  
    return (
        <div>
          
            <Navbar color="blue-gradient" dark expand="md" scrolling>
                <NavbarBrand href="/">
                    <img src={logo1} height="20" className="d-inline-block align-top" alt=""/>
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick={this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav left>
                      <NavItem active>
                          <NavLink to="/">Home</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="/about">About</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="/trainingproviders">Training Providers</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="/certifications/1/1">Certifications</NavLink>
                      </NavItem>

                        {this.props.isAuthenticated &&
                          <NavItem>
                              <NavLink to="/status">Status</NavLink>
                          </NavItem>

                          }

                        {this.props.isAuthenticated &&
                          <NavItem>
                              <NavLink to="/apply">Apply</NavLink>
                          </NavItem>

                          }                          




                    </NavbarNav>
                    <NavbarNav right>
                          {!this.props.isAuthenticated &&
                          <NavItem>                             
                                <NavLink to="/register">Register</NavLink>
                                    
                          </NavItem>
                          }

                          {!this.props.isAuthenticated &&
                          <NavItem>                             
                                <NavLink to="/login">Login</NavLink>
                                    
                          </NavItem>
                          }

                          {this.props.isAuthenticated &&
                          <NavItem>                             
                                <NavLink to="/logout">
                                    Logout
                                </NavLink>
                          </NavItem>
                          }

                        </NavbarNav>
                </Collapse>
            </Navbar>
        



      </div>
    );
  }
}

export default MyNavBar;