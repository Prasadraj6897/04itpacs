import React from 'react'
import { Badge, ListGroup, ListGroupItem, CardBody, Card, CardImage, CardTitle, CardText,Fa } from 'mdbreact';
import DATA_ACQUSITIONpic from '../img/DATA_ACQUSITION.svg'

import FOUNDATION_BIGDATApic from '../img/FOUNDATION_BIGDATA.svg'
import DATA_MUNGINGpic from '../img/DATA_MUNGING.svg'
import DATA_SCIENCE_MACHINE_LEARNING from '../img/DATA_SCIENCE_MACHINE_LEARNING.svg'

import ExamDetails_Administration from '../img/ExamDetails_Administration.svg'
import ExamDetails_TestRetake from '../img/ExamDetails_TestRetake.svg'
import ExamDetails_Maintaining from '../img/ExamDetails_Maintaining.svg'
import Pre_requisites_LeaderSVG from '../img/Pre_requisites_LeaderSVG.svg'

 class CLDS extends React.Component{

 	constructor(props){
 		super(props)
 	}
 	render(){
 		return (
 				<div className='container fluid'>
 					<CardBody>
                          <h4 className="card card-body bg-light text-black">Certified Leader in Data Science (CLDS)®</h4>
                          <p className="px-5 mb-5 pb-3 lead grey-text text-left">The Professional certification is catered to individuals with more than 5 years working experience in the field. The experience has to be in a leadership position. Experience does not have to be hands-on technical at a code level. Applicants are required to have completed the application process prior to taking the exam. </p>
                          
                          <h5 className="font-weight-bold"><i className="fa fa-cogs pink-text fa-2x mr-2"></i>Available Specializations</h5>
                          <h6 className="font-weight-bold pb-1 blue-text">
                            <i className="fa fa-adjust"></i> Data Science</h6>
                          <h6>You can choose one or more specializations from the available exams. Your certificate will reflect the specializations which you have passed</h6>

                    <ListGroup>
                      <ListGroupItem>Data Science Project Lifecycle<Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Challenges in Data Cleaning<Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Challenges in Data Analysis<Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Reading visual charts<Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Challenges in Data Acquisition <Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Machine Learning Basics<Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Linear versus non-linear data<Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Privacy issues<Badge className="ml-2" color='info'>Critical</Badge></ListGroupItem>
                      <ListGroupItem>Ethical issues<Badge className='ml-2' color='info'>Critical</Badge></ListGroupItem>
                      <ListGroupItem>Structured versus unstructured data<Badge className='ml-2' color='info'>Critical</Badge></ListGroupItem>
                      <ListGroupItem>Data lakes<Badge className='ml-2' color="danger">Niche</Badge></ListGroupItem>
                    </ListGroup>
                            
                      </CardBody>
                    
                    <section>
                        <h3 className="py-5 font-weight-bold text-center">Pre-requisites<Fa icon="user" className='ml-3' size='3x' style={{color:'purple'}} /></h3>

                        <p className="px-5 mb-5 pb-3 lead grey-text text-center">Participants are required to complete the exam application process which requires fulfilling certain eligibility criterion.</p>
                        <div className="row pt-2">
                          <div className="col-lg-5 text-center text-lg-left">
                            <img src={Pre_requisites_LeaderSVG} className="img-fluid z-depth-0" alt="itpacs"></img>
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
                                <h5 className="font-weight-bold text-left mb-3 dark-grey-text">Proof of leadership</h5>
                                <p className="grey-text text-left">Participants are required to show proof of leadership for the deliverbles they have managed or led. These deliverables need to be accrued over the last 5 years. The participant does not have to be directly involved in writing code but needs to demonstrate a solid understanding of the architecture.
                                </p>
                            </div>
                            </div>

                            <div className="row pb-3">
                              <div className="col-2 col-md-1">
                                <i className="fa fa-mail-forward fa-lg indigo-text"></i>
                              </div>
                            <div className="col-10">
                                <h5 className="font-weight-bold text-left mb-3 dark-grey-text">References</h5>
                                <p className="grey-text text-left">Four references are required. Two references have to be someone directly or indirectly reporting to the participant. Example, team members. Two references have to be someone that the partipant directly or indirectly reported to. Example, customer, manager.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
          <hr className="mb-5 mt-5 pb-3"></hr>

          <section className="py-4 text-center text-lg-left">
          
            <h3 className="h3 font-weight-bold text-center mb-5 pt-4">Sample Concepts Tested</h3>      
            <p className="text-center mb-5 pb-3">Below is a sample set of concepts tested in the exam. No coding questions in the exam. These concepts depend on the specializations selected and include but not limited to:.</p>
           
            <div className="row">             
                <div className="col-lg-3 col-xl-3 pb-3">                    
                    <div className="view overlay rounded z-depth-2">
                        <img src={FOUNDATION_BIGDATApic} className="img-fluid" alt="itpacs"></img>
                        <a>
                            <div className="mask"></div>
                        </a>
                    </div>
                </div>
                
                <div className="col-lg-9 col-xl-9">                    
                         <h6 className="font-weight-bold pb-1 brown-text">
                          <i className="fa fa-adjust"></i> Data Science</h6>      
                    <h3 className="mb-4 font-weight-bold dark-grey-text">
                        <strong>Foundations/Overview</strong>
                    </h3>
                    <p>Data science is the process of extracting useful information from data which involves building and discovering knowledge about the problem domain in a scientifically rigorous manner</p>
                     <ListGroup>
                        <ListGroupItem active>Leader must have knowledge of: </ListGroupItem>
                        <ListGroupItem hover>Workflows and approaches used in Data Science</ListGroupItem>
                        <ListGroupItem hover>Awareness of processes, methods and common tools involved in Data Science</ListGroupItem>
                        <ListGroupItem hover>Difference between training data and test data</ListGroupItem>
                        <ListGroupItem hover>Characteristics of Big Data</ListGroupItem>
                    </ListGroup>
                </div> 
            </div>

            <hr className="mb-5 mt-5 pb-3"></hr>
           
            <div className="row">           
                <div className="col-lg-9 col-xl-9 pb-3">                   
                       <h6 className="font-weight-bold pb-1 blue-text">
                        <i className="fa fa-adjust"></i> Data Science</h6>
                        <h3 className="mb-4 font-weight-bold dark-grey-text">
                          <strong>Data Acquisition</strong>
                      </h3>
                    <p>Finding or identifying or sometimes, creating the sources of usable data working with various roles in the organization involves many complexities. </p>
                    <ListGroup>
                        <ListGroupItem active>Leader must have knowledge of: </ListGroupItem>
                        <ListGroupItem hover>Processes involved for acquiring data</ListGroupItem>
                        <ListGroupItem hover>Processes for data access</ListGroupItem>
                        <ListGroupItem hover>Differentiating between structured versus unstructured data</ListGroupItem>
                        <ListGroupItem hover>Privacy issues around data collection</ListGroupItem>
                    </ListGroup>

                </div>
             
                <div className="col-lg-3 col-xl-3">                     
                    <div className="view overlay rounded z-depth-2">
                        <img src={DATA_ACQUSITIONpic} className="img-fluid" alt="itpacs"></img>
                        <a>
                            <div className="mask"></div>
                        </a>
                    </div>
                </div>              

            </div>        

            <hr className="mb-5 mt-4 pb-3"></hr>         
            <div className="row pb-5">                
                <div className="col-lg-3 col-xl-3 pb-3 violet-text">                    
                    <div className="view overlay rounded z-depth-2">
                         <img src={DATA_MUNGINGpic} className="img-fluid" alt="itpacs"></img>
                        <a>
                            <div className="mask"></div>
                        </a>
                    </div>
                </div>              
                <div className="col-lg-9 col-xl-9">                   
                      <h6 className="font-weight-bold pb-1 green-text">
                      <i className="fa fa-adjust"></i> Data Science</h6>
                      <h3 className="mb-4 font-weight-bold dark-grey-text">
                        <strong>Data Munging/Data Wrangling</strong>
                      </h3>
                    <p>Data munging creates the foundations for every complex and sophisticated value-added analysis that you may have in mind to obtain. This includes cleaning the data for downstream analysis.</p>
                      <ListGroup>
                        <ListGroupItem active>Leader must have knowledge of: </ListGroupItem>
                        <ListGroupItem hover>Challenges in data munging</ListGroupItem>
                        <ListGroupItem hover>ETL processes</ListGroupItem>
                        <ListGroupItem hover>Dealing with missing data</ListGroupItem>
                        <ListGroupItem hover>Microservices</ListGroupItem>
                    </ListGroup>
                </div>       
            </div>  
            <hr className="mb-5 mt-5 pb-3"></hr>
           
            <div className="row">           
                <div className="col-lg-9 col-xl-9 pb-3">                   
                       <h6 className="font-weight-bold pb-1 blue-text">
                        <i className="fa fa-adjust"></i> Data Science</h6>
                        <h3 className="mb-4 font-weight-bold dark-grey-text">
                          <strong>Machine Learning</strong>
                      </h3>
                    <p>Finding or identifying or sometimes, creating the sources of usable data working with various roles in the organization involves many complexities. </p>
                    <ListGroup>
                        <ListGroupItem active>Professional must have knowledge of: </ListGroupItem>
                        <ListGroupItem hover>Classification and Regression algorithms</ListGroupItem>
                        <ListGroupItem hover>Clustering algorithms</ListGroupItem>
                        <ListGroupItem hover>Rules based versus ML based systems</ListGroupItem>
                        <ListGroupItem hover>Accuracy of models</ListGroupItem>
                    </ListGroup>

                </div>
             
                <div className="col-lg-3 col-xl-3">                     
                    <div className="view overlay rounded z-depth-2">
                        <img src={DATA_SCIENCE_MACHINE_LEARNING} className="img-fluid" alt="itpacs"></img>
                        <a>
                            <div className="mask"></div>
                        </a>
                    </div>
                </div>              

            </div> 
        </section>



        <hr className="between-sections mt-0"></hr>
      
        <section className="pb-3 text-center">            
            <h3 className="font-weight-bold h3 py-5">Exam Details</h3>            
            <p className="section-description">Our exams can be taken online or through paper based. The online exam can be taken from anywhere in the world. The sessions are proctored remotely. </p>

            <div className="row">                
                <div className="col-lg-4 col-md-12 mb-4">                    
                                     
                    <Card reverse>
                      <CardImage className="img-fluid" src={ExamDetails_Administration} />
                      <CardBody>
                        <CardTitle>Administration</CardTitle>
                        
                        <CardText>Leader certifications are for those with more than 5 years experience in a specific field in a managerial or leadership capacity </CardText>
                        <hr className="my-2 grey" />                            
                              <h6>Duration:<Badge color="danger" className='ml-1'>60 minutes</Badge></h6>
                              <h6>Format: <Badge color="danger" className='ml-1'>Online/Paper based</Badge></h6>
                              <h6>No of Questions: <Badge color="danger" className='ml-1'>30. (MCQs, No coding)</Badge></h6>
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
                                improvement to help you prepare better for the next attempt. You can take the leader exam a maximum of 3 
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
                                To maintain your credential, you will need to accumulate 30 Professional Training Units 
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

        

 				</div>
 				)
 	}
 }

export default CLDS

