import React from 'react'
import { Row, Col, Card, CardBody, Container, Button, CardText, CardTitle, CardGroup, MDBSideNavLink, MDBIcon} from 'mdbreact';
import {Link} from 'react-router-dom'
import ApplicationFormInputs from './ApplicationFormInputs'

import {domainsList, domainsListForUrl} from './domainsList.js'
import ApplicationFormLevel from './ApplicationFormLevel'

import {allCertificatesDictionary} from './allcertificates.js'
import axios from 'axios'

class ApplicationForm extends React.Component {

	constructor(props){
		super(props)

		this.state = {
			firstname : this.props.user.firstname,
			lastname : this.props.user.lastname,
			email: this.props.user.email,
			levelSet: false,
			certificateSelected:'',
			domainSelected:this.props.domain,
			user:this.props.user,
			certificateDetails:{}
			
		}

		this.getList = this.getList.bind(this)
		this.setLevel = this.setLevel.bind(this)
		
	}

	

	

	

	getList(dictionary, domain, level) {

		const certs = dictionary[domain][level]
		return certs
	}

	setLevel(cert){		
		
		this.setState({
						levelSet:true,
						certificateSelected:cert

					})
	}

	render(){

		if (!this.props.isAuthenticated){
			return (
					<p>You must be logged in to view this. Click <Link to="/login">here</Link> to log back in.</p>
				)
		}

	
		return (
				<div>

				

					{this.props.domain === 'all' &&

					<Container className='mt-5'>
					<CardGroup column>

					  <Link to='apply/datascience'>
					  <Card color="primary-color" text="white" className="text-center p-3">
					    <blockquote className="blockquote mb-0">
					    <CardBody>
					      <CardTitle tag="h5">Data Science</CardTitle>
					      <CardText></CardText>
      					  <CardText small muted></CardText>					      
					    </CardBody>
					  </blockquote>
					  </Card>
					  </Link>

					  <Link to='apply/webdevelopment'>
					  <Card color="primary-color" text="white" className="text-center p-3">
					    <CardBody>
					      <CardTitle tag="h5">Web Development</CardTitle>
					      <CardText></CardText>
      					  <CardText small muted></CardText>					      
					    </CardBody>
					  </Card>
					  </Link>

					  <Link to='apply/mobileappsdevelopment'>
					  <Card color="primary-color" text="white" className="text-center p-3">
					    <CardBody>
					      <CardTitle tag="h5">Mobile App Development</CardTitle>
					      
					    </CardBody>
					  </Card>
					  </Link>

					  <Link to='apply/artificialintelligence'>
					   <Card color="primary-color" text="white" className="text-center p-3"> 
					   <CardBody>
					      <CardTitle tag="h5">Artificial Intelligence</CardTitle>
					      
					    </CardBody>
					  </Card>
					  </Link>

					  <Link to='apply/cybersecurity'>
					  <Card color="primary-color" text="white" className="text-center p-3">
					    <CardBody>
					      <CardTitle tag="h5">Cyber Security</CardTitle>
					      
					    </CardBody>
					  </Card>
					  </Link>

					  <Link to='apply/bigdata'>
					  <Card color="primary-color" text="white" className="text-center p-3">
					    <CardBody>
					      <CardTitle tag="h5">Big Data</CardTitle>
					      
					    </CardBody>
					  </Card>
					  </Link>

					   <Link to='apply/blockchain'>
					   <Card color="primary-color" text="white" className="text-center p-3">
					    <CardBody>
					      <CardTitle tag="h5">Blockchain</CardTitle>
					      
					    </CardBody>
					  </Card>
					  </Link>

					  <Link to='apply/iot'>
					  <Card color="primary-color" text="white" className="text-center p-3">
					    <CardBody>
					      <CardTitle tag="h5">IoT</CardTitle>
					      
					    </CardBody>
					  </Card>
					  </Link>
					</CardGroup>
				</Container>
				}

				{this.state.levelSet===false &&

				<div>

				{this.props.domain === 'datascience' &&	
					
					<Container>
					<h4 className="font-weight-bold mb-3 mt-3">Data Science</h4>
					<Row>
						<Col md="4" sm="12">					
							<ApplicationFormLevel 
								domain='Data Science'
								level='Associate'
								certificates={this.getList(allCertificatesDictionary, 'Data Science', 'Associate')}								
								onClick={this.setLevel} />
								
						</Col>
						<Col md="4" sm="12">					
							<ApplicationFormLevel 
								domain='Data Science'
								level='Professional'
								certificates={this.getList(allCertificatesDictionary, 'Data Science', 'Professional')} 
								onClick={this.setLevel} />
								
						</Col>
						<Col md="4" sm="12">					
							<ApplicationFormLevel 
								domain='Data Science'
								level='Leader'
								certificates={this.getList(allCertificatesDictionary, 'Data Science', 'Leader')} 
								onClick={this.setLevel} />
								
						</Col>
					</Row>
					</Container>

					

				}

				{this.props.domain === 'mobileappsdevelopment' &&
					
				<Container>
					<h4 className="font-weight-bold mb-3 mt-3">Mobile Apps Development</h4>
					<Row>
						<Col md="4" sm="12">					
							<ApplicationFormLevel 
								domain='Mobile Apps Development'
								level='Associate'
								certificates={this.getList(allCertificatesDictionary, 'Mobile Apps Development', 'Associate')} 
								onClick={this.setLevel} />
								
						</Col>
						<Col md="4" sm="12">					
							<ApplicationFormLevel 
								domain='Mobile Apps Development'
								level='Professional'
								certificates={this.getList(allCertificatesDictionary, 'Mobile Apps Development', 'Professional')} 
								onClick={this.setLevel} />
								
						</Col>
						<Col md="4" sm="12">					
							<ApplicationFormLevel 
								domain='Mobile Apps Development'
								level='Leader'
								certificates={this.getList(allCertificatesDictionary, 'Mobile Apps Development', 'Leader')} 
								onClick={this.setLevel} />
								
						</Col>
					</Row>
				</Container>

				}

				{this.props.domain === 'webdevelopment' &&
					<Container>
					<h4 className="font-weight-bold mb-3 mt-3">Web Development</h4>
					<Row>
						<Col md="4" sm="12">					
							<ApplicationFormLevel 
								domain='Web Development'
								level='Associate'
								certificates={this.getList(allCertificatesDictionary, 'Web Development', 'Associate')} 
								onClick={this.setLevel} />
								
						</Col>
						<Col md="4" sm="12">					
							<ApplicationFormLevel 
								domain='Web Development'
								level='Professional'
								certificates={this.getList(allCertificatesDictionary, 'Web Development', 'Professional')} 
								onClick={this.setLevel} />
								
						</Col>
						<Col md="4" sm="12">					
							<ApplicationFormLevel 
								domain='Web Development'
								level='Leader'
								certificates={this.getList(allCertificatesDictionary, 'Web Development', 'Leader')} 
								onClick={this.setLevel} />
								
						</Col>
					</Row>
				</Container>

				}

				{this.props.domain === 'iot' &&
					<Container>
					<h4 className="font-weight-bold mb-3 mt-3">Internet of Things</h4>
					<Row>
						<Col md="4" sm="12">					
							<ApplicationFormLevel 
								domain='Internet of Things'
								level='Associate'
								certificates={this.getList(allCertificatesDictionary, 'Internet of Things', 'Associate')} 
								onClick={this.setLevel} />
								
						</Col>
						
					</Row>
				</Container>

				}

				{this.props.domain === 'artificialintelligence' &&
					<Container>
					<h4 className="font-weight-bold mb-3 mt-3">Artificial Intelligence</h4>
					<Row>
						<Col md="4" sm="12">					
							<ApplicationFormLevel 
								domain='Artificial Intelligence'
								level='Associate'
								certificates={this.getList(allCertificatesDictionary, 'Artificial Intelligence', 'Associate')} 
								onClick={this.setLevel} />
								
						</Col>
						
					</Row>
				</Container>

				}

				{this.props.domain === 'blockchain' &&
					<Container>
					<h4 className="font-weight-bold mb-3 mt-3">Blockchain</h4>
					<Row>
						<Col md="4" sm="12">					
							<ApplicationFormLevel 
								domain='Blockchain'
								level='Associate'
								certificates={this.getList(allCertificatesDictionary, 'Blockchain', 'Associate')} 
								onClick={this.setLevel} />
								
						</Col>
						
					</Row>
				</Container>

				}

				{this.props.domain === 'cybersecurity' &&
					<Container>
					<h4 className="font-weight-bold mb-3 mt-3">Cyber Security</h4>
					<Row>
						<Col md="4" sm="12">					
							<ApplicationFormLevel 
								domain='Cyber Security'
								level='Associate'
								certificates={this.getList(allCertificatesDictionary, 'Cyber Security', 'Associate')} 
								onClick={this.setLevel} />
						</Col>
						
					</Row>
				</Container>

				}

				{this.props.domain === 'bigdata' && 
					<Container>
					<h4 className="font-weight-bold mb-3 mt-3">Big Data</h4>
					<Row>
						<Col md="4" sm="12">					
							<ApplicationFormLevel 
								domain='Big Data'
								level='Associate'
								certificates={this.getList(allCertificatesDictionary, 'Big Data', 'Associate')} 
								onClick={this.setLevel} />
						</Col>
						
					</Row>
				</Container>

				}

				</div>
			}

				{
					this.state.levelSet===true &&
						<ApplicationFormInputs
							user={this.props.user}
							certificate={this.state.certificateSelected}
							domain={this.state.domainSelected} 
							certificateDetails={this.state.certificateDetails} />


				}	


				</div>
				)
	}

}

export default ApplicationForm