import React from 'react';
import {CardBody, Card, CardImage, CardTitle, CardText, Container} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import LOGO_WHITE from '../img/LOGO_WHITE.svg'

import Niche_Skillspic2 from '../img/Niche_Skills2.svg'


import TrainingProviders from '../img/TrainingProviders.svg'

import RTP_QualityContent from '../img/RTP_QualityContent.svg'
import RTP_ProfessionalTrainingUnits from '../img/RTP_ProfessionalTrainingUnits.svg'
import RTP_DeliveryFormats from '../img/RTP_DeliveryFormats.svg'
import RTP_LegalEntity from '../img/RTP_LegalEntity.svg'

import CertsAccordian from '../CertsAccordian'


class TrainingProvider extends React.Component {

	constructor(props){
		super(props)
	}

	render(){
		
		return (
				<Router>
					<div>

                        <div className="streak streak-photo mt-0" style={{backgroundImage: "url(" + TrainingProviders + ")" , height:'50vh', maxHeight:'1080px', backgroundColor:'black'}}>
                            <div className="mask flex-center rgba-black-strong">
                                <div className="container">
                                  <br></br>
                                  <img src={LOGO_WHITE} className="img-fluid" alt="itpacs" height='200px' width='300px'/>                    
                                    <div className="row text-white text-left wow fadeIn" data-wow-delay="0.2s"> 
                                        <div className="col-md-8 mb-2">
                                            <div className="white-text">                                  
                                                  <br></br>
                                                   <h1 className="h1-responsive font-weight-bold wow fadeInLeft">Registered Training Provider (R.T.P.)</h1>
                                                   <hr className="my-2 white" />   
                                                </div>                            
                                        </div>
                                       
                                    </div>
                                    <div className="row text-white text-left wow fadeIn" data-wow-delay="0.2s"> 
                                        <div className="col-md-8 mb-2">
                                             <h5>R.T.P.s are companies, institutes, book publishers and organizations approved by ITPacs to provide courses for ITPacs certifications.</h5>
                                        </div>
                                                              
                                    </div>
                                </div>                
                            </div>
                        </div>


					                
        <Container>
        <section>      
            <h1 className="py-5 font-weight-bold text-center">Benefits of the R.T.P. Program</h1>
            <p className="px-5 mb-5 pb-3 lead grey-text text-center">We welcome organizations keen on growing the IT profession through delivery of quality education. By becoming an R.T.P., your organization will gain valuable recognition and credibility.  You will be part of a global network of qualified providers for anyone seeking an ITPacs certification. </p>
           
            <div className="row">               
                <div className="col-md-4">                    
                    <div className="row mb-2">
                        <div className="col-2">
                            <i className="fa fa-2x fa-flag-checkered deep-purple-text"></i>
                        </div>
                        <div className="col-10 text-left">
                            <h5 className="font-weight-bold">Alignment with ITPACS Certification framework</h5>
                            <p className="grey-text">Achieving the R.T.P. status shows prospective students that your organization is aligned with the ITPacs certification framework comprising of Associate, Professional and Leader pathways</p>
                        </div>
                    </div>
                    
                    <div className="row mb-2">
                        <div className="col-2">
                            <i className="fa fa-2x fa-flask deep-purple-text"></i>
                        </div>
                        <div className="col-10 text-left">
                            <h5 className="font-weight-bold">Offer wide range of modular courses</h5>
                            <p className="grey-text">Since each certification has multiple modular specializations, this translates to multiple courses that can be offered under the same certification. Example, Course 1- Certified Associate in Web Development – Databases, Course 2 - Certified Associate in Web Development – API’s</p>
                        </div>
                    </div> 
                    
                    <div className="row mb-2">
                        <div className="col-2">
                            <i className="fa fa-2x fa-glass deep-purple-text"></i>
                        </div>
                        <div className="col-10 text-left">
                            <h5 className="font-weight-bold">R.T.P Portal for administration</h5>
                            <p className="grey-text">You can track progress of your students along with being able to order exams, monitor training units, enroll students for the exams etc.,</p>
                        </div>
                    </div>                    

                </div>
                
                <div className="col-md-4 mb-2 center-on-small-only flex-center">
                    <img src={Niche_Skillspic2} alt="itpacs" className="z-depth-0" ></img>

                </div>
                
                <div className="col-md-4">                    
                    <div className="row mb-2">
                        <div className="col-2">
                            <i className="fa fa-2x fa-heart deep-purple-text"></i>
                        </div>
                        <div className="col-10 text-left">
                            <h5 className="font-weight-bold">Discounts on exam fees </h5>
                            <p className="grey-text">R.T.Ps get standard 30% discount on the published exam fees.  If a student purchases the exam separately through ITPacs paying the full price, the corresponding R.T.P will receive the 30% provided the student indicates the name of the R.T.P at the point of taking the exam. </p>
                        </div>
                    </div>
                    
                    <div className="row mb-2">
                        <div className="col-2">
                            <i className="fa fa-2x fa-flash deep-purple-text"></i>
                        </div>
                        <div className="col-10 text-left">
                            <h5 className="font-weight-bold">Marketing Support</h5>
                            <p className="grey-text">We provide you with collateral and material for marketing your courses. In addition, we also provide you with leads for students looking for courses in your area or region. </p>
                        </div>
                    </div>
                    
                    <div className="row mb-2">
                        <div className="col-2">
                            <i className="fa fa-2x fa-magic deep-purple-text"></i>
                        </div>
                        <div className="col-10 text-left">
                            <h5 className="font-weight-bold">Performance Feedback</h5>
                            <p className="grey-text">We strive hard to ensure that test takers are exposed to high quality courses that add value to their skills. As such, we take a discerning approach to the evaluation and approval of R.T.P applications. To qualify as an R.T.P, your organization must meet the below eligibility criterion.</p>
                        </div>
                    </div>               
                </div>               
            </div>
        </section>
	</Container>
					        
	<Container>
	<section className="wow fadeIn">

    <h2 className="py-5 font-weight-bold text-center">How to become an R.T.P</h2>
    <p className="px-5 mb-5 pb-3 lead grey-text text-center">ITPACS invites all organizations or individuals interested in becoming an 
    approved training provider to submit an application. We have an open and on-going application process. ITPACS will review the application and make a 
    determination for an agreement.</p>
    <div className="row d-flex justify-content-center">

        <div className="col-md-3">                    
                                     
                    <Card>
                      <CardImage className="img-fluid" src={RTP_LegalEntity} />
                      <CardBody>
                        <CardTitle>Legal Entity</CardTitle>
                        <hr className="my-2 grey" />  
                        <CardText>You must be a legal entity registered as an education provider, business or a non-profit. Proof of registration with a relevant legal or government body is required as part of the application. </CardText>
                        <br></br>
                        <br></br>
                      </CardBody>
                    </Card>           
                </div>
      

      
              <div className="col-md-3">                    
                                     
                    <Card>
                      <CardImage className="img-fluid" src={RTP_QualityContent} />
                      <CardBody>
                        <CardTitle>Quality Content</CardTitle>
                        <hr className="my-2 grey" />  
                        <CardText>Your content must be of high quality in relation to the specialization. 4 Industry experts will review content as part of the approval process. At least 3 experts need to provide favorable ranking. </CardText>
                        <br></br>
                        
                      </CardBody>
                    </Card>           
                </div>

              <div className="col-md-3">                    
                                     
                    <Card>
                      <CardImage className="img-fluid" src={RTP_DeliveryFormats} />
                      <CardBody>
                        <CardTitle>Delivery Formats</CardTitle>
                        <hr className="my-2 grey" />  
                        <CardText>Training can be in one or more of the following formats: Classroom training, E-Learning, Webinars, Seminars, Guided study through R.T.P Books.</CardText>
                        <br></br>
                        <br></br>
                        
                      </CardBody>
                    </Card>           
                </div>

              <div className="col-md-3">                    
                                     
                    <Card>
                      <CardImage className="img-fluid" src={RTP_ProfessionalTrainingUnits} />
                      <CardBody>
                        <CardTitle>Professional Training Units</CardTitle>
                        <hr className="my-2 grey" />  
                        <CardText>Your organization should be able to award Professional Training Units (P.T.U.s) for students who have completed a course. 1 P.T.U equals 1 training hour. This can be a course completion certificate.</CardText>
                        
                      </CardBody>
                    </Card>           
                </div>
            </div>
            </section>
            </Container>

                <Container>
  				<CertsAccordian />
                </Container>
	
						
					</div>
				</Router>


				)
	}
}

export default TrainingProvider