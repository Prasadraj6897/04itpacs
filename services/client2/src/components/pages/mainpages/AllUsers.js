import React from 'react'
import {Link} from 'react-router-dom'


const AllUsers = (props) =>{

	if (!props.isAuthenticated){
		return (
				<p>You must be logged in to view this. Click <Link to="/login">here</Link> to log back in.</p>
			)
	}

	return (
			<div>

				<table striped bordered condensed hover>
					<thead>
						<tr>
							<th>User Id</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Admin</th>
						</tr>
					</thead>

					<tbody>

						{
							props.users.map((user)=>{
								return (
										<tr key={user.id}>
											<td>{user.id}</td>
											<td>{user.firstname}</td>
											<td>{user.lastname}</td>
											<td>{user.email}</td>
											<td>{String(user.admin)}</td>										
										</tr>
									)
							})
						}

					</tbody>
				</table>
			</div>
		)
}

export default AllUsers