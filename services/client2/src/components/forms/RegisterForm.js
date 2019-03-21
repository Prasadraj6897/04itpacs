import React from 'react'


const RegisterForm = (props)=>{

	return(
			<form onSubmit={(event)=>props.addUser(event)} >
				<div className="form-group">
					<input
						name = "firstname"
						className="form-control input-lg"
						type="text"
						placeholder="Enter first name"
						required 
						value={props.firstname}
						onChange={props.handleFormChange} />
				</div>
				<div className="form-group">
					<input
						name = "lastname"
						className="form-control input-lg"
						type="text"
						placeholder="Enter surname"
						required 
						value={props.lastname}
						onChange={props.handleFormChange} />
				</div>
				<div className="form-group">
					<input
						name = "email"
						className="form-control input-lg"
						type="email"
						placeholder="Enter your email address"
						required 
						value={props.email}
						onChange={props.handleFormChange} />
				</div>
				<input 
					type="submit"
					className="btn btn-primary btn-lg btn-block"
					value="Submit" 
					disabled={!this.state.valid}/>
			</form>
			)
}

export default RegisterForm

