import React from 'react'
import { Badge, ListGroup, ListGroupItem, CardBody, Card, CardImage, CardTitle, CardText,Fa } from 'mdbreact';
import ModalPage from '../ModalPage'
import CONTEXTpic from '../img/CONTEXT.svg'
import DATA_ACQUSITIONpic from '../img/DATA_ACQUSITION.svg'

import FOUNDATION_BIGDATApic from '../img/FOUNDATION_BIGDATA.svg'
import DATA_MUNGINGpic from '../img/DATA_MUNGING.svg'

import ExamDetails_Administration from '../img/ExamDetails_Administration.svg'
import ExamDetails_TestRetake from '../img/ExamDetails_TestRetake.svg'
import ExamDetails_Maintaining from '../img/ExamDetails_Maintaining.svg'

import Pre_requisites_AssociateSVG1 from '../img/Pre_requisites_AssociateSVG1.svg'
import associate_data_scientist from '../img/associate_data_scientist.svg'

import TableEssentialCriticalDS from '../TableEssentialCriticalDS'

 class CADS extends React.Component{

 	constructor(props){
 		super(props)
 	}
 	render(){
 		return (
 				<div className='container fluid'>
 					<CardBody>
                          
                      <h4 className="card card-body bg-light text-black">Certified Associate Data Scientist (CADS)®</h4>
                          <p className="px-5 mb-5 pb-3 lead grey-text text-left">The associate data scientist credential is automatically conferred to anyone that has obtained at least 4 Essential certifications and at least 2 critical certifications. The Associate certification is catered to individuals with less than 1 year working experience in the field. This is ideal for newcomers starting out in the profession or those seeking to make an entry into the profession. Applicants are required to have completed the application process prior to taking the exams. </p>

                          <div className="col-lg-9 pb-3 ml-5 col-sm-12">
                            
                              <img src={associate_data_scientist} className="img-fluid z-depth-0" alt="Certified Associate Data Scientist"></img>
                            
                          </div>

                          <TableEssentialCriticalDS />

                          <h4 className="card card-body bg-light text-black">Certified Associate in Data Science (CADS)®</h4>
                          <p className="px-5 mb-5 pb-3 lead grey-text text-left">The Associate certification is catered to individuals with less than 1 year working experience in the field. This is ideal for newcomers starting out in the profession or those seeking to make an entry into the profession. Applicants are required to have completed the application process prior to taking the exam. </p>
                          
                          <h5 className="font-weight-bold"><i className="fa fa-cogs pink-text fa-2x mr-2"></i>Available Certifications</h5>
                          <h6 className="font-weight-bold pb-1 blue-text">
                            <i className="fa fa-adjust"></i> Data Science</h6>
                          <h6>You can choose one or more specializations from the available exams. Your certificate will reflect the specializations which you have passed. Example: Certified Associate in Data Science - Data Visualization.</h6>

                    <ListGroup>
                      <ListGroupItem>Programming Basics<Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Data Cleaning<Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Data Analysis<Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Data Visualization<Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Data Acquisition <Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Machine Learning Basics<Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Linear Supervised Learning Algorithms<Badge className='ml-2'>Essential</Badge></ListGroupItem>
                      <ListGroupItem>Non-Linear Supervised Learning Algorithms<Badge className="ml-2" color='info'>Critical</Badge></ListGroupItem>
                      <ListGroupItem>Unsupervised Learning Algorithms<Badge className='ml-2' color='info'>Critical</Badge></ListGroupItem>
                      <ListGroupItem>Clustering Algorithms<Badge className='ml-2' color='info'>Critical</Badge></ListGroupItem>
                      <ListGroupItem>Deep Learning<Badge className='ml-2' color="danger">Niche</Badge></ListGroupItem>
                    </ListGroup>
                            
                      </CardBody>
                    
                    <section>
                        <h3 className="py-5 font-weight-bold text-center">Pre-requisites<Fa icon="user" className='ml-3' size='3x' style={{color:'purple'}} /></h3>

                        <p className="px-5 mb-5 pb-3 lead grey-text text-center">Participants are required to complete the exam application process which requires fulfilling certain eligibility criterion.</p>
                        <div className="row pt-2">
                          <div className="col-lg-5 text-center text-lg-left">
                            <img src={Pre_requisites_AssociateSVG1} className="img-fluid z-depth-0" alt="itpacs"></img>
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
          
            <h3 className="h3 font-weight-bold text-center mb-5 pt-4">Sample Syllabus</h3>      
            <p className="text-center mb-5 pb-3">Below is a sample set of concepts tested in the exam. These concepts depend on the specializations selected and include but not limited to:.</p>
           
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
                        <strong>Certified Associate in Data Science - Programming Language</strong>
                    </h3>
                    <p>Data science is the process of extracting useful information from data which involves building and discovering knowledge about the problem domain in a scientifically rigorous manner. Basic programming/coding is an essential skill. Candidates can choose any programming language. Ex, Python, Java etc.,</p>
                     <ListGroup>
                        <ListGroupItem active>Associate must have knowledge of: </ListGroupItem>
                        <ListGroupItem hover>Working with different data types</ListGroupItem>
                        <ListGroupItem hover>Data structures for representing and processing information</ListGroupItem>
                        <ListGroupItem hover>Defining and calling functions or methods</ListGroupItem>
                        <ListGroupItem hover>Passing and retrieving arguments from/to a function/method</ListGroupItem>
                        <ListGroupItem hover>Applying mathematical functions</ListGroupItem>
                    </ListGroup>
                </div> 
            </div>

            <hr className="mb-5 mt-5 pb-3"></hr>
           
            <div className="row">           
                <div className="col-lg-9 col-xl-9 pb-3">                   
                       <h6 className="font-weight-bold pb-1 blue-text">
                        <i className="fa fa-adjust"></i> Data Science</h6>
                        <h3 className="mb-4 font-weight-bold dark-grey-text">
                          <strong>Certified Associate in Data Science - Data Acquisition</strong>
                      </h3>
                    <p>Data Acquisition is an important step in the data science lifecycle. This involves collecting data from different sources.  </p>
                    <ListGroup>
                        <ListGroupItem active>Associate must have knowledge of: </ListGroupItem>
                        <ListGroupItem hover>Processes involved in acquiring data</ListGroupItem>
                        <ListGroupItem hover>Being able to apply common tools used for data acquisition </ListGroupItem>
                        <ListGroupItem hover>Differentiating between structured versus unstructured data</ListGroupItem>
                        <ListGroupItem hover>Converting data into usable formats for algorithms</ListGroupItem>
                        <ListGroupItem hover>Acquiring data, which are in common formats such as CSV and Text</ListGroupItem>
                        <ListGroupItem hover>Acquiring data through web scrapping</ListGroupItem>
                        <ListGroupItem hover>Acquiring data through APIs</ListGroupItem>
                        <ListGroupItem hover>Acquiring data from a database</ListGroupItem>
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
                        <strong>Certified Associate in Data Science - Data Cleaning</strong>
                      </h3>
                    <p>Data Cleaning, also referred to as Data Wrangling or Data Munging is about transforming data so it’s in its most useful format for analysis.</p>
                      <ListGroup>
                        <ListGroupItem active>Associate must have knowledge of: </ListGroupItem>
                        <ListGroupItem hover>Challenges in data cleaning/munging</ListGroupItem>
                        <ListGroupItem hover>Being able to clean textual data</ListGroupItem>
                        <ListGroupItem hover>Work with date and time formats</ListGroupItem>
                        <ListGroupItem hover>Tokenize text data</ListGroupItem>
                        <ListGroupItem hover>Steps for handling missing data</ListGroupItem>
                        <ListGroupItem hover>Apply transformations to normalize data</ListGroupItem>
                        <ListGroupItem hover>Convert text data to numeric data</ListGroupItem>
                    </ListGroup>
                </div>       

            </div>

            <hr className="mb-5 mt-5 pb-3"></hr>
           
            <div className="row">           
                <div className="col-lg-9 col-xl-9 pb-3">                   
                       <h6 className="font-weight-bold pb-1 blue-text">
                        <i className="fa fa-adjust"></i> Data Science</h6>
                        <h3 className="mb-4 font-weight-bold dark-grey-text">
                          <strong>Certified Associate in Data Science - Data Analysis</strong>
                      </h3>
                    <p>Data analysis requires math during the treatment and processing of data. Familiarity with statistical concepts is necessary because all the methods that are applied in the analysis and interpretation of data are based on these concepts.</p>
                    <ListGroup>
                        <ListGroupItem active>Associate must have knowledge of: </ListGroupItem>
                        <ListGroupItem hover>Differentiating between categorical and numerical data</ListGroupItem>
                        <ListGroupItem hover>Mathematical representations of linear and non-linear functions </ListGroupItem>
                        <ListGroupItem hover>Knowledge of slopes and gradients</ListGroupItem>
                        <ListGroupItem hover>Knowledge of summary statistics</ListGroupItem>
                        <ListGroupItem hover>Knowledge of bayesian statistics</ListGroupItem>
                        <ListGroupItem hover>Knowledge of matrix mathematical operations</ListGroupItem>
                        <ListGroupItem hover>Knowledge of regression</ListGroupItem>
                        <ListGroupItem hover>Knowledge of cost/loss function calculations</ListGroupItem>
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
                        <strong>Certified Associate in Data Science - Data Visualization</strong>
                      </h3>
                    <p>Exploring the data involves essentially searching the data in a graphical or statistical presentation in order to find patterns, connections, and relationships. Data visualization is used to highlight possible patterns.</p>
                      <ListGroup>
                        <ListGroupItem active>Associate must have knowledge of: </ListGroupItem>
                        <ListGroupItem hover>Using charts for summarizing and grouping data</ListGroupItem>
                        <ListGroupItem hover>Using charts and graphs to explore relationship between the various attributes</ListGroupItem>
                        <ListGroupItem hover>Creating charts to identify patterns and trends</ListGroupItem>
                        <ListGroupItem hover>Integrating visualization into the data science lifecyle</ListGroupItem>

                    </ListGroup>
                </div>       

            </div>

            <hr className="mb-5 mt-5 pb-3"></hr>
           
            <div className="row">           
                <div className="col-lg-9 col-xl-9 pb-3">                   
                       <h6 className="font-weight-bold pb-1 blue-text">
                        <i className="fa fa-adjust"></i> Data Science</h6>
                        <h3 className="mb-4 font-weight-bold dark-grey-text">
                          <strong>Certified Associate in Data Science - Machine Learning Basics</strong>
                      </h3>
                    <p>Machine learning is a discipline that uses a whole series of procedures and algorithms that analyze the data in order to recognize patterns, clusters, or trends and then extracts useful information for data analysis in an automated way</p>
                    <ListGroup>
                        <ListGroupItem active>Associate must have knowledge of: </ListGroupItem>
                        <ListGroupItem hover>Explain the Machine learning lifecycle</ListGroupItem>
                        <ListGroupItem hover>Explain the difference between rules based versus example based systems</ListGroupItem>
                        <ListGroupItem hover>Demonstrate knowledge of training data, test data and validation data </ListGroupItem>
                        <ListGroupItem hover>Differentiate between classification, regression and clustering models</ListGroupItem>
                        <ListGroupItem hover>Apply algorithms on data sets and generate models for prediction and classification</ListGroupItem>
                        <ListGroupItem hover>Apply tools to determine accuracy of a model</ListGroupItem>
                        <ListGroupItem hover>Explain concept of bias-variance tradeoff</ListGroupItem>
                        <ListGroupItem hover>Numerically evaluate the effectiveness of a regression model</ListGroupItem>
                        <ListGroupItem hover>Create a model and use the model to predict outcomes</ListGroupItem>
                        <ListGroupItem hover>Explain the difference between supervised and unsupervised learning</ListGroupItem>
                        <ListGroupItem hover>Differentiate between dependent and independent variables</ListGroupItem>                        
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
                        <strong>Certified Associate in Data Science - Non-Linear Supervised Learning Algorithms</strong>
                      </h3>
                    <p>There are algorithms that work well with data that is not linearly separable. Examples include Tree based algorithms, neighbors algorithms etc.</p>
                      <ListGroup>
                        <ListGroupItem active>Associate must have knowledge of: </ListGroupItem>
                        <ListGroupItem hover>Applying decision tree algorithm on data sets</ListGroupItem>
                        <ListGroupItem hover>Applying naive bayes algorithm on data sets</ListGroupItem>
                        <ListGroupItem hover>Applying random forest algorithm on data sets</ListGroupItem>
                        <ListGroupItem hover>Applying support vector machines</ListGroupItem>
                        <ListGroupItem hover>Applying K Nearest neighbors algorithm</ListGroupItem>
                        <ListGroupItem hover>Demonstrate knowledge of kernel functions</ListGroupItem>
                        <ListGroupItem hover>Demonstrate knowledge of boosting and bagging</ListGroupItem>
                    </ListGroup>
                </div>       

            </div>

            <div className="row">           
                <div className="col-lg-9 col-xl-9 pb-3">                   
                       <h6 className="font-weight-bold pb-1 blue-text">
                        <i className="fa fa-adjust"></i> Data Science</h6>
                        <h3 className="mb-4 font-weight-bold dark-grey-text">
                          <strong>Certified Associate in Data Science - Unsupervised Learning Algorithms</strong>
                      </h3>
                    <p>Unsupervised learning is a type of machine learning algorithm used to draw inferences from datasets consisting of input data without labeled responses.</p>
                    <ListGroup>
                        <ListGroupItem active>Associate must have knowledge of: </ListGroupItem>
                        <ListGroupItem hover>Dimensionality reduction techniques</ListGroupItem>
                        <ListGroupItem hover>Applying K-Means algorithm</ListGroupItem>
                        <ListGroupItem hover>Knowledge of activation functions</ListGroupItem>
                        <ListGroupItem hover>Feature extraction and feature engineering</ListGroupItem>
                        <ListGroupItem hover>Apply Principal Component Analysis technqiues</ListGroupItem>
                        <ListGroupItem hover>Apply tools to determine performance of a model</ListGroupItem>
                        <ListGroupItem hover>Explain Receiver Operating Characteristic</ListGroupItem>
                                               
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
                        <strong>Certified Associate in Data Science - Clustering Algorithms</strong>
                      </h3>
                    <p>Once we have reduced the set of original features to a smaller, more manageable set, we can find interesting patterns by grouping similar instances of data together. This is known as clustering.</p>
                      <ListGroup>
                        <ListGroupItem active>Associate must have knowledge of: </ListGroupItem>
                        <ListGroupItem hover>Apply K-Means clustering</ListGroupItem>
                        <ListGroupItem hover>Apply Hierarchical clustering</ListGroupItem>
                        <ListGroupItem hover>Apply Density-based spatial clustering (DBSCAN)</ListGroupItem>
                        <ListGroupItem hover>Explain autoencoders</ListGroupItem>                        
                    </ListGroup>
                </div>       

            </div>

            <div className="row">           
                <div className="col-lg-9 col-xl-9 pb-3">                   
                       <h6 className="font-weight-bold pb-1 blue-text">
                        <i className="fa fa-adjust"></i> Data Science</h6>
                        <h3 className="mb-4 font-weight-bold dark-grey-text">
                          <strong>Certified Associate in Data Science - Deep Learning</strong>
                      </h3>
                    <p>Deep Learning models are designed using neural network architecture. A neural network is a hierarchical organization of neurons (similar to the neurons in the brain) with connections to other neurons.</p>
                    <ListGroup>
                        <ListGroupItem active>Associate must have knowledge of: </ListGroupItem>
                        <ListGroupItem hover>Comparison between Machine learning and Deep learning models</ListGroupItem>
                        <ListGroupItem hover>Explain computational graphs</ListGroupItem>
                        <ListGroupItem hover>Build feed forward neural networks</ListGroupItem>
                        <ListGroupItem hover>Apply regularization</ListGroupItem>
                        <ListGroupItem hover>Demonstrate skills around Hyperparameter tuning</ListGroupItem>
                        <ListGroupItem hover>Build and train convolutional neural networks</ListGroupItem>
                        <ListGroupItem hover>Explain recurrent neural networks</ListGroupItem>
                                               
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
                              
                              <CardText className='"dark-grey-text"'>
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
                        <img src={CONTEXTpic} className="img-fluid" alt="itpacs"></img>
                        <a>
                            <div className="mask"></div>
                        </a>
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
                                                        name='R'
                                                        body='R is a language and environment for statistical computing and graphics. R provides a wide variety of statistical techniques like linear & nonlinear modeling, classical statistical tests, time-series analysis, classification, clustering and graphical techniques.'/> </ListGroupItem>
                              <ListGroupItem hover> <ModalPage 
                                                        name='MATLAB'
                                                        body='MATLAB is a powerful language for technical computing. MATLAB can be used for math computations, modeling and simulations, data analysis and processing, visualization and graphics, and algorithm development.'/> </ListGroupItem>
                              <ListGroupItem hover> <ModalPage 
                                                        name='Clojure'
                                                        body='Clojure is a dynamic, general-purpose programming language, combining the approachability and interactive development of a scripting language with an efficient and robust infrastructure for multithreaded programming. Clojure belongs to Lisp family of languages.'/> </ListGroupItem>
                              <ListGroupItem hover> <ModalPage 
                                                        name='Scala'
                                                        body='Scala, short for Scalable language, is a multi-paradigm programming language, which supports both object-oriented and functional programming, and scripting language used to build applications for the Java Virtual Macine (JVM).'/> </ListGroupItem>
                          </ListGroup>
                          </div>
                          <div className='col-lg-6 col-xl-6'>
                            <ListGroup>
                              <ListGroupItem hover> <ModalPage 
                                                        name='Julia'
                                                        body='Julia is a high-level, high-performance dynamic programming language for technical computing, with syntax that is familiar to users of other technical computing environments. It provides a sophisticated compiler, distributed parallel execution, numerical accuracy, and an extensive mathematical function library.'/> </ListGroupItem>
                             <ListGroupItem hover> <ModalPage 
                                                        name='Any languages or libraries'
                                                        body='Exam takers can choose any language or library for solving a given problem. Examples, NumPy, Pandas, Jupyter Notebook, Keras, Scikit, SciPy, MatplotLib, RStudio etc.,'/> </ListGroupItem>
                              
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

export default CADS

