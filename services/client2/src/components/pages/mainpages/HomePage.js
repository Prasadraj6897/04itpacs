import React from 'react';
import {NavLink} from 'react-router-dom'
import CardsPage from '../CardsPage'
import { View, Mask } from 'mdbreact';
import '../HomePage.css';
import PanelPage from '../PanelPage'
import MultiCarouselPage from '../MultiCarouselPage'
import {EdgeHeader, FreeBird, Carousel, CarouselInner, CarouselItem, Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText, Button } from 'mdbreact';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faChessPawn, faChessQueen, faChessKing} from '@fortawesome/fontawesome-free-solid'
import DataScience from '../img/DataScience.svg'
import MobileTechnologies from '../img/MobileTechnologies.svg'
import WebTechnologies from '../img/WebTechnologies.svg'
import EmergingTechnologies from '../img/EmergingTechnologies.svg'
import Critical_Skillspic from '../img/Critical_Skills.svg'
import Essential_Skillspic from '../img/Essential_Skills.svg'
import Emergingpic from '../img/Emerging.svg'
import Niche_Skillspic2 from '../img/Niche_Skills2.svg'
import LOGO_WHITE from '../img/LOGO_WHITE.svg'
import certification_background from '../img/certification_background.svg'
import CertsAccordian from '../CertsAccordian'
import HOME_PAGE_MAIN from '../img/HOME_PAGE_MAIN.svg'

import CADSpic from '../img/CADSpic.svg'
import CAWDpic from '../img/CAWDpic.svg'
import CAMDpic from '../img/CAMDpic.svg'

import CPDSpic from '../img/CPDSpic.svg'
import CPWDpic from '../img/CPWDpic.svg'
import CPMDpic from '../img/CPMDpic.svg'

import CLDSpic from '../img/CLDSpic.svg'
import CLWDpic from '../img/CLWDpic.svg'
import CLMDpic from '../img/CLMDpic.svg'

import CAAIpic from '../img/CAAIpic.svg'
import CAIoTpic from '../img/CAIoTpic.svg'
import CABCpic from '../img/CABCpic.svg'
import CABDpic from '../img/CABDpic.svg'



class HomePage extends React.Component {
  render(){
    
    return(
      <div> 
      
      <div className="streak streak-photo mt-0" style={{backgroundImage: "url(" + HOME_PAGE_MAIN + ")" , height:'120vh', maxHeight:'1080px', backgroundColor:'black'}}>
            <div className="mask flex-center rgba-black-strong">
                <div className="container">
                  <br></br>
                  <img src={LOGO_WHITE} className="img-fluid" alt="itpacs" height='200px' width='300px'/>                    
                    <div className="row text-white text-left wow fadeIn" data-wow-delay="0.2s"> 
                        <div className="col-md-8 mb-2">
                            <div className="white-text">                                  
                                  <br></br>
                                   <h1 className="h1-responsive font-weight-bold wow fadeInLeft">Information Technology Professional Accreditations and Certifications Society</h1>
                                   <hr className="my-2 white" />   
                                </div>                            
                        </div>
                       
                    </div>
                    <div className="row text-white text-left wow fadeIn" data-wow-delay="0.2s"> 
                        <div className="col-md-8 mb-2">
                            <div className="white-text">                                  
                                  <br></br>
                                   <h3 className="h1-responsive font-weight-bold wow fadeInLeft">Rise of Technology....</h3>
                                   <p className="wow fadeInLeft">With various global reports indicating an inevitable displacement of jobs due to automation and technology, the need for professionals 
                                to change their skills is at an accelerating pace. ITPacs is a non-profit organization dedicated to helping you navigate through the uncertain future and make your job immune to automation.</p>
                                <br></br>
                                <NavLink to="/riseoftechnology">
                                  <Button className= 'btn btn-blue-gradient btn-lg btn-rounded ml-0' color="primary"><i className="fa fa-clone left"></i>Learn More</Button>
                                </NavLink>
                                   <hr className="my-2 white" />   
                                </div>                            
                        </div>
                                              
                    </div>
                </div>                
            </div>
        </div>

        <Container>
          <CertsAccordian />
        </Container>
      
     
        <EdgeHeader color="teal darken-3" />
        <FreeBird>

          <Row>
            <Col md="6" className="mx-auto float-none white z-depth-1 py-2 px-2">
              <CardBody>
                <h2 className="h2-responsive"><strong>Essential Skills</strong></h2>
                <Row>
                <Col sm='2'>
                 <img src={Essential_Skillspic} className='img-fluid' alt="itpacs"></img>
                </Col>
                 </Row>
                <p className="pb-4">Technology Skills considered absolutely necessary in the new world. This starts with knowledge of atleast one programming language. Examples, Functional programming, Object Oriented Programming, etc.,</p>
                
              </CardBody>
            </Col>
             <Col md="6" className="mx-auto float-none white z-depth-1 py-2 px-2">
              <CardBody>
                <h2 className="h2-responsive"><strong>Critical Skills</strong></h2>
                  <Row>
                <Col sm='2'>
                 <img src={Critical_Skillspic} className='img-fluid' alt="itpacs"></img>
                </Col>
                 </Row>
                <p className="pb-4">Technology Skills considered critical within your industry. If you are in web development, you need to have knowledge of communication over Http, designing user interfaces for the browser etc.,., </p>
              </CardBody>
            </Col>
          </Row>

          <Row>
            <Col md="6" className="mx-auto float-none white z-depth-1 py-2 px-2">
              <CardBody>
                <h2 className="h2-responsive"><strong>Niche Skills</strong></h2>
                <Row>
                <Col sm='2'>
                 <img src={Niche_Skillspic2} className='img-fluid' alt="itpacs"></img>
                </Col>
                 </Row>
                <p className="pb-4">Technology Skills considered niche. These are skills wherein you specializise. Example, as a data scientist, you need to have in-depth knowledge of an algorithm along with the computation aspects</p>
              </CardBody>
            </Col>
             <Col md="6" className="mx-auto float-none white z-depth-1 py-2 px-2">
              <CardBody>
                <h2 className="h2-responsive"><strong>Emerging</strong></h2>
                 <Row>
                <Col sm='2'>
                 <img src={Emergingpic} className='img-fluid' alt="itpacs"></img>
                </Col>
                 </Row>
                <p className="pb-4">Technology skills in areas where projects are in experimental stages. Many of the concepts are still in prototype stage but can have significant impact when they go live. Example, autonomous vehicles</p>
              </CardBody>
            </Col>
          </Row>
        </FreeBird>
        <Container>
          <Row>
            <Col md="10" className="mx-auto mt-4">
              <p className="text-center">Obtaining an ITPacs certificate demonstrates to the world your knowledge and skills</p>
              <p className="text-center">The world is changing at a rapid pace and we monitor critical skills required for the future.</p>
              <p className="text-center">We present you a framework to address your career progression in line with industry needs.</p>
              <NavLink to="/certifications/1/1">
                  <div className='text-center'>
                  <Button className= 'btn btn-blue-gradient btn-lg btn-rounded' color="primary">View Certificates</Button>
                  </div>
              </NavLink>
              <hr/>
              <h3 className="text-center mb-3">Certifications Framework</h3>
              <Row>
                <Col md="4" className="text-center home-feature-box">
                  <NavLink to="/certifications/1/1">
                    <FontAwesomeIcon icon={faChessPawn} size='1x'/>
                    <span>Associate</span>
                  </NavLink>
                </Col>
                <Col md="4" className="text-center home-feature-box">
                  <NavLink to="/certifications/2/1">
                    <FontAwesomeIcon icon={faChessQueen} size='1x'/>
                    <span>Professional</span>
                  </NavLink>
                </Col>
                <Col md="4" className="text-center home-feature-box">
                  <NavLink to="/certifications/3/1">
                   <FontAwesomeIcon icon={faChessKing} size='1x'/> 
                    <span>Leader</span>
                  </NavLink>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        
        <Row>
          <CardsPage />
        </Row>
        <Row>
          <br></br>
          <br></br>
        </Row>
        

        <Container>
        <Row>
          <br></br>
          <br></br>
        </Row>
        </Container>

        

        
          <Container fluid>
          <Row>
            <Col md='3' sm='6' xs='12' className='home-feature-box'>   
              <NavLink to='/certifications/1/1'>
              <View zoom>
                
                <img src={DataScience} className="img-fluid" alt="itpacs" />
                <Mask className="flex-center">
                  
                </Mask>
                
              </View>
              </NavLink>                            
          </Col>

          <Col md='3' sm='6' xs='12' className='home-feature-box'>         
            <NavLink to='/certifications/1/3'>
            <View zoom>
            
              <img src={MobileTechnologies} className="img-fluid" alt="itpacs" />
              <Mask className="flex-center">                
              </Mask>
              
            </View>
            </NavLink>                     
          </Col>

          <Col md='3' sm='6' xs='12' className='home-feature-box'>
          
            <NavLink to='/certifications/1/2'>
            <View zoom>
              
              <img src={WebTechnologies} className="img-fluid" alt="itpacs" />
              <Mask className="flex-center">                
              </Mask>
              
            </View>
            </NavLink>
                             
          </Col>
          <Col md='3' sm='6' xs='12' className='home-feature-box'>
          <NavLink to='/certifications/1/4'>
            <View zoom>
            
              <img src={EmergingTechnologies} className="img-fluid" alt="itpacs" />
              <Mask className="flex-center">                
              </Mask>
            
            </View>
          </NavLink>              
          </Col>        
          </Row>
        </Container>

        <div className="streak streak-photo mt-5" style={{backgroundImage: "url(" + certification_background + ")"}}>
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

        <Row>
          <br></br>
          <br></br>
        </Row>
          <PanelPage
            textOneFa = "fa fa-check-circle fa-3x" 
            textOne = "STEP 1: Choose a Certification" 

            textTwoFa ="fa fa-cubes fa-3x"
            textTwo="STEP 2: Complete eligibility process"

            textThreeFa = "fa fa-bullseye fa-3x"
            textThree="STEP 3: SCHEDULE EXAM" />
        <Row>
          
          <Container>
        <h4 className="mt-5 mb-2"></h4>
        <Carousel
          activeItem={1}
          length={5}
          slide={true}
          showControls={true}
          showIndicators={true}
          multiItem >
          <CarouselInner>
            <Row>
              <CarouselItem itemId="1">
                <Col md="4">
                  <Card className="mb-2">
                  <CardImage className="img-fluid" src={CADSpic} />
                    <CardBody>
                      <CardTitle className='grey-text'>Certified Associate in Data Science (CADS)®</CardTitle>
                      <CardText>Covers Data Cleaning, Data Analysis, Machine Learning, Non-Linear Supervised Learning Algorithms etc.,</CardText>
                      <NavLink to='/certifications/1/1'>
                         <div className='btn btn-primary'>Learn More</div>
                      </NavLink>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                  <Card className="mb-2">
                  <CardImage className="img-fluid" src={CAWDpic} />
                    <CardBody>
                      <CardTitle className='grey-text'>Certified Associate in Web Development (CAWD)®</CardTitle>
                      <CardText>Covers Document Object Model, Request-Response cycle, Forms, Databases, Application Programming Interfaces, etc.,</CardText>
                      <NavLink to='/certifications/1/2'>
                         <div className='btn btn-primary'>Learn More</div>
                      </NavLink>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                  <Card className="mb-2">
                  <CardImage className="img-fluid" src={CAMDpic} />
                    <CardBody>
                      <CardTitle className='grey-text'>Certified Associate in Mobile Development (CAMD)®</CardTitle>
                      <CardText>Covers Native Applications for Android Platform, Native Applications for iOS Platform, Request-Response cycle etc.,</CardText>
                      <NavLink to='/certifications/1/3'>
                         <div className='btn btn-primary'>Learn More</div>
                      </NavLink>
                    </CardBody>
                  </Card>
                </Col>
              </CarouselItem>
              <CarouselItem itemId="2">
                <Col md="4">
                  <Card className="mb-2">
                  <CardImage className="img-fluid" src={CPDSpic} />
                    <CardBody>
                      <CardTitle className='grey-text'>Certified Professional in Data Science (CPDS)®</CardTitle>
                      <CardText>Covers Data Cleaning, Data Analysis, Machine Learning, Non-Linear Supervised Learning Algorithms etc.,</CardText>
                      <NavLink to='/certifications/2/1'>
                         <div className='btn btn-primary'>Learn More</div>
                      </NavLink>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                  <Card className="mb-2">
                  <CardImage className="img-fluid" src={CPWDpic} />
                    <CardBody>
                      <CardTitle className='grey-text'>Certified Professional in Web Development (CPWD)®</CardTitle>
                      <CardText>Covers Document Object Model, Request-Response cycle, Forms, Databases, Application Programming Interfaces, etc.,</CardText>
                      <NavLink to='/certifications/2/2'>
                         <div className='btn btn-primary'>Learn More</div>
                      </NavLink>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                  <Card className="mb-2">
                  <CardImage className="img-fluid" src={CPMDpic} />
                    <CardBody>
                      <CardTitle className='grey-text'>Certified Professional in Mobile Development (CPMD)®</CardTitle>
                      <CardText>Covers Native Applications for Android Platform, Native Applications for iOS Platform, etc.,</CardText>
                      <NavLink to='/certifications/2/3'>
                         <div className='btn btn-primary'>Learn More</div>
                      </NavLink>
                    </CardBody>
                  </Card>
                </Col>
              </CarouselItem>
              <CarouselItem itemId="3">
                <Col md="4">
                  <Card className="mb-2">
                  <CardImage className="img-fluid" src={CLDSpic} />
                    <CardBody>
                      <CardTitle className='grey-text'>Certified Leader in Data Science (CLDS)®</CardTitle>
                      <CardText>Covers Data Science Project Lifecycle, Challenges in Data Cleaning, Challenges in Data Analysis, Reading visual charts, etc.,</CardText>
                      <NavLink to='/certifications/3/1'>
                         <div className='btn btn-primary'>Learn More</div>
                      </NavLink>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                  <Card className="mb-2">
                  <CardImage className="img-fluid" src={CLWDpic} />
                    <CardBody>
                      <CardTitle className='grey-text'>Certified Leader in Web Development (CLWD)®</CardTitle>
                      <CardText>Covers Web Application Project Lifecycle, Architectures (Example Microservices), SQL verus NoSQL databases, Web Services, etc.,</CardText>
                      <NavLink to='/certifications/3/2'>
                         <div className='btn btn-primary'>Learn More</div>
                      </NavLink>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                  <Card className="mb-2">
                  <CardImage className="img-fluid" src={CLMDpic} />
                    <CardBody>
                      <CardTitle className='grey-text'>Certified Leader in Mobile Development (CLMD)®</CardTitle>
                      <CardText>Covers Overview of Native Applications for iOS and Android Platforms, Overview of Hybrid applications, DatabasesCritical, etc.,</CardText>
                      <NavLink to='/certifications/3/3'>
                         <div className='btn btn-primary'>Learn More</div>
                      </NavLink>
                    </CardBody>
                  </Card>
                </Col>
              </CarouselItem>
              <CarouselItem itemId="4">
                <Col md="4">
                  <Card className="mb-2">
                  <CardImage className="img-fluid" src={CAAIpic} />
                    <CardBody>
                      <CardTitle className='grey-text'>Certified Associate in AI (CAAI)®</CardTitle>
                      <CardText>Covers Artificial Intelligence, Reinforcement Learning, Logic Programming, Artificial Neural Networks, etc.,</CardText>
                      <NavLink to='/certifications/1/4'>
                         <div className='btn btn-primary'>Learn More</div>
                      </NavLink>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                  <Card className="mb-2">
                  <CardImage className="img-fluid" src={CAIoTpic} />
                    <CardBody>
                      <CardTitle className='grey-text'>Certified Associate in IoT (CAIoT)®</CardTitle>
                      <CardText>Covers Internet of Things, Sensing devices, Communication and Information Theory, Internet protocols, etc.,</CardText>
                      <NavLink to='/certifications/1/4'>
                         <div className='btn btn-primary'>Learn More</div>
                      </NavLink>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                  <Card className="mb-2">
                  <CardImage className="img-fluid" src={CABCpic} />
                    <CardBody>
                      <CardTitle className='grey-text'>Certified Associate in Blockchain (CABC)®</CardTitle>
                      <CardText className='grey-text'>Covers Distributed Systems, CAP Theorm, Decentralization, Cryptography Foundations, etc.,</CardText>
                      <NavLink to='/certifications/1/4'>
                         <div className='btn btn-primary'>Learn More</div>
                      </NavLink>
                    </CardBody>
                  </Card>
                </Col>
              </CarouselItem>
              <CarouselItem itemId="5">
                <Col md="4">
                  <Card className="mb-2">
                  <CardImage className="img-fluid" src={CABDpic} />
                    <CardBody>
                      <CardTitle className='grey-text'>Certified Associate in Big Data Technologies (CABDT)®</CardTitle>
                      <CardText>Covers Distributed Storage, Distributed Processing, NoSQL, Message brokers, Distributed File Systems, etc.,</CardText>
                      <NavLink to='/certifications/1/4'>
                         <div className='btn btn-primary'>Learn More</div>
                      </NavLink>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                  <Card className="mb-2">
                  <CardImage className="img-fluid" src={CABDpic} />
                    <CardBody>
                      <CardTitle className='grey-text'>Certified Associate in Cyber Security (CACS)®</CardTitle>
                      <CardText>Covers Identity and access controls, fault tolerance, encryption, public key Infrastructure etc.,</CardText>
                      <NavLink to='/certifications/1/4'>
                         <div className='btn btn-primary'>Learn More</div>
                      </NavLink>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                  <Card className="mb-2">
                  <CardImage className="img-fluid" src={CABCpic} />
                    <CardBody>
                      <CardTitle className='grey-text'>Certified Associate in Blockchain (CABC)®</CardTitle>
                      <CardText className='grey-text'>Covers Distributed Systems, CAP Theorm, Decentralization, Cryptography Foundations, etc.,</CardText>
                      <NavLink to='/certifications/1/4'>
                         <div className='btn btn-primary'>Learn More</div>
                      </NavLink>
                    </CardBody>
                  </Card>
                </Col>
              </CarouselItem>
            </Row>
          </CarouselInner>
        </Carousel>
      </Container>      
                            
        </Row>

        


      </div>
    );
  }
}

export default HomePage;
