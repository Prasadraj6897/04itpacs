import React from 'react';
import axios from 'axios'
import UsersList from './UsersList'
import RegisterForm from './RegisterForm'

class RegisterFormControl extends React.Component{

	constructor(props){
		super(props)
		this.state = { 
						users:[],
						firstname:'',
						lastname:'',
						email:""
					}
		this.getUsers = this.getUsers.bind(this)
		this.addUser = this.addUser.bind(this)
		this.handleFormChange = this.handleFormChange.bind(this)
	}

	getUsers(){
		axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`)
		.then((res)=>{this.setState({users:res.data.data})})
		.catch((err)=>{console.log(err)})
	}

	componentDidMount(){
		this.getUsers()
	}

	addUser(event){
		event.preventDefault()
		console.log('Form was submitted')
		const data = {
						firstname: this.state.firstname,
						lastname: this.state.lastname,
						email: this.state.email
						}
		axios.post(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`, data)
		.then((res)=>{
			this.getUsers()
			this.setState({firstname:'', lastname:'', email:''})
			})
		.catch((err)=>{console.log(err)})
	}

	handleFormChange(event){
		const obj ={}
		obj[event.target.name] = event.target.value
		this.setState(obj)

	}

	render(){

		return(
				<div className='container'>
					<div className='row'>
						<div className='col-md-4'>
							
							
							<h3>Register</h3>
							<hr/><br/>
							<RegisterForm 
								addUser={this.addUser}
								handleFormChange = {this.handleFormChange} 
								firstname={this.state.firstname}
								lastname={this.state.lastname}
								email={this.state.email} />


							<hr/><br/>
							<h3>All Users</h3>
							<hr/><br/>
							<UsersList users={this.state.users} />

						</div>
					</div>
				</div>
				)
	}
}


export default RegisterFormControl

