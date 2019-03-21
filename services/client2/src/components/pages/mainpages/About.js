import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { TabPane, Badge, TabContent, Nav, NavItem, NavLink, Fa, Row, Col, Container} from 'mdbreact';
import classnames from 'classnames';
import CodeOfEthicsAccordian from '../CodeOfEthicsAccordian'
import AboutUsPic from '../img/AboutUsPic.svg'
import certification_background from '../img/certification_background.svg'
import VisionPic from '../img/VisionPic.svg'
import BANER_CodeOfEthics from '../img/BANER_CodeOfEthics.svg'

import AboutUs_Associate_Certificate from '../img/AboutUs_Associate_Certificate.svg'
import AboutUs_Industry_Inputs from '../img/AboutUs_Industry_Inputs.svg'
import AboutUs_Leader_Certificate from '../img/AboutUs_Leader_Certificate.svg'
import AboutUs_Main from '../img/AboutUs_Main.svg'
import AboutUs_Proffesional_Certificate from '../img/AboutUs_Proffesional_Certificate.svg'

import EMERGING_CERTIFIED_ASSOCIATE_CYBER_SECURITY from '../img/EMERGING_CERTIFIED_ASSOCIATE_CYBER_SECURITY.svg'
import MOBILE_DEV_APPLICATION_PROGRAMMING_INTERFACES from '../img/MOBILE_DEV_APPLICATION_PROGRAMMING_INTERFACES.svg'
import WEB_DEV_COMMUMICATION_OVER_WEB from '../img/WEB_DEV_COMMUMICATION_OVER_WEB.svg'
import MOBILE_DEV_COMMUMICATION_OVER_WEB from '../img/MOBILE_DEV_COMMUMICATION_OVER_WEB.svg'
import LOGO_WHITE from '../img/LOGO_WHITE.svg'

import AUDIT_RISK_COMMITTEE from '../img/AUDIT_RISK_COMMITTEE.svg'
import INTERNAL_AUDIT from '../img/INTERNAL_AUDIT.svg'
import RISK_MANAGEMENT from '../img/RISK_MANAGEMENT.svg'


import '../HomePage.css'

import CertsAccordian from '../CertsAccordian'

class About extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeItem: '1'
    };
  }
  toggle(tab) {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  }
  render() {
    
    return (
      <Router>
        <div>

        <div className="streak streak-photo mt-0" style={{backgroundImage: "url(" + AboutUsPic + ")" , height:'50vh', maxHeight:'1080px', backgroundColor:'black'}}>
            <div className="mask flex-center rgba-blue-slight">
                <div className="container">
                  <br></br>
                  <img src={LOGO_WHITE} className="img-fluid" alt="itpacs" height='200px' width='300px'/>                    
                    <div className="row text-white text-left wow fadeIn" data-wow-delay="0.2s"> 
                        <div className="col-md-8 mb-2">
                            <div className="white-text">                                  
                                  <br></br>
                                   <h1 className="h1-responsive font-weight-bold wow fadeInLeft">About Us</h1>
                                   <hr className="my-2 white" />   
                                </div>                            
                        </div>
                       
                    </div>
                    <div className="row text-white text-left wow fadeIn" data-wow-delay="0.2s"> 
                        <div className="col-md-8 mb-2">
                             <h5>Helping you acquire skills to navigate the technology maze..</h5>
                        </div>
                                              
                    </div>
                </div>                
            </div>
        </div>

          
          <main>
          <Nav tabs color="indigo" className="nav-justified">
            <NavItem>
              <NavLink to="#"
                className={classnames({ active: this.state.activeItem === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
              <Fa icon="copyright"/> About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#"
                className={classnames({ active: this.state.activeItem === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                <Fa icon="bullseye"/> Vision
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#"
                className={classnames({ active: this.state.activeItem === '3' })}
                onClick={() => { this.toggle('3'); }}
              >
                <Fa icon="file"/> Governance
              </NavLink>
            </NavItem>
          </Nav>
          
          <TabContent activeItem={this.state.activeItem}>
            
            <TabPane tabId="1">
            
        <div className="container">
            <section id="about" className="section about my-5">
                <h2 className="text-center text-uppercase font-weight-bold mt-5 pt-4 pt-4 spacing wow fadeIn" data-wow-delay="0.2s"><strong>About us</strong></h2>
                <p className="text-center text-uppercase font-weight-bold grey-text mb-5 pb-3 wow fadeIn" data-wow-delay="0.2s"><i className="fa fa-square red-text-2 mr-2" aria-hidden="true"></i> ITPACS.org</p>
              
                <div className="row">
                    <div className="col-xl-5 col-lg-6 pb-1 wow fadeIn" data-wow-delay="0.4s">
                     <p align="justify">Information Technology Professional Accreditations and Certifications Society (ITPACS) is a non-profit organization for enhancing skills in the IT and software development field. ITPACS was established in 2008 to promote acquisition of knowledge for professionals and advocate education, research and collaboration. 
                        </p>

                        <p align="justify">ITPACS provides value to individuals and organizations through its accreditation and certification programs. Through our certifications, individuals can demonstrate their skills and knowledge to organizations. Organizations are assured of quality delivery as a result of employing individuals with ITPACS credentials.</p>

                        <ul>
                            <li>Globally recognized credentials</li>
                            <li>Certificates reflecting latest trends</li>
                            <li>Exams developed by industry experts</li>
                            
                        </ul>

                    </div>
                    <div className="col-xl-6 ml-lg-auto col-lg-6 mb-5 wow fadeIn" data-wow-delay="0.4s">
                        <img src={AboutUs_Main} className="img-fluid rounded z-depth-1"
                            alt="itpacs"></img>

                    </div>
                </div>
            </section>
            </div>

            <hr></hr>
            <Container>
            <section className="mt-5 mb-3" id="services">
                <div className="row mt-5 pt-5 pb-3">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="font-weight-bold mb-4 wow fadeIn" data-wow-delay="0.2s"><strong className="red-text-2 font-weight-bold"><i className="fa fa-square red-text-2 mr-2" aria-hidden="true"></i> </strong>Our
                            Certificates
                        </h4>
                        <p align="" className="dark-grey-text">Developed by technology professionals for professionals, our certifications are based on rigorous standards and ongoing research to meet the real-world IT needs of organizations. 
                        In an increasingly changing world, ITPACS certification ensures that you’re ready to meet the demands of IT projects and employers across the globe. 
                        </p>

                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <img src={AboutUs_Associate_Certificate} className="img-fluid z-depth-1 rounded" alt="itpacs"></img>
                        <h5 className="font-weight-bold dark-grey-text mt-4 mb-3 wow fadeIn" data-wow-delay="0.2s">Associate</h5>
                        <p align="justify" className=" font-small">Our Associate level certifications are foundation level and catered to applicants with less than 1 year working experience in the field.
                        </p>
                        

                    </div>
                    <div className="col-lg-3 col-md-6">

                        <img src={AboutUs_Proffesional_Certificate} className="img-fluid z-depth-1 rounded" alt="itpacs"></img>
            
                        <h5 className="font-weight-bold dark-grey-text mt-4 mb-3 wow fadeIn" data-wow-delay="0.2s">Professional</h5>

                
                        <p align="justify" className=" font-small">Our Professional level certifications are catered to applicants with at least 2000 hours or 2 years experience in the technical domain. 
                        </p>
                        

                    </div>
                    <div className="col-lg-3 col-md-6">

                        <img src={AboutUs_Leader_Certificate} className="img-fluid z-depth-1 rounded" alt="itpacs"></img>

                        
                        <h5 className="font-weight-bold dark-grey-text mt-4 mb-3 wow fadeIn" data-wow-delay="0.2s">Leader</h5>

                       
                        <p align="justify" className=" font-small">Our Leader certifications are for team leaders, managers and above. Participants are tested on project management and leadership skills.
                        </p>
                        

                    </div>
                </div>
            </section>
            </Container>


            <div className="streak streak-photo" style={{backgroundImage: "url(" + certification_background + ")"}}>
            <div className="mask flex-center rgba-black-light">
                <div className="container">
                  <h3 className="text-center text-white mb-5 text-uppercase font-weight-bold wow fadeIn" data-wow-delay="0.2s">Globally recognized certifications</h3>

                    <div className="row text-white text-center wow fadeIn" data-wow-delay="0.2s">

 
                        <div className="col-md-3 mb-2">
                            <h1 className="white-text mb-1 font-weight-bold"><strong>120+</strong></h1>
                            <p>Certifications</p>
                        </div>

                        <div className="col-md-3 mb-2">
                            <h1 className="white-text mb-1 font-weight-bold"><strong>3</strong></h1>
                            <p>Levels</p>
                        </div>

                        <div className="col-md-3 mb-2">
                            <h1 className="white-text mb-1 font-weight-bold"><strong>6+</strong></h1>
                            <p>Emerging technologies</p>
                        </div>

                        <div className="col-md-3">
                            <h1 className="white-text mb-1 font-weight-bold"><strong>2</strong></h1>
                            <p>Exam formats</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>


        <Container>
        <section className="mb-5 pt-3 pb-3 wow fadeIn" data-wow-delay="0.2s">
                <h5 className="text-center dark-grey-text text-uppercase font-weight-bold spacing my-5 pt-2 pb-4 wow fadeIn" data-wow-delay="0.2s">
                    <strong>Industry Inputs</strong>
                </h5>

                <div className="row">
                    <div className="col-lg-5 col-md-12 mb-4">

                        <img className="img-fluid z-depth-1 rounded" src={AboutUs_Industry_Inputs} alt="itpacs"></img>

                    </div>
                    <div className="col-lg-7 col-md-12">

                        <p className="black-text">Our exams are developed and approved through a consensus-based process that ensures all interested stakeholders can participate.
                        To develop a specific exam, we charter a committee including volunteers, industry experts, subject matter experts and consultants. The committee meets over a period to draft and refine the exam. 
                        The finished exam is sent for approval to the ITPACS consensus body, a group of independent volunteer members who validate the development process of each exam.
                        </p>

                        <div className="row mt-4">

                            <div className="col-md-6 col-6 mb-4">
                                <div className="col-1 col-md-2 float-left">
                                    <i className="fa fa-asterisk fa-2x info-text"></i>
                                </div>
                                <div className="col-10 col-md-9 col-lg-10 float-right">
                                    <h6 className="font-weight-bold info-text mt-2">Standards</h6>
                                    <p className="black-text">We collect inputs from industry experts within a specific area of technology. 
                                    ITPACS works with thousands of professionals across the globe to identify skills, knowledge and competence for the different IT roles. We use these guidelines to structure our exams.</p>

                                </div>
                            </div>
                            <div className="col-md-6 col-6 mb-4">
                                <div className="col-1 col-md-2 float-left">
                                    <i className="fa fa-tint fa-2x info-text"></i>
                                </div>
                                <div className="col-10 col-md-9 col-lg-10 float-right">
                                    <h6 className="font-weight-bold info-text mt-2">Education</h6>
                                    <p className="black-text">ITPACS does not offer training or courses directly. We work with training providers around the world in ensuring that the knowledge required to pass the certification exams is covered as part of their training program.</p>

                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
            </Container>



            </TabPane>
            
            <TabPane tabId="2">

                <div className="row mt-3">
                <div className="col-md-12">
                    <div className="card card-cascade wider reverse">
 
                        <div className="card-body text-center">
                            
                            <h4 className="card-title">
                                <strong>Vision</strong>
                            </h4>
                            <h5 className="indigo-text">
                                <strong>Help individuals acquire technology skills to make their job immune to automation</strong>
                            </h5>

                            <p>Our vision is to help individuals acquire technology skills to make their job immune to automation. We acheive this by advancing careers, improving individual and organizational success through our globally recognized standards, certifications, resources, tools, academic research, publications, professional development courses and networking opportunities.</p>
                    <p>Our Board of Directors is a distinguished group of individuals from around the globe who bring experience, diversity and passion in Information Technology. Our members elect the Board to provide strategic direction for the Institute. Board members also serve as spokespersons and ambassadors for the Institute.</p>

                        <div className="row">
                            <div className="col-6 mx-auto">
                                <div className="text-center">
                                    <img src={VisionPic} alt="itpacs"></img>
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>




            </TabPane>
            

            <TabPane tabId="3">

                    <Container>
                    <section className="py-4">
                        <h2 className="h1 text-center mb-5">GOVERNANCE</h2>
                        <p className="text-center mb-5 pb-5">ITPacs Board is committed to ensuring the highest standard of corporate governance. The Chairman and Board Members 
                        of ITPacs are appointed by voting for a period of 3 years. They are experienced professionals drawn from both the public and 
                        private sectors. 
                        <br></br>
                        <br></br>
                        In addition to its statutory responsibilities, the Board sets strategic directions and policies relating to grant management and management of 
                        reserves, ensuring that resources are optimally utilised.
                        </p>

                        <div className="row">
                            <div className="col-lg-5 col-xl-4 mb-4">
                                <div className="view overlay z-depth-1-half">
                                    <img src={AUDIT_RISK_COMMITTEE} className="img-fluid rounded" alt="itpacs"></img>

                                </div>
                            </div>
                            <div className="col-lg-7 col-xl-7 ml-xl-4 mb-4">
                                <h3 className="mb-3 font-weight-bold dark-grey-text">
                                    <strong>AUDIT AND RISK COMMITTEE</strong>
                                </h3>
                                <p className="grey-text">The Audit and Risk Committee (ARC) of ITPACS includes representatives from 
                                the Board of ITPACS. The ARC’s roles encompass reviewing accounting, auditing and financial reporting 
                                matters, as well as matters relating to risk management, to reasonably ensure there are effective systems 
                                of internal controls and risk management and a good state of corporate governance.</p>

                            </div>
                        </div>
                        <hr className="mb-5"></hr>
                        <div className="row mt-3">
                            <div className="col-lg-5 col-xl-4 mb-4">
                                <div className="view overlay z-depth-1">
                                    <img src={INTERNAL_AUDIT} className="img-fluid rounded" alt="itpacs"></img>
            \
                                </div>
                            </div>
                            <div className="col-lg-7 col-xl-7 ml-xl-4 mb-4">
                                <h3 className="mb-3 font-weight-bold dark-grey-text">
                                    <strong>INTERNAL AUDIT</strong>
                                </h3>
                                <p className="grey-text">ITPACS Group Internal Audit Division (Group IA) is an independent function that 
                                reports to the ARC. The principal role of the Division is to conduct audits to evaluate the reliability, 
                                adequacy and effectiveness of the internal controls of ITPACS Board. Group IA works closely with external 
                                auditors to coordinate its audit work.</p>

                            </div>
                        </div>
                        <hr className="mb-5"></hr>
                        <div className="row">
                            <div className="col-lg-5 col-xl-4 mb-4">
                                <div className="view overlay z-depth-1">
                                    <img src={RISK_MANAGEMENT} className="img-fluid rounded" alt="itpacs"></img>

                                </div>
                            </div>
                            <div className="col-lg-7 col-xl-7 ml-xl-4 mb-4">
                                <h3 className="mb-3 font-weight-bold dark-grey-text">
                                    <strong>RISK MANAGEMENT</strong>
                                </h3>
                                <p className="grey-text">ITPACS Board Group, regularly reviews its business, financial and operational activities 
                                through an established Group Enterprise Risk Management (ERM) policy and framework. The Group ERM framework provides 
                                consistent and sustainable risk management structures and processes across the entities, to manage and mitigate risks 
                                and capitalise on opportunities. ERM also facilitates the deepening of a risk-focused culture across Board and the 
                                Group. The Board of ITPACS, supported by the Audit & Risk Committee, exercises overall risk governance and oversight of 
                                the ERM framework.</p>

                            </div>
                        </div>
                        <hr className="mb-5"></hr>
                        <div className="row">
                            <div className="col-lg-5 col-xl-4 mb-4">
                                <div className="view overlay z-depth-1">
                                    <img src={MOBILE_DEV_COMMUMICATION_OVER_WEB} className="img-fluid rounded" alt="itpacs"></img>

                                </div>
                            </div>
                            <div className="col-lg-7 col-xl-7 ml-xl-4 mb-4">
                                <h3 className="mb-3 font-weight-bold dark-grey-text">
                                    <strong>INTERNAL CONTROLS</strong>
                                </h3>
                                <p className="grey-text">The Management of ITPACS Board is responsible for the design and implementation of a comprehensive system of internal 
                                controls to safeguard assets, maintain proper accounting records and produce reliable financial information. 
                                The system includes defined responsibility and financial authority limits, segregation of duties, 
                                reconciliation of financial information, compliance with internal financial policies, financial 
                                regulations or government instruction manuals and maintenance of proper financial records. </p>

                            </div>
                        </div>  
                        <hr className="mb-5"></hr>
                         
                    </section>
                    </Container>
        




              <Row>
                <Container>
                <Row>
                    <Col sm="6">
                        <br />
                    <CodeOfEthicsAccordian />
                    
                    </Col>
                    <Col sm='6'>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                       <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                        <img src={BANER_CodeOfEthics} alt="itpacs"></img>
                    </Col>
                </Row>
                </Container>
              </Row>
            </TabPane>
          </TabContent>




          
        
        <div className="container-fluid mt-5 pb-4 bg-team">            
            <div id="tour" className="container">        
                
                <h2 className="white-text text-uppercase font-weight-bold pt-5 mb-2 mt-3 wow fadeIn" data-wow-delay=".2s">Advisory Members</h2>
                <hr className=" mb-5"></hr>
               
                <div className="table-responsive white-text">
                    <table className="table wow fadeIn" data-wow-delay=".4s">
                      <thead className="thead-inverse">
                        <tr>
                          <th>Name</th>
                          <th>Country</th>
                          <th>Domain</th>
                          <th><div className="pl-4">Role</div></th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <th scope="row">Michael Antico</th>
                          <td>USA</td>
                          <td>Cyber Security</td>
                          <td><h5><Badge className='ml-2'color='info'>Board</Badge></h5></td>
                        </tr>
                        <tr>
                          <th scope="row">Abhilasha Raj</th>
                          <td>USA</td>
                          <td>Big Data</td>
                          <td><h5><Badge className='ml-2'color='danger'>Advisor</Badge></h5></td>
                        </tr>
                        <tr>
                          <th scope="row">Vince Tan</th>
                          <td>USA</td>
                          <td>Data Science</td>
                          <td><h5><Badge className='ml-2'color='warning'>Steering</Badge></h5></td>
                        </tr>
                        <tr>
                          <th scope="row">Tina Prislan</th>
                          <td>Slovenia</td>
                          <td>Mobile</td>
                          <td><h5><Badge className='ml-2'color='info'>Board</Badge></h5></td>
                        </tr>
                        <tr>
                          <th scope="row">William Thong</th>
                          <td>Netherlands</td>
                          <td>Web</td>
                          <td><h5><Badge className='ml-2'color='primary'>Management</Badge></h5></td>
                        </tr>
                        <tr>
                          <th scope="row">Alexander Thomas</th>
                          <td>Malaysia</td>
                          <td>Blockchain</td>
                          <td><h5><Badge className='ml-2'color='primary'>Management</Badge></h5></td>
                        </tr>
                        <tr>
                          <th scope="row">Ashwini Rao</th>
                          <td>India</td>
                          <td>Web</td>
                          <td><h5><Badge className='ml-2'color='info'>Board</Badge></h5></td>
                        </tr>
                        <tr>
                          <th scope="row">Nathan Ramos</th>
                          <td>Philippines</td>
                          <td>Data Science</td>
                          <td><h5><Badge className='ml-2'color='danger'>Advisor</Badge></h5></td>
                        </tr>
                        <tr>
                          <th scope="row">Verena Diel</th>
                          <td>UK</td>
                          <td>Cyber Security</td>
                          <td><h5><Badge className='ml-2'color='danger'>Advisor</Badge></h5></td>
                        </tr>
                        <tr>
                          <th scope="row">Swati Thacker</th>
                          <td>India</td>
                          <td>Web</td>
                          <td><h5><Badge className='ml-2'color='info'>Board</Badge></h5></td>
                        </tr>
                        <tr>
                          <th scope="row">Steve Scott</th>
                          <td>USA</td>
                          <td>Mobile</td>
                          <td><h5><Badge className='ml-2'color='danger'>Advisor</Badge></h5></td>
                        </tr>
                        <tr>
                          <th scope="row">John Vang</th>
                          <td>Australia</td>
                          <td>Web</td>
                          <td><h5><Badge className='ml-2'color='danger'>Advisor</Badge></h5></td>
                        </tr>
                        <tr>
                          <th scope="row">Will Harrington</th>
                          <td>USA</td>
                          <td>Data Science</td>
                          <td><h5><Badge className='ml-2'color='primary'>Management</Badge></h5></td>
                        </tr>
                        <tr>
                          <th scope="row">Benjamin Teh</th>
                          <td>USA</td>
                          <td>IoT</td>
                          <td><h5><Badge className='ml-2'color='warning'>Steering</Badge></h5></td>
                        </tr>
                        <tr>
                          <th scope="row">Sanat Srivastva</th>
                          <td>India</td>
                          <td>Big Data</td>
                          <td><h5><Badge className='ml-2'color='danger'>Advisory</Badge></h5></td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </div>
        </div>    
        

        







          <Container>
            <CertsAccordian />
          </Container>

          </main>
        </div>
      </Router>
    );
  }
}

export default About;