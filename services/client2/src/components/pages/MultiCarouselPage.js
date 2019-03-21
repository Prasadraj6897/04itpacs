import React, { Component } from 'react';
import { Carousel, CarouselControl, CarouselInner, CarouselItem, CarouselIndicators, CarouselIndicator, Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText, NavLink } from 'mdbreact';

import CADSpic from './img/CADSpic.svg'
import CAWDpic from './img/CAWDpic.svg'
import CAMDpic from './img/CAMDpic.svg'

import CPDSpic from './img/CPDSpic.svg'
import CPWDpic from './img/CPWDpic.svg'
import CPMDpic from './img/CPMDpic.svg'

import CLDSpic from './img/CLDSpic.svg'
import CLWDpic from './img/CLWDpic.svg'
import CLMDpic from './img/CLMDpic.svg'

import CAAIpic from './img/CAAIpic.svg'
import CAIoTpic from './img/CAIoTpic.svg'
import CABCpic from './img/CABCpic.svg'
import CABDpic from './img/CABDpic.svg'

class MultiCarouselPage extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      maxLength: 5
    };
  }

  next() {
    let nextItem = this.state.activeItem + 1;
    if(nextItem > this.state.maxLength) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev() {
    let prevItem = this.state.activeItem - 1;
    if(prevItem < 1) {
      this.setState({ activeItem: this.state.maxLength });
    } else {
      this.setState({ activeItem: prevItem });
    }
  }

  goToIndex(item) {
    if (this.state.activeItem !== item) {
      this.setState({
        activeItem: item
      });
    }
  }

  render(){
    const { activeItem } = this.state;
    return(
      <Container>
        <h4 className="mt-5 mb-2">Certifications</h4>
        <Carousel 
          multiItem
          activeItem={this.state.activeItem}
          next={this.next}>
          <div className="controls-top">
          
            <CarouselControl iconLeft className="btn-floating btn-small" direction="prev" role="button" onClick={() => { this.prev(); }} />
            <CarouselControl iconRight className="btn-floating btn-small" direction="next" role="button" onClick={() => { this.next(); }} />
          </div>
       

          <CarouselIndicators>
            <CarouselIndicator active={activeItem === 1 ? true : false} onClick={() => { this.goToIndex(1); }}></CarouselIndicator>
            <CarouselIndicator active={activeItem === 2 ? true : false} onClick={() => { this.goToIndex(2); }}></CarouselIndicator>
            <CarouselIndicator active={activeItem === 3 ? true : false} onClick={() => { this.goToIndex(3); }}></CarouselIndicator>
            <CarouselIndicator active={activeItem === 4 ? true : false} onClick={() => { this.goToIndex(4); }}></CarouselIndicator>
            <CarouselIndicator active={activeItem === 5 ? true : false} onClick={() => { this.goToIndex(5); }}></CarouselIndicator>
          </CarouselIndicators>

          <CarouselInner>
            <Row className='mt-5'>
              
              <CarouselItem itemId="1">
                <Row>
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
                </Row>
              </CarouselItem>

              <CarouselItem itemId="2">
              <Row>
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
                </Row>
              </CarouselItem>

              <CarouselItem itemId="3">
              <Row>
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
                </Row>
              </CarouselItem>

              <CarouselItem itemId="4">
              <Row>
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
                </Row>
              </CarouselItem>

              <CarouselItem itemId="5">
              <Row>
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
                <Col md="4">
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
                
                </Row>
              </CarouselItem>

            </Row>
          </CarouselInner>
 
        </Carousel>
      </Container>
    );
  }
}

export default MultiCarouselPage;
                        