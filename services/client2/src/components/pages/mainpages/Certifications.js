import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import {Container, Row, Col, TabPane, TabContent, Nav, NavItem, NavLink, Fa} from 'mdbreact';
import classnames from 'classnames';
import CADS from '../certificates/CADS'
import CPDS from '../certificates/CPDS'
import CLDS from '../certificates/CLDS'
import CAWD from '../certificates/CAWD'
import CPWD from '../certificates/CPWD'
import CLWD from '../certificates/CLWD'
import CAMD from '../certificates/CAMD'
import CPMD from '../certificates/CPMD'
import CLMD from '../certificates/CLMD'
import EmergingCerts from '../certificates/EmergingCerts'
import certification_background from '../img/certification_background.svg'
import TableOfCertsModalPage from '../TableOfCertsModalPage'
import CertsAccordian from '../CertsAccordian'
import LOGO_WHITE from '../img/LOGO_WHITE.svg'

class Certifications extends React.Component {
  constructor(props) {
    super(props);
    
        
    this.toggleOuterTabs = this.toggleOuterTabs.bind(this);
    this.toggleInnerPills = this.toggleInnerPills.bind(this);
    this.state = {
      activeItemOuterTabs: props.match.params.id1,
      activeItemInnerPills: props.match.params.id2,
    };
  }
  toggleOuterTabs(tab) {
    if (this.state.activeItemOuterTabs2 !== tab) {
      this.setState({
        activeItemOuterTabs: tab
      });
    }
  }
  toggleInnerPills(tab) {
    if (this.state.activeItemInnerPills !== tab) {
      this.setState({
        activeItemInnerPills: tab
      });
    }
  }
  render() {
    
    return (
      <Router>
        <div>
        <div className="streak streak-photo mt-0" style={{backgroundImage: "url(" + certification_background + ")" , height:'50vh', maxHeight:'1080px', backgroundColor:'black'}}>
            <div className="mask flex-center rgba-blue-slight">
                <div className="container">
                  <br></br>
                  <img src={LOGO_WHITE} className="img-fluid" alt="itpacs" height='200px' width='300px'/>                    
                    <div className="row text-white text-left wow fadeIn" data-wow-delay="0.2s"> 
                        <div className="col-md-8 mb-2">
                            <div className="white-text">                                  
                                  <br></br>
                                   <h1 className="h1-responsive font-weight-bold wow fadeInLeft">Certifications</h1>
                                   <hr className="my-2 white" />   
                                </div>                            
                        </div>
                       
                    </div>
                    <div className="row text-white text-left wow fadeIn" data-wow-delay="0.2s"> 
                        <div className="col-md-8 mb-2">
                             <h5>Choose from a wide range of open source technologies...</h5>
                        </div>
                                              
                    </div>
                </div>                
            </div>
        </div>

          
          <Row>
            <Col md="12">
            
            <Nav tabs className="nav-justified" color="indigo">
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItemOuterTabs === '1' })} onClick={() => { this.toggleOuterTabs('1'); }} role="tab">
                  <Fa icon="user"/> Associate
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItemOuterTabs === '2' })} onClick={() => { this.toggleOuterTabs('2'); }} role="tab">
                  <Fa icon="user"/> Professional
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItemOuterTabs === '3' })} onClick={() => { this.toggleOuterTabs('3'); }} role="tab">
                  <Fa icon="user"/> Leader
                  </NavLink>
                </NavItem>

              </Nav>
              <TabContent className="card" activeItem={this.state.activeItemOuterTabs}>
                <TabPane tabId="1" role="tabpanel">
                  <Row>
                  <Col md="2">
                    <Nav pills color="primary" className="flex">
                    <NavItem>
                      <NavLink to="#" className={classnames({ active: this.state.activeItemInnerPills === '1' })} onClick={() => { this.toggleInnerPills('1'); }}>Data Science <Fa icon="arrow-circle-right" className="ml-2"/></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#" className={classnames({ active: this.state.activeItemInnerPills === '2' })} onClick={() => { this.toggleInnerPills('2'); }}>Web<Fa icon="arrow-circle-right" className="ml-2"/></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#" className={classnames({ active: this.state.activeItemInnerPills === '3' })} onClick={() => { this.toggleInnerPills('3'); }}>Mobile<Fa icon="arrow-circle-right" className="ml-2"/></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#" className={classnames({ active: this.state.activeItemInnerPills === '4' })} onClick={() => { this.toggleInnerPills('4'); }}>Emerging<Fa icon="arrow-circle-right" className="ml-2"/></NavLink>
                    </NavItem>
                    </Nav>

                  </Col>
                  <Col md="10">
                    
                    <TabContent activeItem={this.state.activeItemInnerPills}>
                      



                      <TabPane tabId="1">           
                      <CADS />


                      </TabPane>
                      <TabPane tabId="2">
                        <CAWD />

                      </TabPane>
                      <TabPane tabId="3">
                        <CAMD />
                      </TabPane>
                      <TabPane tabId="4">
                        <EmergingCerts />
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>



                </TabPane>


                <TabPane tabId="2" role="tabpanel">
                  <Row>
                  <Col md="2">
                    <Nav pills color="primary" className="flex">
                    <NavItem>
                      <NavLink to="#" className={classnames({ active: this.state.activeItemInnerPills === '1' })} onClick={() => { this.toggleInnerPills('1'); }}>Data Science <Fa icon="arrow-circle-right" className="ml-2"/></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#" className={classnames({ active: this.state.activeItemInnerPills === '2' })} onClick={() => { this.toggleInnerPills('2'); }}>Web Development<Fa icon="arrow-circle-right" className="ml-2"/></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#" className={classnames({ active: this.state.activeItemInnerPills === '3' })} onClick={() => { this.toggleInnerPills('3'); }}>Mobile<Fa icon="arrow-circle-right" className="ml-2"/></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#" className={classnames({ active: this.state.activeItemInnerPills === '4' })} onClick={() => { this.toggleInnerPills('4'); }}>Emerging<Fa icon="arrow-circle-right" className="ml-2"/></NavLink>
                    </NavItem>
                    </Nav>
                  </Col>
                  <Col md="10">
                    <TabContent activeItem={this.state.activeItemInnerPills}>
                      <TabPane tabId="1">
                        <CPDS />
                      </TabPane>
                      <TabPane tabId="2">
                        <CPWD />
                      </TabPane>
                      <TabPane tabId="3">
                        <CPMD />
                      </TabPane>
                      <TabPane tabId="4">
                        <EmergingCerts />
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
                </TabPane>


                <TabPane tabId="3" role="tabpanel">
                  <Row>
                  <Col md="2">
                    <Nav pills color="primary" className="flex">
                    <NavItem>
                      <NavLink to="#" className={classnames({ active: this.state.activeItemInnerPills === '1' })} onClick={() => { this.toggleInnerPills('1'); }}>Data Science <Fa icon="arrow-circle-right" className="ml-2"/></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#" className={classnames({ active: this.state.activeItemInnerPills === '2' })} onClick={() => { this.toggleInnerPills('2'); }}>Web Development<Fa icon="arrow-circle-right" className="ml-2"/></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#" className={classnames({ active: this.state.activeItemInnerPills === '3' })} onClick={() => { this.toggleInnerPills('3'); }}>Mobile<Fa icon="arrow-circle-right" className="ml-2"/></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#" className={classnames({ active: this.state.activeItemInnerPills === '4' })} onClick={() => { this.toggleInnerPills('4'); }}>Emerging<Fa icon="arrow-circle-right" className="ml-2"/></NavLink>
                    </NavItem>
                    </Nav>
                  </Col>
                  <Col md="10">
                    <TabContent activeItem={this.state.activeItemInnerPills}>
                      <TabPane tabId="1">
                        <CLDS />
                      </TabPane>
                      <TabPane tabId="2">
                        <CLWD />
                      </TabPane>
                      <TabPane tabId="3">
                        <CLMD />
                      </TabPane>
                      <TabPane tabId="4">
                        <EmergingCerts />
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>

                </TabPane>

 

            


              </TabContent>
            </Col>
          </Row>

        <Container>

          <CertsAccordian />
          
        </Container>


          <div className="row">
               <div className="col-md-12 mb-4">
                    <div className="card card-image" style={{backgroundImage: "url(" + certification_background + ")"}}>
                        <div className="text-white text-center d-flex align-items-center rgba-cyan-strong py-5 px-4 rounded">
                            <div>
                                <h6 className="white-text">
                                    <i className="fa fa-bullseye"></i>
                                    <strong> ITPACS</strong>
                                </h6>
                                <h3 className="py-3 font-weight-bold">
                                    <strong>Over 100 Certifications...</strong>
                                </h3>
                                <p className="pb-3">Our goal is cover a wide range of new age technologies that a professional needs to be good at.
                                We continously measure the pulse of the industry in terms of the latest positive changes. Exam questions are prepared by industry experts who are leaders in their technology.
                                </p>
                                <a><TableOfCertsModalPage /></a>
                            </div>
                        </div>
                    </div>
                </div>
          </div>

        </div>
      </Router>
    );
  }
}

export default Certifications;