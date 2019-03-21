import React from 'react'
import { Badge, ListGroup, ListGroupItem, CardBody, Card, CardImage, CardTitle, CardText,Fa } from 'mdbreact';
import ModalPage from '../ModalPage'
import ExamDetails_Administration from '../img/ExamDetails_Administration.svg'
import ExamDetails_TestRetake from '../img/ExamDetails_TestRetake.svg'
import ExamDetails_Maintaining from '../img/ExamDetails_Maintaining.svg'
import MOBILE_DEV_APPLICATION_PROGRAMMING_INTERFACES from '../img/MOBILE_DEV_APPLICATION_PROGRAMMING_INTERFACES.svg'
import MOBILE_DEV_COMMUMICATION_OVER_WEB from '../img/MOBILE_DEV_COMMUMICATION_OVER_WEB.svg'
import MOBILE_DEV_CONTEXT from '../img/MOBILE_DEV_CONTEXT.svg'
import MOBILE_DEV_NATIVE_MOBILE_APPS from '../img/MOBILE_DEV_NATIVE_MOBILE_APPS.svg'
import Pre_requisites_AssociateSVG1 from '../img/Pre_requisites_AssociateSVG1.svg'

 class CAMD extends React.Component{

 	constructor(props){
 		super(props)
 	}
 	render(){
 		return (
 				<div className='container fluid'>
 					<CardBody>
                          <h4 className="card card-body bg-light text-black">Certified Associate in Mobile Development (CAMD)®</h4>
                          <p className="px-5 mb-5 pb-3 lead grey-text text-left">The Associate certification is catered to individuals with less than 1 year working experience in the field. This is ideal for newcomers starting out in the profession or those seeking to make an entry into the profession. Applicants are required to have completed the application process prior to taking the exam. </p>
                          
                          <h5 className="font-weight-bold"><i className="fa fa-cogs pink-text fa-2x mr-2"></i>Available Specializations</h5>
                          <h6 className="font-weight-bold pb-1 blue-text">
                            <i className="fa fa-adjust"></i> Mobile Development</h6>
                          <h6>You can choose one or more specializations from the available exams. Your certificate will reflect the specializations which you have passed </h6>

                    <ListGroup>
                      <ListGroupItem>Programming Language<Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Native Applications for Android Platform<Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Native Applications for iOS Platform<Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Request-Response cycle<Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Hybrid applications <Badge className='ml-2'color='info'>Critical</Badge></ListGroupItem>
                      <ListGroupItem>Progressive Web Applications<Badge className='ml-2'color='info'>Critical</Badge></ListGroupItem>
                      <ListGroupItem>Forms<Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Databases<Badge className="ml-2" color='info'>Critical</Badge></ListGroupItem>
                      <ListGroupItem>Application Programming Interfaces<Badge className='ml-2' color='info'>Critical</Badge></ListGroupItem>
                      <ListGroupItem>RESTful Web Services<Badge className='ml-2' color='danger'>Niche</Badge></ListGroupItem>
                      
                    </ListGroup>
                            
                      </CardBody>
                    
                    <section>
                        <h3 className="py-5 font-weight-bold text-center">Pre-requisites<Fa icon="user" className='ml-3' size='3x' style={{color:'purple'}} /></h3>

                        <p className="px-5 mb-5 pb-3 lead grey-text text-center">Participants are required to complete the exam application process which requires fulfilling certain eligibility criterion.</p>
                        <div className="row pt-2">
                          <div className="col-lg-5 text-center text-lg-left">
                            <img src={Pre_requisites_AssociateSVG1} alt="itpacs" className="img-fluid z-depth-0"></img>
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

          <section className="py-4 text-center text-lg-left">
          
            <h3 className="h3 font-weight-bold text-center mb-5 pt-4">Sample Concepts Tested</h3>      
            <p className="text-center mb-5 pb-3">Below is a sample set of concepts tested in the exam. These concepts depend on the specializations selected and include but not limited to:.</p>
           
            <div className="row">             
                <div className="col-lg-3 col-xl-3 pb-3">                    
                    <div className="view overlay rounded z-depth-2">
                        <img src={MOBILE_DEV_NATIVE_MOBILE_APPS} alt="itpacs" className="img-fluid"></img>
                        
                            <div className="mask"></div>
                        
                    </div>
                </div>
                
                <div className="col-lg-9 col-xl-9">                    
                         <h6 className="font-weight-bold pb-1 brown-text">
                          <i className="fa fa-adjust"></i> Mobile Development</h6>      
                    <h3 className="mb-4 font-weight-bold dark-grey-text">
                        <strong>Native Mobile Apps</strong>
                    </h3>
                    <p>Native mobile apps are the most common type of app. They are built for specific platforms and are are written in languages that the platform accepts, for example, Swift and Objective-C for iOS apps and Java for native Android apps. Native apps are also built using the specific Integrated Development Environment (IDE) for the given operating systems.</p>
                     <ListGroup>
                        <ListGroupItem active>Associate must have knowledge of: </ListGroupItem>
                        <ListGroupItem hover>Working with Emulators and Simulators</ListGroupItem>
                        <ListGroupItem hover>GUI Components, Storyboards</ListGroupItem>
                        <ListGroupItem hover>Transitions and Segues</ListGroupItem>
                        <ListGroupItem hover>Dealing with events such as Touch and Swipe</ListGroupItem>
                        <ListGroupItem hover>Managing device orientations and layouts</ListGroupItem>
                    </ListGroup>
                </div> 
            </div>

            <hr className="mb-5 mt-5 pb-3"></hr>
           
            <div className="row">           
                <div className="col-lg-9 col-xl-9 pb-3">                   
                       <h6 className="font-weight-bold pb-1 blue-text">
                        <i className="fa fa-adjust"></i> Mobile Development</h6>
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
                        <img src={MOBILE_DEV_COMMUMICATION_OVER_WEB} alt="itpacs" className="img-fluid" ></img>
                        
                            <div className="mask"></div>
                        
                    </div>
                </div>              

            </div>        

            <hr className="mb-5 mt-4 pb-3"></hr>         
            <div className="row pb-5">                
                <div className="col-lg-3 col-xl-3 pb-3 violet-text">                    
                    <div className="view overlay rounded z-depth-2">
                        <img src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg" alt="itpacs" className="img-fluid" ></img>
                        
                            <div className="mask"></div>
                        
                    </div>
                </div>              
                <div className="col-lg-9 col-xl-9">                   
                      <h6 className="font-weight-bold pb-1 green-text">
                      <i className="fa fa-adjust"></i> Mobile Development</h6>
                      <h3 className="mb-4 font-weight-bold dark-grey-text">
                        <strong>Databases</strong>
                      </h3>
                    <p>A database stores application data in an organized way. The application then issues queries to retrieve specific portions of the data as they are needed. Commonly used databases for web applications include SQL databases and NoSQL databases. </p>
                      <ListGroup>
                        <ListGroupItem active>Associate must have knowledge of: </ListGroupItem>
                        <ListGroupItem hover>Structured Query Language for SQL databases</ListGroupItem>
                        <ListGroupItem hover>CRUD operations</ListGroupItem>
                        <ListGroupItem hover>Accessing databases through APIs for NoSQL Databases</ListGroupItem>
                        <ListGroupItem hover>SQLite</ListGroupItem>
                    </ListGroup>
                </div>       
            </div> 

            <hr className="mb-5 mt-5 pb-3"></hr>
           
            <div className="row">           
                <div className="col-lg-9 col-xl-9 pb-3">                   
                       <h6 className="font-weight-bold pb-1 blue-text">
                        <i className="fa fa-adjust"></i> Mobile Development</h6>
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
                        <img src={MOBILE_DEV_APPLICATION_PROGRAMMING_INTERFACES} alt="itpacs" className="img-fluid" ></img>
                        
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
                        
                        <CardText>Associate certifications are for those with less than 1 year experience in a specific field. </CardText>
                        <hr className="my-2 grey" />                            
                              <h6>Duration:<Badge color="primary" className='ml-1'>60 minutes</Badge></h6>
                              <h6>Format: <Badge color="primary" className='ml-1'>Online/Paper based</Badge></h6>
                              <h6>No of Questions: <Badge color="primary" className='ml-1'>30. (MCQs, Code, Exercises)</Badge></h6>
                              <h6>Passing Score: <Badge color="primary" className='ml-1'>65%</Badge></h6>
                              <h6>Result: <Badge color="primary" className='ml-1'>Immediate for online</Badge></h6>
                          
                        
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
                                To maintain your credential, you will need to accumulate 30 Professional Training Units 
                                (1 PTU = 1 hr of training) over 2 years. Training can be through classroom sessions, e-learning, web learning etc
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

        <section className="pb-3 text-center">            
            <h3 className="font-weight-bold h3 py-5">Context</h3>            
            <p className="section-description">Participants can use any programming language or tool of their choice. Once a participant chooses his or her specialization, they will also specify the programming language and toolset. The exam will be customized accordingly. </p>

            <div className='row'>
                <div className="col-lg-3 col-xl-3 pb-3 violet-text">                    
                    <div className="view overlay rounded z-depth-2">
                        <img src={MOBILE_DEV_CONTEXT} alt="itpacs" className="img-fluid" ></img>
                        
                            <div className="mask"></div>
                        
                    </div>
                </div>              
                <div className="col-lg-9 col-xl-9">                   
                      <div className="row">
                          <div className='col-lg-6 col-xl-6'>
                            <ListGroup>
                              <ListGroupItem hover> <ModalPage 
                                                        name='Java'
                                                        body='Java is the programming language used to develop Android applications. The Java compilers convert your code from human readable Java source files to something called “bytecode” in the Java world. These are interpreted by a Java Virtual Machine, which operates much like a physical CPU might operate on machine code, to actually execute the compiled code.' /> </ListGroupItem>
                              <ListGroupItem hover> <ModalPage 
                                                        name='Swift'
                                                        body='Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. for iOS, macOS, watchOS, tvOS, and Linux. Swift is designed to work with Apple Cocoa and Cocoa Touch frameworks and the large body of existing Objective-C (ObjC) code written for Apple products. It is built with the open source LLVM compiler framework and has been included in Xcode'/> </ListGroupItem>
                              <ListGroupItem hover> <ModalPage 
                                                        name='Objective-C'
                                                        body='The primary programming language for iOS apps, Objective-C was chosen by Apple to build apps that are robust and scalable. Being a C-language superset, it does have a number of functions that precisely deal with graphics, I/O, and display functions. Moreover, as part of the Apple development framework, Objective-C is fully integrated into all iOS and MacOS frameworks. However, it’s now slowly being replaced in the Apple ecosystem by a more powerful language called Swift.'/> </ListGroupItem>
                              <ListGroupItem hover> <ModalPage 
                                                        name='C++'
                                                        body='This is the most appropriate and robust programming language when it comes to building mobile apps for Android and Windows- and, mainly for low-level programming, it is still the go-to language on platforms for mobile app developers. As a powerful programming language, C++ allows mobile apps to be developed for practically every purpose on every platform that exists.'/> </ListGroupItem>
                              <ListGroupItem hover> <ModalPage 
                                                        name='C#'
                                                        body='The most coveted programming language for Windows Phone app development, C# does the trick for Microsoft that Objective-C does for Apple. Although a Windows Phone platform couldn’t emerge as the game-changer in the mobile application development industry, for loyal Microsoft users, C# makes the perfect programming language to build the robust Windows Phone apps.'/> </ListGroupItem>
                          </ListGroup>
                          </div>
                          <div className='col-lg-6 col-xl-6'>
                            <ListGroup>
                              <ListGroupItem hover> <ModalPage 
                                                        name='React Native'
                                                        body='React Native is built by Facebook and lets developers build real, native iOS and Android apps with one codebase. With React Native, you build a mobile app that is the same as an app built using Objective-C or Java. With React Native, however, you use JavaScript and React.'/> </ListGroupItem>
                             <ListGroupItem hover> <ModalPage 
                                                        name='Choose any languages, frameworks, databases'
                                                        body='Exam takers can choose any language, framework or database for solving a given problem. In mobile development, the term “native” would be defined as an ecosystem that Apple or Google, for example, chooses for developing apps for their operating systems. Xamarin or React Native technology could be classified as either native or hybrid. Xamarin in particular can be considered both as a native and hybrid app development platform, as it builds native Android, iOS, and Windows development in C#, with either Visual Studio or Xamarin Studio. It also creates hybrid apps for multiple operating systems sharing C# codebase, IDE, language, and APIs. However, since there is another layer between your code and the platform, many people see it as hybrid.'/> </ListGroupItem>
                              
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

export default CAMD

