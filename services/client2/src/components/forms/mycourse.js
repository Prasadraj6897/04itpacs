import React from 'react'
import {Link} from 'react-router-dom'
import { MDBBtn, Container, Row, Col, Input, Button, Card, CardBody } from 'mdbreact';
import {NavLink} from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faChessPawn, faChessQueen, faChessKing} from '@fortawesome/fontawesome-free-solid'


class MyCourse extends React.Component {

constructor(props){
		super(props)

		
	}

render(){
			return(
						<div>
							<Container>
									<h2 className="text-center pt-4 pb-5 mb-2">My Course</h2>
								<Row>
									<Col md="6">
										<Card>
					              			<CardBody>
				              					<form>	<div>
														    <NavLink to="/certifications/1/1">
											                    <FontAwesomeIcon icon={faChessPawn} size='1x'/>
											                    <span>Associate</span>
									                   		</NavLink>
								                   		</div>	
														<Button color="success" type="submit">ADD</Button>
												</form>
											</CardBody>
										</Card>
					              			
									</Col>
								</Row>
							</Container>
						</div>
			)

		}


}

export default MyCourse