import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import {registerFormRules, loginFormRules, resetpasswordFormRules, updatepasswordFormRules} from './form_rules.js'
import { MDBBtn, Container, Row, Col, Input, Button, Card, CardBody } from 'mdbreact';
import './FormErrors.css'
import InputFieldError from './InputFieldError'


class LoginRegisterForm extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			formData:{
				firstname: '',
				lastname: '',
				email: '',
				confirmPassword:'',
				password:''
			},
			registerFormRules: registerFormRules,
			loginFormRules: loginFormRules,
			resetpasswordFormRules: resetpasswordFormRules,
			updatepasswordFormRules: updatepasswordFormRules,
			valid:false,
			resetpasswordMailSent: false,
			passwordUpdated: false

		}

	this.handleFormChange = this.handleFormChange.bind(this)
	this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this)
	}

	
	componentDidMount(){
		this.clearForm()
	}

	clearForm(){
		this.setState({
			formData: {
				firstname: '',
				lastname: '',
				email: '',
				password:'',
				confirmPassword:''
			}
		})
	}

	componentWillReceiveProps(nextProps){
		if(this.props.formType !== nextProps.formType){
			this.clearForm()
			this.resetRules()
		}
	}

	handleFormChange(event){
		const obj =this.state.formData
		obj[event.target.name] = event.target.value
		this.setState(obj)
		this.validForm()

	}


	handleUserFormSubmit(event){
		event.preventDefault()
		let formType = window.location.href.split('/').reverse()[0]
		if (formType.length > 20){
			formType = window.location.href.split('/').reverse()[1]
		}
		console.log(formType)
		let data = {

		}
		if ((formType==='login') || (formType==='register') || (formType==='resetpassword')){
			
			data.email= this.state.formData.email
			// password: this.state.formData.password
			
		}

		if (formType==='resetpassword'){
			this.setState({resetpasswordMailSent:true})
		}

		if(formType==='updatepassword'){
			data.token = this.props.match.params.token
			data.password = this.state.formData.password
			
		}
		

		if (formType=='login'){
			data.password= this.state.formData.password
		}

		if (formType === 'register'){
			data.firstname = this.state.formData.firstname
			data.lastname = this.state.formData.lastname
			data.password = this.state.formData.password
		}



		const url = `${process.env.REACT_APP_USERS_SERVICE_URL}/auth/${formType}`
		axios.post(url, data)
		.then((res) => {
			this.clearForm()

			if ((formType==='login') || (formType==='register')){
				this.props.loginUser(res.data.auth_token)	
			}

			if (formType==='resetpassword'){
				console.log(res.data.message)
				this.props.createMessage({name:res.data.message, type:'success'})

			}

			if (formType==='updatepassword'){
				console.log(res.data.message)
				this.props.createMessage({name:res.data.message, type:'success'})
				this.setState({passwordUpdated:true})
			}

					
			
		})
		.catch((err)=>{
			
			if (formType==='login'){
				this.props.createMessage({name:'Login Failed', type:'danger'})
			}

			if (formType==='register'){
				console.log(err)
				this.props.createMessage({name:'This user already exists.', type:'danger'})
			}

			if (formType==='resetpassword'){
				this.props.createMessage({name:'This user is not found.', type:'danger'})
			}

			if (formType==='updatepassword'){
				this.props.createMessage({name:'Unable to update password.', type:'danger'})
			}

		})
	}

	validForm(){

		const formData = this.state.formData
		this.resetRules()

		if(this.props.formType === 'register'){
			const formRules = this.state.registerFormRules
			
			if ((formData.firstname.length >2) && (this.validateString(formData.firstname))){
				formRules[0].valid = true
			}

			if ((formData.lastname.length >2) && (this.validateString(formData.lastname))){
				formRules[1].valid = true
			}

			if (formData.email.length >5){
				formRules[2].valid = true
			}

			if (this.validateEmail(formData.email)){
				formRules[3].valid = true
			}

			if (formData.password.length >7) {
				formRules[4].valid = true
			}

			if (formData.confirmPassword === formData.password && formData.confirmPassword !=='' && formData.password !==''){
				formRules[5].valid = true
			}

			this.setState({registerFormRules: formRules})
			if (this.allTrue()){
				this.setState({valid:true})
			}
		}

		if (this.props.formType==='login'){
				const formRules = this.state.loginFormRules

				if (formData.email.length >5){
				formRules[0].valid = true
				}

				if (formData.password.length >7) {
				formRules[1].valid = true
				}

				this.setState({loginFormRules: formRules})
				if (this.allTrue()){
				this.setState({valid:true})
			}
		}

		if (this.props.formType==='resetpassword'){
				const formRules = this.state.resetpasswordFormRules

				if (formData.email.length >5){
				formRules[0].valid = true
				}

				if (this.validateEmail(formData.email)){
				formRules[1].valid = true
			}

				this.setState({resetpasswordFormRules: formRules})

				if (this.allTrue()){
				this.setState({valid:true})
			}


			}

		if (this.props.formType==='updatepassword'){
			const formRules = this.state.updatepasswordFormRules

			if (formData.password.length >7) {
				formRules[0].valid = true
			}

			if (formData.confirmPassword === formData.password && formData.confirmPassword !=='' && formData.password !==''){
				formRules[1].valid = true
			}


			this.setState({updatepasswordFormRules: formRules})
			if (this.allTrue()){
				this.setState({valid:true})
			}

			}


	}

	validateString(aString){

		var re = /^[A-Za-z\'\s\.\,]+$/
		return re.test(aString)
	}

	validateEmail(email){
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

		return re.test(email)
	}

	resetRules(){
		if (this.props.formType==='login'){
			const formRules = this.state.loginFormRules
			for (const rule of formRules){
				rule.valid = false
			}
		this.setState({loginFormRules: formRules})
		}
		if (this.props.formType==='register'){
			const formRules = this.state.registerFormRules
			for (const rule of formRules){
				rule.valid = false
			}
		this.setState({registerFormRules:formRules})
		}
		if (this.props.formType==='resetpassword'){
			const formRules = this.state.resetpasswordFormRules
			for (const rule of formRules){
				rule.valid = false
			}
		this.setState({resetpasswordFormRules:formRules})
		}
		if (this.props.formType==='updatepassword'){
			const formRules = this.state.updatepasswordFormRules
			for (const rule of formRules){
				rule.valid = false
			}
		this.setState({updatepasswordFormRules:formRules})
		}
		this.setState({valid:false, resetpasswordMailSent:false, passwordUpdated: false})		
	}

	allTrue(){
		let formRules = registerFormRules
		if (this.props.formType ==='login'){
			formRules = loginFormRules
		}

		if (this.props.formType ==='resetpassword'){
			formRules = resetpasswordFormRules
		}

		if (this.props.formType ==='updatepassword'){
			formRules = updatepasswordFormRules
		}


		for (const rule of formRules){
			if(!rule.valid) return false
		}
		return true
	}

	render() {


		if (this.props.isAuthenticated){
			
			return <Redirect to='/apply' />
		}

		if (this.state.passwordUpdated) {
			
			return <Redirect to='/login' />
		}

		let formRules = this.state.loginFormRules

		if (this.props.formType === 'register'){
			formRules = this.state.registerFormRules
		}

		if (this.props.formType === 'resetpassword'){
			formRules = this.state.resetpasswordFormRules
		}

		if (this.props.formType === 'updatepassword'){
			formRules = this.state.updatepasswordFormRules
		}




	return (
			<div>
				
				<h2 style={{'textTransform': 'capitalize'}}>{this.props.formType === 'resetpassword'? "Reset Password": this.props.formType}</h2>
				<hr /><br />

					<Container>
				        <Row>
				          <Col md="6">
				            <Card>
				              <CardBody>
				               
			                  {this.state.resetpasswordMailSent &&
			                	<div className="grey-text">
			                		<p className="h4 text-center py-4">Check your mail</p> 
			                		<p>We have sent you an email with instructions to reset your password. Please follow the instructions in the mail. </p>
			                	</div>

			                	}

			              		{this.state.passwordUpdated &&
			                	<div className="grey-text">
			                		<p className="h4 text-center py-4">Password updated</p> 
			                		<p>Login below using your new password. </p>
			                	</div>

			                	}

			                	{!this.state.resetpasswordMailSent &&
				                <form onSubmit={(event)=>this.handleUserFormSubmit(event)}>               
				    

				                {this.props.formType === 'register' &&
				                 
				                 <div className="grey-text">				                  
					                  <p className="h4 text-center py-4">Sign up</p> 
					                    <div className='form-group'>
						                    
						                    <Input 
						                    	name='firstname'
						                    	label="Your first name"
						                    	icon="user" 
						                    	group 
						                    	type="text" 
						                    	validate 
						                    	error="wrong" 
						                    	success="right"
						                    	value={this.state.formData.firstname}
						                    	className="form-control input-lg"
						                    	required
												onChange={this.handleFormChange} />
											

											<InputFieldError 
												formRulesObject = {formRules[0]} />

										</div>

										<div className='form-group'>
										<Input 
					                    	name='lastname'
					                    	label="Your last name"
					                    	icon="user" 
					                    	group 
					                    	type="text" 
					                    	validate 
					                    	error="wrong" 
					                    	success="right"
					                    	value={this.state.formData.lastname}
					                    	className="form-control input-lg"
					                    	required
											onChange={this.handleFormChange} />

											<InputFieldError 
												formRulesObject = {formRules[1]} />

										</div>




									</div>
									}	

									{((this.props.formType === 'login') || (this.props.formType === 'register') || (this.props.formType === 'resetpassword')) &&


									 <div className='form-group grey-text'>
					                    <Input 
					                    	name='email'
					                    	label="Your email" 
					                    	icon="envelope" 
					                    	group 
					                    	type="email" 
					                    	validate 
					                    	error="wrong" 
					                    	success="right"
					                    	required 
											value={this.state.formData.email}
											onChange={this.handleFormChange} />

											{this.props.formType === 'register' &&
											<div>
												<InputFieldError 
													formRulesObject = {formRules[2]} />
												<InputFieldError 
													formRulesObject = {formRules[3]} />
											</div>
											}

											{this.props.formType === 'login' &&
												<InputFieldError 
												formRulesObject = {formRules[0]} />
											}

											{this.props.formType === 'resetpassword' &&
												<div>
												<InputFieldError 
												formRulesObject = {formRules[0]} />
												<InputFieldError 
												formRulesObject = {formRules[1]} />
												</div>
											}

										</div>
									}

									{this.props.formType === 'login' &&

									
										<div className='form-group grey-text'>
							                    <Input 
							                    	name='password'
							                    	label="Your password" 
							                    	icon="lock" 
							                    	group 
							                    	type="password" 
							                    	validate
							                    	required
							                    	value={this.state.formData.password}
							                    	onChange={this.handleFormChange} />

							                    	<p className="font-small blue-text d-flex justify-content-end pb-3">
										                Forgot
										                <a href="/resetpassword" className="blue-text ml-1">
										                  Password?
										                </a>
										              </p>

							                    	{this.props.formType === 'register' &&
							                    	<InputFieldError 
													formRulesObject = {formRules[4]} />
													}

													{this.props.formType === 'login' &&
													
													<InputFieldError 
													formRulesObject = {formRules[1]} />
													}
						                    </div>
						                   
						                }

										{this.props.formType === 'register' &&
										  
										<div>
										<div className='form-group grey-text'>
							                    <Input 
							                    	name='password'
							                    	label="Your password" 
							                    	icon="lock" 
							                    	group 
							                    	type="password" 
							                    	validate
							                    	required
							                    	value={this.state.formData.password}
							                    	onChange={this.handleFormChange} />

							                    	<p className="font-small blue-text d-flex justify-content-end pb-3">
										                Forgot
										                <a href="/resetpassword" className="blue-text ml-1">
										                  Password?
										                </a>
										              </p>

							                    	{this.props.formType === 'register' &&
							                    	<InputFieldError 
													formRulesObject = {formRules[4]} />
													}

													{this.props.formType === 'login' &&
													
													<InputFieldError 
													formRulesObject = {formRules[1]} />
													}
						                    </div>

										  <div className='form-group grey-text'>
											  <Input 
						                    	name='confirmPassword'
						                    	label="Confirm your password" 
						                    	icon="lock" 
						                    	group 
						                    	type="password"						                    	
						                    	required 
												value={this.state.formData.confirmPassword}
												onChange={this.handleFormChange} />

												<InputFieldError 
												formRulesObject = {formRules[5]} />

											</div>
										</div>
										}

										{this.props.formType === 'updatepassword' &&
										
											<div>
												<div className='form-group grey-text'>
								                    <Input 
								                    	name='password'
								                    	label="New password" 
								                    	icon="lock" 
								                    	group 
								                    	type="password" 
								                    	validate
								                    	required
								                    	value={this.state.formData.password}
								                    	onChange={this.handleFormChange} />

								                    	
													{this.props.formType === 'updatepassword' &&
														
														<InputFieldError 
														formRulesObject = {formRules[0]} />										
														
														}
							                    </div>

							                    <div className='form-group grey-text'>
												  <Input 
							                    	name='confirmPassword'
							                    	label="Confirm your new password" 
							                    	icon="lock" 
							                    	group 
							                    	type="password"						                    	
							                    	required 
													value={this.state.formData.confirmPassword}
													onChange={this.handleFormChange} />

													<InputFieldError 
													formRulesObject = {formRules[1]} />

												</div>
											</div>


						                }

															                  
				                  
				                 { this.props.formType === 'login' &&
				                  <div className="text-center py-4 mt-3">
				                    <Button color="cyan" type="submit" disabled={!this.state.valid}>Login</Button>
				                  </div>
				              	}

				              	{ this.props.formType === 'register' &&
				                  <div className="text-center py-4 mt-3">
				                    <Button color="cyan" type="submit" disabled={!this.state.valid}>Register</Button>
				                  </div>
				              	}

				             	{ this.props.formType === 'resetpassword' &&
				                  <div className="text-center py-4 mt-3">
				                    <Button color="cyan" type="submit" disabled={!this.state.valid}>Reset Password</Button>
				                  </div>
				              	}

				              	{ this.props.formType === 'updatepassword' &&
				                  <div className="text-center py-4 mt-3">
				                    <Button color="cyan" type="submit" disabled={!this.state.valid}>Update Password</Button>
				                  </div>
				              	}



				                </form>
				               }
				              </CardBody>
				            </Card>
				          </Col>
				        </Row>
				      </Container>




				</div>
		)
	}
}

export default LoginRegisterForm