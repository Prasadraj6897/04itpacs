import React from 'react'
import {Container, Row} from 'mdbreact'

class PanelPage extends React.Component {

	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className="feature-wrapper bg-primary pt-3 pb-3 mt-3 mt-lg-0 blue-gradient">
       		 <Container>
         		 <Row>
	                  <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
	                      <i className={this.props.textOneFa}></i>
	                  </div>
	                  <div className="col-sm-12 col-md-3 text-center text-white text-md-left text-uppercase mb-3 mb-md-0">
	                      <p>{this.props.textOne}</p>
	                  </div>
	                  <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
	                      <i className={this.props.textTwoFa}></i>
	                  </div>
	                  <div className="col-sm-12 col-md-3 text-center text-white text-md-left text-uppercase mb-3 mb-md-0">
	                      <p>{this.props.textTwo}</p>
	                  </div>
	                  <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
	                      <i className={this.props.textThreeFa}></i>
	                    </div>
	                  <div className="col-sm-12 col-md-3 text-center text-white text-md-left text-uppercase mb-3 mb-md-0">
	                      <p>{this.props.textThree}</p>
	                  </div>
          </Row>
        </Container>
      </div>

				)
	}
}

export default PanelPage