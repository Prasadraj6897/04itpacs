import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { Container, Row, Col, Input, Button, Card, CardBody } from 'mdbreact';
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
  MDBMask
} from 'mdbreact';


class Allcourses extends React.Component{

	constructor(props){
		super(props)
		this.state = {		
			
		}
	}

	render(){

		return(
			<div>
				<Container>
					<MDBContainer fluid>
						<MDBRow>
							<MDBCol lg="12" className="mb-r">
								<MDBCard narrow>
								<MDBView cascade className="mdb-color lighten-3 card-header">
									<h5 className="mb-0 font-weight-bold text-center text-white">Project Management Professional(PMP)</h5>
								</MDBView>
								<MDBCardBody className="text-black-50">
									<MDBRow>
										<MDBCol className="text-center" md="4">
											<MDBView>
												<img
													src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
													className="img-fluid"
													alt=""
												/>
												<MDBMask pattern={1} className="flex-center">
													<p className="white-text">patern 1</p>
												</MDBMask>
											</MDBView>
										</MDBCol>

										<MDBCol md="5">

											<div><span>Course Level :</span> School</div>
											<div id="MyMajorSubjects" class="CourseLevelGrpName CourseBasicLbl MyMajorSubjects" lang="Grade 7">
												<span>For :</span> Grade 7							
											</div>
											<div><span>Type :</span> Official</div>
											<div><span>Age From - To :</span> 7 and above</div>
											<div><span>Stream(s) :</span> Economics &amp; Business Studies</div>
											<div><span>Term Start :</span> May 08,2019</div>
											<div><span>Student Grade :</span> 37%</div>
											<div><span>Rating :</span> 0%</div>
											<div><span class="CourseInstitution CourseBasicLbl">Belongs to :</span> Anna University</div>
											<div><span>Allowed Students :</span> -</div>
											<div>
												<span>Enrolled Students :</span> 
												<a href="javascript:;" class="EnrolledCourseUsersList" alt="OA">6</a>
											</div>
											<div>
												<span>Pending Students :</span> 
												<a href="javascript:;" class="PendingCourseUsersList" alt="OA">-</a>
											</div>
											<div>
												<span>Description :</span>
												<p>Chart Course</p>
											</div>
											<div>
												<span>Search Tags : </span> 
												Chart Course
											</div>

										</MDBCol>
										
										<MDBCol md="3">

											<div class="Row">
												<span><i class="fa fa-video-camera FileTypeIcons"></i></span>
												<label>Video Lectures (0)</label>
											</div>
											<div class="Row">
												<span><i class="fa fa-file-text FileTypeIcons"></i></span>
												<label>Assignments (8)</label>
											</div>
											<div class="Row">
												<span><i class="fa fa-file FileTypeIcons"></i></span>
												<label>Handouts (0)</label>
											</div>
											<div class="Row">
												<span><i class="fa fa-desktop FileTypeIcons"></i></span>
												<label>Live Sessions (0)</label>
											</div>
											<div class="Row PriceContainer">
												<span class="PriceTag">$3.00</span>
											</div>
															
										</MDBCol>
									</MDBRow>
								</MDBCardBody>
								</MDBCard>
							</MDBCol>
						</MDBRow>
					</MDBContainer>
				</Container>
	        </div>
		)
	}

}

export default Allcourses;