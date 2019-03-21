import React from 'react';
import { Col, Container, Mask, Button, Modal, ModalBody, ModalHeader, ModalFooter} from 'mdbreact';

import RiseOfTechnologyPic from '../img/RiseOfTechnologyPic.svg'
import LOGO_WHITE from '../img/LOGO_WHITE.svg'

import CertsAccordian from '../CertsAccordian'
import TableOfAssociateCerts from '../TableOfAssociateCerts'
import TableOfProfessionalCerts from '../TableOfProfessionalCerts'
import TableOfLeaderCerts from '../TableOfLeaderCerts'

class Examfees extends React.Component{

	constructor(props){
		super(props)

		this.state={
			modal1:false,
			modal2:false,
			modal3:false

		}

		this.toggle1 = this.toggle1.bind(this)
		this.toggle2 = this.toggle2.bind(this)
		this.toggle3 = this.toggle3.bind(this)

		}

		toggle1(){
			this.setState({modal1: !this.state.modal1})
		}

		toggle2(){
			this.setState({modal2: !this.state.modal2})
		}

		toggle3(){
			this.setState({modal3: !this.state.modal3})
		}
	

	render(){
		const view = {background: "url(" + RiseOfTechnologyPic + ")no-repeat center center", backgroundSize: 'cover', height: '60vh', backgroundColor:'black'}
		return (
				<div>

					<header>
						<section className="view hm-gradient" style={view}>
					            <Mask overlay="black-strong" style={{flexDirection: 'column'}} className="flex-center  text-white text-center">
					            <div className="full-bg-img">
					                <div className="container flex-center">
					                    <div className="d-flex align-items-center content-height">
					                        <div className="row flex pt-5 mt-3">
					                            <div className="col-md-6 text-center text-md-left mb-5">
					                                <div className="white-text">
					                                    <h1 className="h1-responsive font-bold wow fadeInLeft" data-wow-delay="0.3s">Exam Fees</h1>
					                                    <hr className="hr-light wow fadeInLeft" data-wow-delay="0.3s"></hr>
					                                    <h6 className="wow fadeInLeft" data-wow-delay="0.3s">The exam fees you pay is used for administration, proctoring, test updates, developing standards and student support. If you require an exemption based on economic constraints, please get in touch with us for a case-to-case basis evaluation.</h6>
					                                    <Col sm='6'>
										                 <img src={LOGO_WHITE} className='img-fluid' alt="itpacs"></img>
										                </Col>
					                                </div>
					                            </div>					                            
					                        </div>
					                    </div>
					                </div>
					            </div>
					       		</Mask>
					        </section>

					</header>

					<main>

        <Container>
        <section className="text-center pb-3">
            <h1 className="h1 py-5">ITPACS Exam Fees</h1>
            <p className="section-description">Our exam fees are based on associate, professional and leader certifications. The fees within this framework is the same for all domains. Example, the fees for Certificate Associate in Web Development – Databases is the same as Certificate Associate in Cyber Security – Access Controls since both fall 
            within the Associate framework. </p>

            <div className="row">
                <div className="col-lg-4 col-md-12 mb-4">
                    <div className="pricing-card card">
                        <div className="card-body">
                            <h5 className="mt-3">
                                <strong>Associate Certification</strong>
                            </h5>
                            <div className="pt-0">
                                <h1 className="red-text">$ 90</h1>
                            </div>
                            <ul className="striped">
                                <li>
                                    <p>
                                        <strong>per</strong> specialization</p>
                                </li>
                                <li>
                                    <p>
                                        <strong>70+</strong> specializations</p>
                                </li>
                                <li>
                                    <p>
                                        <strong>8</strong> domains</p>
                                </li>
                                <li>
                                    <p>
                                        <strong>30</strong> minutes exam</p>
                                </li>
                            </ul>


                            
                        	<Button color='primary' className='btn-rounded mb-4' onClick={this.toggle1}>View Exams</Button>
                        	<Modal isOpen={this.state.modal1} toggle={this.toggle1} size="lg">
                        		<ModalHeader toggle={this.toggle1}>Associate Exam Fees</ModalHeader>
                        		<ModalBody>
                        		<TableOfAssociateCerts />
                        		</ModalBody>
                        		  <ModalFooter>
								    <Button color="secondary" onClick={this.toggle1}>Close</Button>{' '}								    
								  </ModalFooter>
							</Modal>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 mb-4">
                    
                        <div className="pricing-card card">
                            <div className="card-body">
                                <h5 className="mt-3">
                                    <strong>Professional Certification</strong>
                                </h5>
                                <div className="pt-0">
                                    <h1 className="red-text">$ 190</h1>
                                </div>
                                <ul className="striped">
                                    <li>
                                        <p>
                                            <strong>per</strong> specialization</p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>30+</strong> specializations</p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>4</strong> domains</p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>60</strong> minutes exam</p>
                                    </li>
                                </ul>
                                
                                <Button color='primary' className='btn-rounded mb-4' onClick={this.toggle2}>View Exams</Button>
	                        	<Modal isOpen={this.state.modal2} toggle={this.toggle2} size="lg">
	                        		<ModalHeader toggle={this.toggle2}>Professional Exam Fees</ModalHeader>
	                        		<ModalBody>
	                        		<TableOfProfessionalCerts />
	                        		</ModalBody>
	                        		  <ModalFooter>
									    <Button color="secondary" onClick={this.toggle2}>Close</Button>{' '}								    
									  </ModalFooter>
								</Modal>


                            </div>                        
                    </div>
                </div>

                <div className="col-lg-4 col-md-12 mb-4">
                    
                        <div className="pricing-card card">
                            <div className="card-body">
                                <h5 className="mt-3">
                                    <strong>Leader Certification</strong>
                                </h5>
                                <div className="pt-0">
                                    <h1 className="red-text">$ 290</h1>
                                </div>
                                <ul className="striped">
                                    <li>
                                        <p>
                                            <strong>per</strong> specialization</p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>20+</strong> specializations</p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>4</strong> domains</p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>30</strong> minutes exam</p>
                                    </li>
                                </ul>
                                
                                <Button color='primary' className='btn-rounded mb-4' onClick={this.toggle3}>View Exams</Button>
	                        	<Modal isOpen={this.state.modal3} toggle={this.toggle3} size="lg">
	                        		<ModalHeader toggle={this.toggle3}>Leader Exam Fees</ModalHeader>
	                        		<ModalBody>
	                        		<TableOfLeaderCerts />
	                        		</ModalBody>
	                        		  <ModalFooter>
									    <Button color="secondary" onClick={this.toggle3}>Close</Button>{' '}								    
									  </ModalFooter>
								</Modal>


                            </div>                        
                    </div>
                </div>
            </div>
        </section>
        <hr className="between-sections mt-4"></hr>
        </Container>




        			<Container>
        				<CertsAccordian />
        			</Container>


					<hr></hr>

					</main>
				</div>

				)
	}
}

export default Examfees