import React from 'react'

import { Badge, ListGroup, ListGroupItem, CardBody, Card, CardImage, CardTitle, CardText,Fa } from 'mdbreact';
import CAAIpic from '../img/CAAIpic.svg'
import CAIoTpic from '../img/CAIoTpic.svg'
import CABCpic from '../img/CABCpic.svg'
import CABDpic from '../img/CABDpic.svg'

import ExamDetails_Administration from '../img/ExamDetails_Administration.svg'
import ExamDetails_TestRetake from '../img/ExamDetails_TestRetake.svg'
import ExamDetails_Maintaining from '../img/ExamDetails_Maintaining.svg'

import EMERGING_CERTIFIED_ASSOCIATE_CYBER_SECURITY from '../img/EMERGING_CERTIFIED_ASSOCIATE_CYBER_SECURITY.svg'


class EmergingCerts extends React.Component {

	constructor(props){
		super(props)
	}

	render(){
		return (
			<section className="section magazine-section">           
		            <h2 className="h1 text-center my-5">Emerging Technologies</h2>
		            <p className="px-5 mb-5 pb-3 lead grey-text text-left">We offer associate level certifications for emerging technologies. Participants with less than 1 year working experience in these fields can apply. Participants will need to complete the exam application process prior to taking the exam. Gone are the days where you needed to have a degree in computer science to be able to have a career in Information Technology. New skills are emerging at a rapid pace wherein any long drawn university computer science program falls severly short in keeping up. Information is now widely available and with enough dedication, anyone can enter into the field.  </p>	                    

		            <div className="row text-left">		                

		                
		                <div className="col-lg-12 col-md-12">
		                    <div className="single-news">
		                        <div className="row">
		                            <div className="col-md-3">
		                                <div className="view overlay rounded z-depth-1">
		                                    <img src={CAAIpic} className="img-fluid" alt="itpacs"></img>
		                                    <a>
		                                        <div className="mask"></div>
		                                    </a>

		                                </div>
		                            </div>

		                            <div className="col-md-9 mb-4">
		                                <CardBody>
		                                    <h4 className="card card-body bg-light text-black">Certified Associate in Artificial Intelligence (CAAI)®</h4>
					                          <p className="px-5 mb-5 pb-3 lead grey-text text-left">The Associate certification is catered to individuals with less than 1 year working experience in the field. This is ideal for newcomers starting out in the profession or those seeking to make an entry into the profession. Applicants are required to have completed the application process prior to taking the exam. </p>
					                          
					                          <h5 className="font-weight-bold"><i className="fa fa-cogs pink-text fa-2x mr-2"></i>Available Specializations</h5>
					                          <h6 className="font-weight-bold pb-1 blue-text">
					                            <i className="fa fa-adjust"></i> Artificial Intelligence</h6>
					                          <h6>You can choose one or more specializations from the available exams. Your certificate will reflect the specializations which you have passed. This certification is ideal for anyone working with artificial neural networks including deep learning.  </h6>
		                                
		                                 </CardBody>
		                                <p className="grey-text">
		                                    
		                                </p>
		                                <ListGroup>
		                                	 <ListGroupItem>Reinforcement Learning</ListGroupItem>
		                                	 <ListGroupItem>Classifiers and regressors</ListGroupItem>
		                                	 <ListGroupItem>Ensemble Learning</ListGroupItem>
		                                	 <ListGroupItem>Detecting Patterns with Unsupervised Learning</ListGroupItem>
		                                	 <ListGroupItem>Building Recommender Systems</ListGroupItem>
		                                	 <ListGroupItem>Logic Programming</ListGroupItem>
		                                	 <ListGroupItem>Heuristic Search Techniques</ListGroupItem>
		                                	 <ListGroupItem>Natural Language Processing</ListGroupItem>
		                                	 <ListGroupItem>Building A Speech Recognizer</ListGroupItem>
		                                	 <ListGroupItem>Object Detection and Tracking</ListGroupItem>
						                     <ListGroupItem>Artificial Neural Networks</ListGroupItem>
						                     <ListGroupItem>Deep Learning with Convolutional Neural Networks</ListGroupItem>
						                    </ListGroup>

		                            </div>               
		                        </div>
		                    </div>
		                    

		                    
		                    <div className="single-news mt-3">
		                        <div className="row">
		                            <div className="col-md-3">
		                                <div className="view overlay rounded z-depth-1">
		                                    <img src={CAIoTpic} className="img-fluid" alt="itpacs"></img>
		                                    <a>
		                                        <div className="mask"></div>

		                                    </a>
		                                </div>
		                            </div>
		                            
		                            <div className="col-md-9 mb-3">
		                            	 
		                                <CardBody>
		                                    <h4 className="card card-body bg-light text-black">Certified Associate in Internet of Things (CAIoT)®</h4>
					                          <p className="px-5 mb-5 pb-3 lead grey-text text-left">The Associate certification is catered to individuals with less than 1 year working experience in the field. This is ideal for newcomers starting out in the profession or those seeking to make an entry into the profession. Applicants are required to have completed the application process prior to taking the exam. </p>
					                          
					                          <h5 className="font-weight-bold"><i className="fa fa-cogs pink-text fa-2x mr-2"></i>Available Specializations</h5>
					                          <h6 className="font-weight-bold pb-1 blue-text">
					                            <i className="fa fa-adjust"></i> Internet of Things</h6>
					                          <h6>You can choose one or more specializations from the available exams. Your certificate will reflect the specializations which you have passed. </h6>
		                                
		                                 </CardBody>
		                                <p className="grey-text">
		                                    
		                                </p>
		                                <ListGroup>
		                                	 <ListGroupItem>Sensing devices</ListGroupItem>
		                                	 <ListGroupItem>Inputs and End Points</ListGroupItem>
		                                	 <ListGroupItem>Communication and Information Theory</ListGroupItem>
		                                	 <ListGroupItem>Internet protocol and transmission control protocol</ListGroupItem>
		                                	 <ListGroupItem>Long-Range Communication Systems and Protocols (WAN)</ListGroupItem>
		                                	 <ListGroupItem>Routers and Gateways</ListGroupItem>
		                                	 <ListGroupItem>Cloud Protocols and Architectures</ListGroupItem>
		                                	 <ListGroupItem>Fog Topologies</ListGroupItem>
		                                	 <ListGroupItem>IoT Security</ListGroupItem>
		                                	 <ListGroupItem>Hardware virtualization</ListGroupItem>
						                     
						                    </ListGroup>

		                            </div>
		                            
		                        </div>

		                    </div>
		                    

		                    
		                    <div className="single-news">
		                        <div className="row">
		                            <div className="col-md-3">
		                                <div className="view overlay rounded z-depth-1">
		                                    <img src={CABCpic} className="img-fluid" alt="itpacs"></img>
		                                    <a>
		                                        <div className="mask"></div>

		                                    </a>
		                                </div>
		                            </div>
                            
		                            <div className="col-md-9 mb-4">
		                                <CardBody>
		                                    <h4 className="card card-body bg-light text-black">Certified Associate in Blockchain (CABC)®</h4>
					                          <p className="px-5 mb-5 pb-3 lead grey-text text-left">The Associate certification is catered to individuals with less than 1 year working experience in the field. This is ideal for newcomers starting out in the profession or those seeking to make an entry into the profession. Applicants are required to have completed the application process prior to taking the exam. </p>
					                          
					                          <h5 className="font-weight-bold"><i className="fa fa-cogs pink-text fa-2x mr-2"></i>Available Specializations</h5>
					                          <h6 className="font-weight-bold pb-1 blue-text">
					                            <i className="fa fa-adjust"></i> Blockchain</h6>
					                          <h6>You can choose one or more specializations from the available exams. Your certificate will reflect the specializations which you have passed.  </h6>
		                                
		                                 </CardBody>
		                                <p className="grey-text">
		                                    
		                                </p>
		                                <ListGroup>
		                                	 <ListGroupItem>Distributed Systems</ListGroupItem>
		                                	 <ListGroupItem>CAP Theorm</ListGroupItem>
		                                	 <ListGroupItem>Decentralization</ListGroupItem>
		                                	 <ListGroupItem>Cryptography and Technical Foundations</ListGroupItem>
		                                	 <ListGroupItem>Mining</ListGroupItem>
		                                	 <ListGroupItem>Hash Functions</ListGroupItem>
		                                	 <ListGroupItem>Smart Contracts</ListGroupItem>
		                                	 <ListGroupItem>Hyperledger</ListGroupItem>
		                                	 <ListGroupItem>Application-specific blockchains (ASBCs)</ListGroupItem>
		                                	 
						                    </ListGroup>

		                            </div> 
		                        </div>
		                    </div>
		                    
		                    <div className="single-news">
		                        <div className="row">
		                            <div className="col-md-3">
		                                <div className="view overlay rounded z-depth-1">
		                                    <img src={CABDpic} className="img-fluid" alt="itpacs"></img>
		                                    <a>
		                                        <div className="mask"></div>

		                                    </a>
		                                </div>
		                            </div>

		                            
		                            <div className="col-md-9 mb-4">
		                                <CardBody>
		                                    <h4 className="card card-body bg-light text-black">Certified Associate in Big Data Technologies (CABDT)®</h4>
					                          <p className="px-5 mb-5 pb-3 lead grey-text text-left">The Associate certification is catered to individuals with less than 1 year working experience in the field. This is ideal for newcomers starting out in the profession or those seeking to make an entry into the profession. Applicants are required to have completed the application process prior to taking the exam. </p>
					                          
					                          <h5 className="font-weight-bold"><i className="fa fa-cogs pink-text fa-2x mr-2"></i>Available Specializations</h5>
					                          <h6 className="font-weight-bold pb-1 blue-text">
					                            <i className="fa fa-adjust"></i> Big Data Technologies</h6>
					                          <h6>You can choose one or more specializations from the available exams. Your certificate will reflect the specializations which you have passed. </h6>
		                                
		                                 </CardBody>
		                                <p className="grey-text">
		                                    
		                                </p>
		                                <ListGroup>
		                                	 <ListGroupItem>Distributed Storage</ListGroupItem>
		                                	 <ListGroupItem>Distributed Processing</ListGroupItem>
		                                	 <ListGroupItem>NoSQL</ListGroupItem>
		                                	 <ListGroupItem>Message brokers</ListGroupItem>
		                                	 <ListGroupItem>Distributed File Systems</ListGroupItem>
		                                	 <ListGroupItem>Data Lake</ListGroupItem>
		                                	 <ListGroupItem>Lambda Architecture</ListGroupItem>
		                                	 <ListGroupItem>Privacy</ListGroupItem>
		                                	 		                                	 
						                    </ListGroup>

		                            </div>
		                        </div>
		                    </div>

		                    <div className="single-news">
		                        <div className="row">
		                            <div className="col-md-3">
		                                <div className="view overlay rounded z-depth-1">
		                                    <img src={EMERGING_CERTIFIED_ASSOCIATE_CYBER_SECURITY} className="img-fluid" alt="itpacs"></img>
		                                    <a>
		                                        <div className="mask"></div>

		                                    </a>
		                                </div>
		                            </div>

		                            
		                            <div className="col-md-9 mb-4">
		                                <CardBody>
		                                    <h4 className="card card-body bg-light text-black">Certified Associate in Cyber Security (CACS)®</h4>
					                          <p className="px-5 mb-5 pb-3 lead grey-text text-left">The Associate certification is catered to individuals with less than 1 year working experience in the field. This is ideal for newcomers starting out in the profession or those seeking to make an entry into the profession. Applicants are required to have completed the application process prior to taking the exam. </p>
					                          
					                          <h5 className="font-weight-bold"><i className="fa fa-cogs pink-text fa-2x mr-2"></i>Available Specializations</h5>
					                          <h6 className="font-weight-bold pb-1 blue-text">
					                            <i className="fa fa-adjust"></i> Cyber Security</h6>
					                          <h6>You can choose one or more specializations from the available exams. Your certificate will reflect the specializations which you have passed. </h6>
		                                
		                                 </CardBody>
		                                <p className="grey-text">
		                                    
		                                </p>
		                                <ListGroup>
		                                	 <ListGroupItem>Fault Tolerance and Resilience in Cloud</ListGroupItem>
		                                	 <ListGroupItem>Data Encryption</ListGroupItem>
		                                	 <ListGroupItem>Public Key Infrastructure</ListGroupItem>
		                                	 <ListGroupItem>Physical Security Essentials</ListGroupItem>
		                                	 <ListGroupItem>Disaster Recovery</ListGroupItem>
		                                	 <ListGroupItem>Biometrics</ListGroupItem>
		                                	 <ListGroupItem>System Security</ListGroupItem>
		                                	 <ListGroupItem>Access Controls</ListGroupItem>
		                                	 <ListGroupItem>Attacks and Countermeasures</ListGroupItem>

		                                	 		                                	 
						                    </ListGroup>

		                            </div>
		                        </div>
		                    </div>


		                </div>
		            </div> 

		            <section>
                        <h3 className="py-5 font-weight-bold text-center">Pre-requisites<Fa icon="user" className='ml-3' size='3x' style={{color:'purple'}} /></h3>

                        <p className="px-5 mb-5 pb-3 lead grey-text text-center">Participants are required to complete the exam application process which requires fulfilling certain eligibility criterion.</p>
                        <div className="row pt-2">
                          <div className="col-lg-5 text-center text-lg-left">
                            <img src={ExamDetails_Maintaining} alt="itpacs" className="img-fluid z-depth-0"></img>
                          </div>
                          <div className="col-lg-7">
                            <div className="row pb-3">
                              <div className="col-2 col-md-1">
                                <i className="fa fa-mail-forward fa-lg indigo-text 5x"></i>
                              </div>
                            <div className="col-10">
                                <h5 className="font-weight-bold text-left mb-3 dark-grey-text">Education</h5>
                                <p className="grey-text text-left">Minimum 8 hours of education for every specialization. Example, if a participant selects two specializations, the required education is 16 hours
                                Education could be through learning institutes, boot camps, college, e-learning. Proof of learning is required to be submitted as part of the application. 
                                </p>
                            </div>
                            </div>

                            <div className="row pb-3">
                              <div className="col-2 col-md-1">
                                <i className="fa fa-mail-forward fa-lg indigo-text"></i>
                              </div>
                            <div className="col-10">
                                <h5 className="font-weight-bold text-left mb-3 dark-grey-text">Coding</h5>
                                <p className="grey-text text-left">Between 100-500 lines of source code demonstrating the concept selected for specialization. Source code needs to be original and will be put through code review. 
                                </p>
                            </div>
                            </div>

                            <div className="row pb-3">
                              <div className="col-2 col-md-1">
                                <i className="fa fa-mail-forward fa-lg indigo-text"></i>
                              </div>
                            <div className="col-10">
                                <h5 className="font-weight-bold text-left mb-3 dark-grey-text">References</h5>
                                <p className="grey-text text-left">Two references are required. References can be anyone with knowledge of skills of the participant. Example, peers, trainers, customers, managers. 
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>

		            <hr className="mb-5 mt-5 pb-3"></hr> 

        <section className="pb-3 text-center">            
            <h3 className="font-weight-bold h3 py-5">Exam Details</h3>            
            <p className="section-description">Our exams can be taken online or through paper based. The online exam can be taken from anywhere in the world. The sessions are proctored remotely. </p>

            <div className="row">                
                <div className="col-lg-4 col-md-12 mb-4">                    
                                     
                    <Card reverse>
                      <CardImage className="img-fluid" src={ExamDetails_Administration} />
                      <CardBody>
                        <CardTitle>Administration</CardTitle>
                        
                        <CardText>Associate certifications are for those with less than 1 year experience in a specific field. </CardText>
                        <hr className="my-2 grey" />                            
                              <h6>Duration:<Badge color="danger" className='ml-1'>60 minutes</Badge></h6>
                              <h6>Format: <Badge color="danger" className='ml-1'>Online/Paper based</Badge></h6>
                              <h6>No of Questions: <Badge color="danger" className='ml-1'>30. (MCQs, Code)</Badge></h6>
                              <h6>Passing Score: <Badge color="danger" className='ml-1'>65%</Badge></h6>
                              <h6>Result: <Badge color="danger" className='ml-1'>Immediate for online</Badge></h6>
                          
                        
                      </CardBody>
                    </Card>           
                </div>
                
                <div className="col-lg-4 col-md-12 mb-4">                    
                      <Card reverse>
                          <CardImage className="img-fluid" src={ExamDetails_TestRetake} />
                            <CardBody>
                              <CardTitle>Test Re-take</CardTitle>
                              
                              <CardText>
                                In case you fail the exam, you will be provided with a report highlighting areas for 
                                improvement to help you prepare better for the next attempt. You can take the Associate exam a maximum of 3 
                                times in a year. Re-take fees apply.
                              </CardText>
                              <hr className="my-2 grey" />  
                              <h6>Attempts:<Badge color="default" className='ml-1'>3 attempts in a year</Badge></h6>
                              <h6>Waiting time:<Badge color="default" className='ml-1'>1 week between attempts</Badge></h6>     
                              <br></br>
                              <br></br>
                        </CardBody>
                    </Card>
                </div>
                
                <div className="col-lg-4 col-md-12 mb-4">                    
                  <Card reverse>
                          <CardImage className="img-fluid" src={ExamDetails_Maintaining} />
                            <CardBody>
                              <CardTitle>Maintaining</CardTitle>
                              
                              <CardText className="dark-grey-text">
                                To maintain your credential, you will need to accumulate 60 Professional Training Units 
                                (1 PTU = 1 hr of training) over 2 years. Training can be through classroom sessions, e-learning, web learning etc.
                              </CardText>
                              <hr className="my-2 grey" />                            
                              <h6>Accrue PTUs:<Badge color="success" className='ml-1'>30</Badge></h6>
                              <h6>Renew:<Badge color="success" className='ml-1'>Every 2 years</Badge></h6>
                              <h6>Professional Training Unit:<Badge color="success" className='ml-1'>1 P.T.U = 1 Hour training</Badge></h6>     
                          
                        </CardBody>
                    </Card>
                </div>             
            </div>
        </section>

        <hr className="mb-5 mt-4 pb-3"></hr> 

        	</section>

				)
	}
}

export default EmergingCerts