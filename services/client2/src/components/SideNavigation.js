import React from "react";
import logo1 from './pages/img/LogoBlack.svg'
import sidebg from './pages/img/HOME_PAGE_MAIN.svg'
import {
  SideNavLink,
  SideNavCat,
  SideNavNav,
  SideNav,
  MDBIcon
} from "mdbreact";
const Link = require("react-router-dom").NavLink;

class SideNavigation extends React.Component {

  // render SideNav Link
  rSNL ( to, text ) {
    return <SideNavLink to={to} onClick={this.props.onLinkClick}>{text}</SideNavLink>
  }

  render() {
    const { onLinkClick } = this.props
    return (
        <div className="white-skin">
          <SideNav
            logo={logo1}
            
            mask="strong"
            triggerOpening={this.props.triggerOpening}
            style={{transition: 'padding-left .3s'}}
          >

            <li><Link to="/status" className="collapsible-header" onClick={onLinkClick}><MDBIcon icon="bar-chart" className="mr-2 blue-text" />My Dashboard</Link></li>
            <li><Link to="/profile" className="collapsible-header" onClick={onLinkClick}><MDBIcon icon="user" className="mr-2 green-text" />Profile</Link></li>
            <SideNavNav>
              <SideNavCat
                name="Application"
                id="dashboard-cat"
                icon="graduation-cap"

              >
                {this.rSNL("/apply/datascience", "Data Science")}
                {this.rSNL("/apply/webdevelopment", "Web Development")}
                {this.rSNL("/apply/mobileappsdevelopment", "Mobile Development")}
                {this.rSNL("/apply/cybersecurity", "Cyber Security")}
                {this.rSNL("/apply/blockchain", "Blockchain")}
                {this.rSNL("/apply/iot", "IoT")}
                {this.rSNL("/apply/bigdata", "Big Data")}
                {this.rSNL("/apply/artificialintelligence", "Artificial Intelligence")}
              </SideNavCat>

              

              <li><Link to="/courses" className="collapsible-header" onClick={onLinkClick}><MDBIcon icon="book" className="mr-2 red-text" /> Courses</Link></li>
              <li><Link to="/takeexam" className="collapsible-header" onClick={onLinkClick}><MDBIcon icon="balance-scale" className="mr-2 pink-text" /> Exams</Link></li>              
              <li><Link to="/becometrainingprovider" className="collapsible-header" onClick={onLinkClick}><MDBIcon icon="group" className="mr-2 cyan-text" />Training Provider</Link></li>
              <li><Link to="/contactus" className="collapsible-header" onClick={onLinkClick}><MDBIcon icon="envelope-o" className="mr-2 red-text" /> Contact us</Link></li>

            </SideNavNav>
          </SideNav>
        </div>
    );
  }
}

export default SideNavigation;
