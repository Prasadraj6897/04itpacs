<form onSubmit={(event)=>this.handleUserFormSubmit(event)}>
				{ this.props.formType === 'register' &&
					<div>
						<div className='form-group'>
							<input 
								name = "firstname"
								className="form-control input-lg"
								type="text"
								placeholder="Enter first name"
								required 
								value={this.state.formData.firstname}
								onChange={this.handleFormChange} />						
						</div>
						
						<div className="form-group">
						<input
							name = "lastname"
							className="form-control input-lg"
							type="text"
							placeholder="Enter last name"
							required 
							value={this.state.formData.lastname}
							onChange={this.handleFormChange} />
						</div>
					</div>
					}
					<div className="form-group">
					<input
						name = "email"
						className="form-control input-lg"
						type="email"
						placeholder="Enter your email address"
						required 
						value={this.state.formData.email}
						onChange={this.handleFormChange} />
					</div>
					<div className="form-group">
					<input
						name = "password"
						className="form-control input-lg"
						type="password"
						placeholder="Choose a password"
						required 
						value={this.state.formData.password}
						onChange={this.handleFormChange} />
					</div>
					<input 
						type="submit"
						className="btn btn-primary btn-lg btn-block"
						value="Submit" 
						disabled={!this.state.valid}/>
				</form>



	<FormErrors 
		formType={this.props.formType}
		formRules = {formRules} />