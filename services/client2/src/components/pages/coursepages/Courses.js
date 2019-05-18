import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import { 
  MDBRow,
  MDBCol,
  MDBCard,
  MDBView,
  MDBCardBody,
  MDBInput,
  MDBContainer,
  MDBAvatar,
  MDBBtn,
  MDBFileInput,
  MDBModal,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from 'mdbreact';

import axios from 'axios';

class Courses extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			redirect: false,
			courses: [],
			course: {}
		}
		this.getnewcourses = this.getnewcourses.bind(this)
	}

	getnewcourses(event){

		const options = {
			url: `${process.env.REACT_APP_COURSES_SERVICE_URL}/courses/getcoursedetails`,
			method: 'get',
			// data: fieldvalue,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${window.localStorage.authToken}`
			}
		}

		return axios(options)
			.then((res)=>{
				this.setState({
					courses: res.data.courses	
				})
			})
			.catch((error)=>{console.log(error)})
	}

	componentDidMount(){
		this.getnewcourses()
	}

	setRedirect = () => {
		this.setState({
			redirect: true
		})
	}

	renderRedirect = () => {
		if (this.state.redirect) {
			return <Redirect to='/allcourse' />
		}
	}

	render(){
    	return(
    		<MDBContainer>
    			<h2 className="text-center pt-4 pb-5 mb-2">My Courses</h2>
    			  {this.renderRedirect()}
		          <MDBRow>
		            {
						this.state.courses.map((course, i)=>{
							return(
				              <MDBCol onClick={this.setRedirect} md="4">
				                <MDBCard className="mb-2">
				                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
				                  <MDBCardBody>
				                    <MDBCardTitle>{course.coursetitle}</MDBCardTitle>
				                    <MDBCardText>
				                      		{course.coursedetails}
				                    </MDBCardText>
				                    <MDBBtn color="primary">Read More</MDBBtn>
				                  </MDBCardBody>
				                </MDBCard>
				              </MDBCol>
							)
						})
					}		           
		          </MDBRow>
		    </MDBContainer>
    	)
    }
}


export default Courses;