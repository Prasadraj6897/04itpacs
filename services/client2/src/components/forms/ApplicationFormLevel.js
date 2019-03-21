import React from 'react'
import {ListGroup, ListGroupItem, FlippingCard, Fa, Avatar, CardUp, Card, CardBody, Container} from 'mdbreact';
import AboutUs_Main from '../pages/img/AboutUs_Main.svg'

class ApplicationFormLevel extends React.Component {

	constructor(props){
		super(props)

		this.state = {
			flipped:false
		}

		this.handleFlipping = this.handleFlipping.bind(this)
		

	}

	handleFlipping(){
		
		if (!this.state.flipped){
			this.setState({
			flipped:true
		})}

		 if (this.state.flipped){
			this.setState({
			flipped:false
		})}
		}

	


	render(){

		const {domain, level, certificates} = this.props


		return(
				<Container className='mt-5'>

					<FlippingCard flipped={this.state.flipped} className="text-center h-100 w-100" style={{maxWidth: '22rem', height:'890px' }}>
					    
					    <Card className="face front">
					      <CardUp>
					        <img  className="card-img-top" src={AboutUs_Main} alt="itpacs" />
					      </CardUp>

					      <CardBody>

					        <h4 className="font-weight-bold mb-3">{level}</h4>
					        <p className="font-weight-bold blue-text">{domain}</p>
					        <a className="rotate-btn" data-card="card-1" onClick={this.handleFlipping}><Fa icon="repeat"/> Click here to select a certificate</a>
					      

					      </CardBody>
					  </Card>
					  
					  <Card className="face back">
					    <CardBody>
					      <h4 className="font-weight-bold">{level}</h4>				

					      <ListGroup>
					      {
					      	certificates.map((cert, index)=>{
					      		return (
					      				
					      				<ListGroupItem key={index} onClick={()=>this.props.onClick(cert)} hover style={{ fontSize: '12px'}}>{cert}</ListGroupItem>
					      				)
					      	})
					      }
					      </ListGroup>


					      <a className="rotate-btn" data-card="card-1" onClick={this.handleFlipping}><Fa icon="undo"/> Click here to rotate back</a>
					    
					    </CardBody>
					  </Card>			
					</FlippingCard>
					</Container>
			
			

			
			)
	}
}

export default ApplicationFormLevel