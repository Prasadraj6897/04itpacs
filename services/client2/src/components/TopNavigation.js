// import React from 'react'
// import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, Nav, NavItem, NavLink, Fa, Button} from "mdbreact";
import logo1 from './pages/img/LOGO_WHITE.svg'
import { BrowserRouter as Router } from 'react-router-dom';

import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink} from 'mdbreact';

import { MDBNavbar,
         MDBNavbarBrand,
         MDBNavbarNav,
         MDBNavItem,
         MDBNavLink,
         MDBIcon,
         MDBDropdown,
         MDBDropdownToggle,
         MDBDropdownMenu,
         MDBDropdownItem,
         MDBBadge
} from 'mdbreact';

class TopNavigation extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false
      };
  this.onClick = this.onClick.bind(this);
  this.toggle = this.toggle.bind(this);
  this.handleToggleClickA = this.handleToggleClickA.bind(this);
}

onClick(){
  this.setState({
      collapse: !this.state.collapse,
    });
}

toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    handleToggleClickA() {
        this.props.onSideNavToggleClick();
    }

render() {

          const navStyle = {
            paddingLeft:
              this.props.toggle ? '16px' : "240px",
              transition: 'padding-left .3s'
          };
  
    return (
        <div>
          
              <MDBNavbar className="flexible-MDBNavbar" color="blue-gradient" dark expand="md" scrolling fixed="top" style={{zIndex: 3}}>
                
                {this.props.isAuthenticated &&  

                <div
                  onClick={this.handleToggleClickA}
                  key="sideNavToggleA"
                  style={{
                    lineHeight: "32px",
                    marginleft: "1em",
                    verticalAlign: "middle"
                  }}
                >

                <NavbarBrand href="/">
                    <img src={logo1} height="20" className="d-inline-block align-top" alt=""/>
                </NavbarBrand>

                  <MDBIcon icon="bars" className="mr-3 white-text" size="lg" />

                  <NavbarBrand>
                    <strong>{this.props.routeName}</strong>
                </NavbarBrand>
                </div>
                }
                

              {!this.props.isAuthenticated &&  

                <div>
                <NavbarBrand href="/">
                    <img src={logo1} height="20" className="d-inline-block align-top" alt=""/>
                </NavbarBrand>
                  
                </div>
                }


                <MDBNavbarNav expand="sm" right style={{flexDirection: 'row'}}>
                        
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>                                    
                                    <MDBIcon icon="graduation-cap" className="yellow-text"/> <span className="d-none d-md-inline">Certifications</span>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu right style={{minWidth: '400px'}}>
                                <MDBDropdownItem href="/certifications/1/1">
                                    <MDBIcon icon="bar-chart" className="mr-2 red-text"/>
                                    Data Science 
                                    <span className="float-right"><MDBIcon icon="certificate" className="green-text"/> 11 specializations</span>
                                </MDBDropdownItem>
                                <MDBDropdownItem href="/certifications/1/2">
                                    <MDBIcon icon="file-code-o" className="mr-2 blue-text"/>
                                    Web Development
                                    <span className="float-right"><MDBIcon icon="certificate" className="green-text"/> 13 specializations</span>
                                </MDBDropdownItem>
                                <MDBDropdownItem href="/certifications/1/3">
                                    <MDBIcon icon="mobile" className="mr-2 orange-text"/>
                                    Mobile Development
                                    <span className="float-right"><MDBIcon icon="certificate" className="green-text"/> 10 specializations</span>
                                </MDBDropdownItem>
                                <MDBDropdownItem href="/certifications/1/4">
                                    <MDBIcon icon="taxi" className="mr-2 pink-text"/>
                                    Artificial Intelligence (AI)
                                    <span className="float-right"><MDBIcon icon="certificate" className="green-text"/> 12 specializations</span>
                                </MDBDropdownItem>
                                <MDBDropdownItem href="/certifications/1/4">
                                    <MDBIcon icon="cogs" className="mr-2 cyan-text"/>
                                    Internet of Things (IoT)
                                    <span className="float-right"><MDBIcon icon="certificate" className="green-text"/> 10 specializations</span>
                                </MDBDropdownItem>
                                <MDBDropdownItem href="/certifications/1/4">
                                    <MDBIcon icon="chain-broken" className="mr-2 violet-text"/>
                                    Blockchain
                                    <span className="float-right"><MDBIcon icon="certificate" className="green-text"/> 9 specializations</span>
                                </MDBDropdownItem>
                                <MDBDropdownItem href="/certifications/1/4">
                                    <MDBIcon icon="shield" className="mr-2 red-text"/>
                                    Cyber Security
                                    <span className="float-right"><MDBIcon icon="certificate" className="green-text"/> 8 specializations</span>
                                </MDBDropdownItem>
                                <MDBDropdownItem href="/certifications/1/4">
                                    <MDBIcon icon="arrows-alt" className="mr-2 yellow-text"/>
                                    Big Data tools
                                    <span className="float-right"><MDBIcon icon="certificate" className="green-text"/> 7 specializations</span>
                                </MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>


                        <MDBNavItem>
                            <MDBNavLink to="/">
                                <MDBIcon icon="home" className="amber-text" />
                                <span className="d-none d-md-inline ml-1">Home</span>
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/about"><MDBIcon icon="address-card" className="cyan-text"/>
                                <span className="d-none d-md-inline ml-1">About</span>
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/trainingproviders"><MDBIcon icon="handshake-o" className="orange-text" />
                                <span className="d-none d-md-inline ml-1">Training Providers</span>
                            </MDBNavLink>
                        </MDBNavItem>

                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                    <MDBIcon icon="user"/> <span className="d-none d-md-inline">Account</span>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu right style={{minWidth: '200px'}}>
                                
                                {!this.props.isAuthenticated &&
                                <MDBDropdownItem href="/login">
                                    Login
                                </MDBDropdownItem>
                                }

                                {!this.props.isAuthenticated &&
                                <MDBDropdownItem href="/register">
                                    Register
                                </MDBDropdownItem>
                                }

                                {this.props.isAuthenticated &&
                                  <MDBDropdownItem href="/logout">
                                    Logout
                                </MDBDropdownItem>
                                }

                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavbarNav>  
                
            </MDBNavbar>
        



      </div>
    );
  }
}

export default TopNavigation;



