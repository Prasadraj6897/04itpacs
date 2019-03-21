import React from 'react'
import { Badge, ListGroup, ListGroupItem, CardBody, Card, CardImage, CardTitle, CardText,Fa } from 'mdbreact';
import ModalPage from '../ModalPage'

import ExamDetails_Administration from '../img/ExamDetails_Administration.svg'
import ExamDetails_TestRetake from '../img/ExamDetails_TestRetake.svg'
import ExamDetails_Maintaining from '../img/ExamDetails_Maintaining.svg'

import WEB_DEV_APPLICATION_PROGRAMMING_INTERFACES from '../img/WEB_DEV_APPLICATION_PROGRAMMING_INTERFACES.svg'
import WEB_DEV_COMMUMICATION_OVER_WEB from '../img/WEB_DEV_COMMUMICATION_OVER_WEB.svg'
import WEB_DEV_CONTEXT from '../img/WEB_DEV_CONTEXT.svg'
import WEB_DEV_DATA_BASE from '../img/WEB_DEV_DATA_BASE.svg'
import WEB_DEV_DOCUMENT_OBJECT_MODEL from '../img/WEB_DEV_DOCUMENT_OBJECT_MODEL.svg'

import Pre_requisites_ProfessionalSVG from '../img/Pre_requisites_ProfessionalSVG.svg'

 class CPWD extends React.Component{

 	constructor(props){
 		super(props)
 	}
 	render(){
 		return (
 				<div className='container fluid'>
 					<CardBody>
                          <h4 className="card card-body bg-light text-black">Certified Professional in Web Development (CPWD)®</h4>
                          <p className="px-5 mb-5 pb-3 lead grey-text text-left">The Professional certification is catered to individuals with more than 2 years working experience in the field. This is ideal for people already working in the field looking to obtain certification. Applicants are required to have completed the application process prior to taking the exam. </p>
                          
                          <h5 className="font-weight-bold"><i className="fa fa-cogs pink-text fa-2x mr-2"></i>Available Specializations</h5>
                          <h6 className="font-weight-bold pb-1 blue-text">
                            <i className="fa fa-adjust"></i> Web Development</h6>
                          <h6>You can choose one or more specializations from the available exams. Your certificate will reflect the specializations which you have passed </h6>

                    <ListGroup>
                      <ListGroupItem>Programming Language<Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Document Object Model<Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Styling<Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Request-Response cycle<Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Application Structure (Example MVC) <Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Templates<Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Forms<Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Databases<Badge className="ml-2" color='info'>Critical</Badge></ListGroupItem>
                      <ListGroupItem>Application Programming Interfaces<Badge className='ml-2' color='info'>Critical</Badge></ListGroupItem>
                      <ListGroupItem>Microservices<Badge className='ml-2' color='info'>Critical</Badge></ListGroupItem>
                      <ListGroupItem>RESTful Web Services<Badge className='ml-2' color='danger'>Niche</Badge></ListGroupItem>
                      <ListGroupItem>Containers<Badge className='ml-2' color="danger">Niche</Badge></ListGroupItem>
                      <ListGroupItem>Front-end frameworks<Badge className='ml-2' color="danger">Niche</Badge></ListGroupItem>
                    </ListGroup>
                            
                      </CardBody>
                    
                    <section>
                        <h3 className="py-5 font-weight-bold text-center">Pre-requisites<Fa icon="user" className='ml-3' size='3x' style={{color:'purple'}} /></h3>

                        <p className="px-5 mb-5 pb-3 lead grey-text text-center">Participants are required to complete the exam application process which requires fulfilling certain eligibility criterion.</p>
                        <div className="row pt-2">
                          <div className="col-lg-5 text-center text-lg-left">
                            <img src={Pre_requisites_ProfessionalSVG} alt="itpacs" className="img-fluid z-depth-0"></img>
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
                                <h5 className="font-weight-bold text-left mb-3 dark-grey-text">Proof of concept</h5>
                                <p className="grey-text text-left">Participants are required to show proof of concepts for the deliverbles they have completed. These deliverables need to be accrued over the last 2 years. For team deliverables, the participant needs to demonstrate more than 60% contribution. 
                                </p>
                            </div>
                            </div>

                            <div className="row pb-3">
                              <div className="col-2 col-md-1">
                                <i className="fa fa-mail-forward fa-lg indigo-text"></i>
                              </div>
                            <div className="col-10">
                                <h5 className="font-weight-bold text-left mb-3 dark-grey-text">References</h5>
                                <p className="grey-text text-left">Two references are required. References have to be someone directly involved with the work performed by the participant. Example, customer, manager, team member etc.,
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>

          <hr className="mb-5 mt-5 pb-3"></hr>

          <section className="py-4 text-center text-lg-left">
          
            <h3 className="h3 font-weight-bold text-center mb-5 pt-4">Sample Concepts Tested</h3>      
            <p className="text-center mb-5 pb-3">Below is a sample set of concepts tested in the exam. These concepts depend on the specializations selected and include but not limited to:.</p>
           
            <div className="row">             
                <div className="col-lg-3 col-xl-3 pb-3">                    
                    <div className="view overlay rounded z-depth-2">
                        <img src={WEB_DEV_DOCUMENT_OBJECT_MODEL} alt="itpacs" className="img-fluid"></img>
                        
                            <div className="mask"></div>
                        
                    </div>
                </div>
                
                <div className="col-lg-9 col-xl-9">                    
                         <h6 className="font-weight-bold pb-1 brown-text">
                          <i className="fa fa-adjust"></i> Web Development</h6>      
                    <h3 className="mb-4 font-weight-bold dark-grey-text">
                        <strong>Document Object Model</strong>
                    </h3>
                    <p>The Document Object Model, or DOM, is a convention for describing the structure of an HTML document, and it’s at the heart of interacting with the browser. Conceptually, the DOM is a tree. A tree consists of nodes: every node has a parent (except for the root node), and zero or more child nodes. The root node is the document, and it consists of a single child</p>
                     <ListGroup>
                        <ListGroupItem active>Associate must have knowledge of: </ListGroupItem>
                        <ListGroupItem hover>HTML</ListGroupItem>
                        <ListGroupItem hover>CSS</ListGroupItem>
                        <ListGroupItem hover>JavaScript</ListGroupItem>
                        <ListGroupItem hover>Manipulating DOM Elements</ListGroupItem>
                        
                    </ListGroup>
                </div> 
            </div>

            <hr className="mb-5 mt-5 pb-3"></hr>
           
            <div className="row">           
                <div className="col-lg-9 col-xl-9 pb-3">                   
                       <h6 className="font-weight-bold pb-1 blue-text">
                        <i className="fa fa-adjust"></i> Web Development</h6>
                        <h3 className="mb-4 font-weight-bold dark-grey-text">
                          <strong>Communication over the web</strong>
                      </h3>
                    <p>The HTTP protocol can be likened to a conversation based on a series of questions and answers, which we refer to respectively as HTTP requests and HTTP responses. </p>
                    <ListGroup>
                        <ListGroupItem active>Associate must have knowledge of: </ListGroupItem>
                        <ListGroupItem hover>HTTP protocols</ListGroupItem>
                        <ListGroupItem hover>Status codes</ListGroupItem>
                        <ListGroupItem hover>Synchronous and asynchronous requests </ListGroupItem>
                        <ListGroupItem hover>Data Interchange Formats (Example JSON, XML)</ListGroupItem>
                    </ListGroup>

                </div>
             
                <div className="col-lg-3 col-xl-3">                     
                    <div className="view overlay rounded z-depth-2">
                        <img src={WEB_DEV_COMMUMICATION_OVER_WEB} alt="itpacs" className="img-fluid" ></img>
                        
                            <div className="mask"></div>
                        
                    </div>
                </div>              

            </div>        

            <hr className="mb-5 mt-4 pb-3"></hr>         
            <div className="row pb-5">                
                <div className="col-lg-3 col-xl-3 pb-3 violet-text">                    
                    <div className="view overlay rounded z-depth-2">
                        <img src={WEB_DEV_DATA_BASE} alt="itpacs" className="img-fluid" ></img>
                        
                            <div className="mask"></div>
                        
                    </div>
                </div>              
                <div className="col-lg-9 col-xl-9">                   
                      <h6 className="font-weight-bold pb-1 green-text">
                      <i className="fa fa-adjust"></i> Web Development</h6>
                      <h3 className="mb-4 font-weight-bold dark-grey-text">
                        <strong>Databases</strong>
                      </h3>
                    <p>A database stores application data in an organized way. The application then issues queries to retrieve specific portions of the data as they are needed. Commonly used databases for web applications include SQL databases and NoSQL databases. </p>
                      <ListGroup>
                        <ListGroupItem active>Associate must have knowledge of: </ListGroupItem>
                        <ListGroupItem hover>Structured Query Language for SQL databases</ListGroupItem>
                        <ListGroupItem hover>CRUD operations</ListGroupItem>
                        <ListGroupItem hover>Accessing databases through APIs for NoSQL Databases</ListGroupItem>
                        
                    </ListGroup>
                </div>       
            </div> 

            <hr className="mb-5 mt-5 pb-3"></hr>
           
            <div className="row">           
                <div className="col-lg-9 col-xl-9 pb-3">                   
                       <h6 className="font-weight-bold pb-1 blue-text">
                        <i className="fa fa-adjust"></i> Web Development</h6>
                        <h3 className="mb-4 font-weight-bold dark-grey-text">
                          <strong>Application Programming Interfaces</strong>
                      </h3>
                    <p>In many situations, the server’s main (and sometimes only) function is to provide the client application with data retrieval and storage services. In this model, the server becomes a web service or application programming interface (API). </p>
                    <ListGroup>
                        <ListGroupItem active>Associate must have knowledge of: </ListGroupItem>
                        <ListGroupItem hover>Representational State Transfer (REST) architecture</ListGroupItem>
                        <ListGroupItem hover>Clear separation between clients and servers</ListGroupItem>
                        <ListGroupItem hover>Making API calls </ListGroupItem>
                        
                    </ListGroup>

                </div>
             
                <div className="col-lg-3 col-xl-3">                     
                    <div className="view overlay rounded z-depth-2">
                        <img src={WEB_DEV_APPLICATION_PROGRAMMING_INTERFACES} alt="itpacs" className="img-fluid" ></img>
                        
                            <div className="mask"></div>
                        
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
                        
                        <CardText>Professional certifications are for those with more than 2 years experience in a specific field. </CardText>
                        <hr className="my-2 grey" />                            
                              <h6>Duration:<Badge color="danger" className='ml-1'>120 minutes</Badge></h6>
                              <h6>Format: <Badge color="danger" className='ml-1'>Online/Paper based</Badge></h6>
                              <h6>No of Questions: <Badge color="danger" className='ml-1'>60. (MCQs, Code)</Badge></h6>
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
                                improvement to help you prepare better for the next attempt. You can take the Professional exam a maximum of 3 
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
                                (1 PTU = 1 hr of training) over 2 years. Training can be through classroom sessions, e-learning, web learning etc. 20 P.T.Us can be accrued for knowledge sharing activities such as providing training.
                              </CardText>
                              <hr className="my-2 grey" />                            
                              <h6>Accrue PTUs:<Badge color="success" className='ml-1'>60</Badge></h6>
                              <h6>Renew:<Badge color="success" className='ml-1'>Every 2 years</Badge></h6>
                              <h6>Professional Training Unit:<Badge color="success" className='ml-1'>1 P.T.U = 1 Hour training</Badge></h6>     
                          
                        </CardBody>
                    </Card>
                </div>             
            </div>
        </section>

        <hr className="mb-5 mt-4 pb-3"></hr> 

        <section className="pb-3 text-center">            
            <h3 className="font-weight-bold h3 py-5">Context</h3>            
            <p className="section-description">Participants can use any programming language or tool of their choice. Once a participant chooses his or her specialization, they will also specify the programming language and toolset. The exam will be customized accordingly. </p>

            <div className='row'>
                <div className="col-lg-3 col-xl-3 pb-3 violet-text">                    
                    <div className="view overlay rounded z-depth-2">
                        <img src={WEB_DEV_CONTEXT} alt="itpacs" className="img-fluid" ></img>
                        
                            <div className="mask"></div>
                        
                    </div>
                </div>              
                <div className="col-lg-9 col-xl-9">                   
                      <div className="row">
                          <div className='col-lg-6 col-xl-6'>
                            <ListGroup>
                              <ListGroupItem hover> <ModalPage 
                                                        name='Python'
                                                        body='Python is a widely used high-level, general-purpose, interpreted, dynamic programming language. Its design philosophy emphasizes code readability, and its syntax allows programmers to express concepts in fewer lines of code'/> </ListGroupItem>
                              <ListGroupItem hover> <ModalPage 
                                                        name='JavaScript'
                                                        body='JavaScript is an interpreted computer programming language that was built for the Web. It was invented by Brendan Eich, co-founder of the Mozilla project, the Mozilla Foundation, and the Mozilla Corporation.'/> </ListGroupItem>
                              <ListGroupItem hover> <ModalPage 
                                                        name='PHP'
                                                        body='PHP is a recursive acronym for "PHP: Hypertext Preprocessor. PHP is a server side scripting language that is embedded in HTML. It is used to manage dynamic content, databases, session tracking, even build entire e-commerce sites.'/> </ListGroupItem>
                              <ListGroupItem hover> <ModalPage 
                                                        name='Ruby'
                                                        body='Ruby is a very high level language, which means Ruby abstracts away (i.e. handles for you) most of the complex details of the machine. Thus, you can quickly build something from scratch with less lines of code.'/> </ListGroupItem>
                              <ListGroupItem hover> <ModalPage 
                                                        name='Web Frameworks'
                                                        body='A web framework (WF) or web application framework (WAF) is a software framework that is designed to support the development of web applications including web services, web resources, and web APIs. Web frameworks provide a standard way to build and deploy web applications. Web frameworks aim to automate the overhead associated with common activities performed in web development. . There are many web development frameworks. Examples, Flask, Django, Ruby on Rails, Angular, React, Laravel, Node.js, Symfony, ASP.NET, Yii, Meteorjs, CakePHP, Vue.js etc.,'/> </ListGroupItem>
                          </ListGroup>
                          </div>
                          <div className='col-lg-6 col-xl-6'>
                            <ListGroup>
                              <ListGroupItem hover> <ModalPage 
                                                        name='Databases'
                                                        body='SQL databases use structured query language (SQL) for defining and manipulating data. On one hand, this is extremely powerful: SQL is one of the most versatile and widely-used options available, making it a safe choice and especially great for complex queries. A NoSQL database, on the other hand, has dynamic schema for unstructured data, and data is stored in many ways: it can be column-oriented, document-oriented, graph-based or organized as a KeyValue store.'/> </ListGroupItem>
                             <ListGroupItem hover> <ModalPage 
                                                        name='Choose any languages, frameworks, databases'
                                                        body='Exam takers can choose any language, framework or database for solving a given problem.'/> </ListGroupItem>
                              
                          </ListGroup>
                          </div>
                      </div>
                      
                </div>       
              </div>
        </section>

 				</div>
 				)
 	}
 }

export default CPWD

