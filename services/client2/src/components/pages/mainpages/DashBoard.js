import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {CardGroup, Container, CardText, Card, CardHeader, CardTitle, CardBody} from 'mdbreact'
import ApplicationFormInputs from '../../forms/ApplicationFormInputs'

class DashBoard extends React.Component {

	constructor(props){
		super(props)

		this.state = {
			firstname: '',
			lastname: '',
			email:'',
			id:'',
			admin:'',
			applications:[],			
			application:{},

			certClicked:false,
			certName:'',
			domain:''
		}
		
	}



	componentDidMount(){
		if (this.props.isAuthenticated){
			this.getUserDetails()
		}
		
	}



	getUserDetails(event){
		const options = {
			url: `${process.env.REACT_APP_USERS_SERVICE_URL}/auth/status`,
			method: 'get',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${window.localStorage.authToken}`
			}
		}
		//console.log(options)
		return axios(options)
		.then((res)=>{
			console.log(res.data.applications)
			this.setState({
				firstname: res.data.data.firstname,
				lastname: res.data.data.lastname,
				email: res.data.data.email,
				id: res.data.data.id,
				admin: res.data.data.admin,
				applications: res.data.applications,

			})
			// console.log(res)
		})
		.catch((error)=>{console.log(error)})
	}

	statusClicked(certificate, domain, e){		

		this.setState({
			certClicked:true,
			certName: certificate,
			domain:domain
		})
	
		
	}

	render(){
		

		if (!this.props.isAuthenticated) {
			return (
					<p>You must be logged in to view this. Click <Link to="/login">here</Link> to log back in.</p>
				)
		}

		
		
		return(
				<Container>
				{!this.state.certClicked &&
				<Container>	

				<h3>Dash Board</h3>
				<CardGroup deck>
				<Card border="info" className="mb-3" style={{maxWidth: '18rem'}}>
				  <CardHeader>{this.state.email}</CardHeader>
				  <CardBody className="text-info">
				    <CardTitle tag="h5">{this.state.firstname} {this.state.lastname}</CardTitle>
				    
				  </CardBody>
				</Card>

					{
						this.state.applications.map((application, i)=>{

							return(
									
									<Card onClick={this.statusClicked.bind(this, application.certificate, application.domain)} key={i} border='success' className="mb-3" style={{maxWidth: '18rem'}}>
														  <CardHeader>Application: {i+1}</CardHeader>
														  <CardBody className="text-success">
														    <CardTitle tag="h5">{application.certificate}</CardTitle>
														    <CardText>{application.status}</CardText>
														  </CardBody>
													</Card>
									
								)
						})
					}

				</CardGroup>
			</Container>
		}

		{
			this.state.certClicked &&
				<ApplicationFormInputs
							user={this.props.user}
							certificate={this.state.certName} 
							domain={this.state.domain}/>


		}
		</Container>
			
		)
		
	}

}

export default DashBoard