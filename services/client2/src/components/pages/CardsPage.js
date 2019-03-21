import React from 'react';
import {Card, CardBody, CardImage, CardTitle, CardText, NavLink } from 'mdbreact';


import CAAIpic from './img/CAAIpic.svg'
import CAIoTpic from './img/CAIoTpic.svg'
import CABDpic from './img/CABDpic.svg'

const CardsPage = (props) => {
  return(
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-4">
          <Card cascade>
            <CardImage className="img-fluid" src={CAAIpic} />
            <CardBody>
              <CardTitle>Associate</CardTitle>
              
              <CardText>Associate Certifications are for those with less than 1 year experience in a specific field. Associate level certifications are ideal for those who have gone through training and are looking for proof to demonstrate their skills.</CardText>
              <NavLink to='/certifications/1/1'>
                <div className='btn btn-primary'>Learn More</div>
              </NavLink>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-4">
          <Card cascade>
          <CardImage className="img-fluid" src={CAIoTpic} />
            <CardBody>
              <CardTitle>Professional</CardTitle>
              
              <CardText>Professional Certifications are for those with more than 2 years of experience in the specific technology. Candidates are required to provide proof of significant technical contributions on projects as part of the eligibility.</CardText>
              <NavLink to='/certifications/2/1'>
                <div className='btn btn-primary'>Learn More</div>
              </NavLink>
            </CardBody>
          </Card>
        </div>
          <div className="col-md-4">
          <Card cascade>
            <CardImage className="img-fluid" src={CABDpic} />
            <CardBody>
              <CardTitle>Leader</CardTitle>
             
              <CardText>Leader Certifications are for those who are responsible for leadership and management of technical projects. Candidates are expected to demonstrate high-level knowledge of the technical elements in a project. .</CardText>
              <NavLink to='/certifications/3/1'>
                <div className='btn btn-primary'>Learn More</div>
              </NavLink>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
