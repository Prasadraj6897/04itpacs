import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Row, Col, Input, Button, Card, CardBody } from 'mdbreact';
import {NavLink} from 'react-router-dom'
import axios from 'axios';
import {CardTitle, CardText, Jumbotron, Autocomplete, InputNumeric, Select, Fa, SelectInput, SelectOptions, SelectOption, Stepper, Step} from 'mdbreact';
import {level, type} from './selectLists.js'
import DatePickerPage from './DatePickerPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker'
import './newcourse.css'
import Logo from '../pages/coursepages/CourseLogo.js'
import TextField from '@material-ui/core/TextField';
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
  MDBStepper, MDBStep, MDBSelect, MDBIcon, MDBDatePicker, MDBChipsInput
} from 'mdbreact';

class NewCourse extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			formData:{
				coursetitle: '',
				coursedetails: '',
				courselevel:'',
				coursetype:'',
				startdate:{},
          		enddate:{}
			},
			course: {},
			formActivePanel1: 1,
      		formActivePanel1Changed: false,
      		file: '',
      		imagePreviewUrl: '',
      		imageurl: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(49).jpg',
      		showProfile: true,
      		levelitems:'',
      		gradelist:'',
      		juniorlists:'',
      		activeStep: 0,
  			one : true,
  			two : false,
  			three : false,	
  			four : false,
  			isActive1: "active",
  			isActive2: "disabled",
  			isActive3: "disabled",
  			departments:[],
      		courselevel: [
				{
					value: "School",
					text: "School"
				},
				{
					value: "11th-12th/ Junior College/ Diploma",
					text: "11th-12th/ Junior College/ Diploma"
				},
				{
					value: "University",
					text: "University"
				}
				,
				{
					value: "Professional",
					text: "Professional"
				},

				{
					value: "Others",
					text: "Others"
				}
			],
			coursetype: [
				{
					value: "Official",
					text: "Official"
				},
				{
					value: "Tuition/ Training",
					text: "Tuition/ Training"
				}
			],
			studentgroup: [
				{
					value: "Grade 1, Grade 2,...",
					text: "Grade 1, Grade 2,..."
				},
				{
					value: "Standard 1, Standard 2,...",
					text: "Standard 1, Standard 2,..."
				},
				{
					value: "Form 1, Form 2,...",
					text: "Form 1, Form 2,..."
				},
				{
					value: "class 1, class 2,...",
					text: "class 1, class 2,..."
				},
				{
					value: "Batch 1, Batch 2,...",
					text: "Batch 1, Batch 2,..."
				},
				{
					value: "year 1, year 2,...",
					text: "year 1, year 2,..."
				}
			],
			coursestream: [
				{
					value: "Arts",
					text: "Arts"
				},
				{
					value: "Classic",
					text: "Classic"
				},
				{
					value: "Drama",
					text: "Drama"
				},
				{
					value: "English",
					text: "English"
				},
				{
					value: "Maths",
					text: "Maths"
				},
				{
					value: "History",
					text: "History"
				},
				{
					value: "Music",
					text: "Music"
				}
			],
			agefrom: [
				{
					value: "1 Years",
					text: "1 Years"
				},
				{
					value: "2 Years",
					text: "2 Years"
				},
				{
					value: "3 Years",
					text: "3 Years"
				},
				{
					value: "4 Years",
					text: "4 Years"
				},
				{
					value: "5 Years",
					text: "5 Years"
				}
			],
			ageto: [
				{
					value: "And Above",
					text: "And Above"
				},
				{
					value: "And Below",
					text: "And Below"
				},
				{
					value: "Only",
					text: "Only"
				},
				{
					value: "2 Years",
					text: "2 Years"
				},
				{
					value: "3 Years",
					text: "3 Years"
				}
			],
			grade: [
				{
					value: "Grade 1",
					text: "Grade 1"
				},
				{
					value: "Grade 2",
					text: "Grade 2"
				}
			],
			standard: [
				{
					value: "Standard 1",
					text: "Standard 1"
				},
				{
					value: "Standard 2",
					text: "Standard 2"
				}
			],
			juniorlist: [
				{
					value: "Grade 11, Grade 12,...",
					text:  "Grade 11, Grade 12,..."
				},
				{
					value: "Standard 11, Standard 12,...",
					text: "Standard 11, Standard 12,..."
				},
				{
					value: "Junior College 1, Junoir College 2, Junior College 3",
					text: "Junior College 1, Junoir College 2, Junior College 3"
				},
				{
					value: "Diploma 1, Diploma 2, Diploma 3",
					text: "Diploma 1, Diploma 2, Diploma 3"
				},
				{
					value: "PU University 1, PU University 2",
					text: "PU University 1, PU University 1"
				}

			],
			juniorgradelist: [
				{
					value: "Grade 11",
					text: "Grade 11"
				},
				{
					value: "Grade 12",
					text: "Grade 12"
				}
			],
			juniorstandardlist: [
				{
					value: "Standard 11",
					text: "Standard 11"
				},
				{
					value: "Standard 12",
					text: "Standard 12"
				}
			],
			juniorcollegelist: [
				{
					value: "college year 1",
					text: "college year 1"
				},
				{
					value: "college year 2",
					text: "college year 2"
				},
				{
					value: "college year 3",
					text: "college year 3"
				}
			],
			universitylist: [
				{
					value: "Associate Degree",
					text: "Associate Degree"
				},
				{
					value: "Bachelor Degree",
					text: "Bachelor Degree"
				},
				{
					value: "Master Degree",
					text: "Master Degree"
				}
			]



		}

		this.handleFormChange = this.handleFormChange.bind(this)
		this.addnewcourses = this.addnewcourses.bind(this)
	}

	handleFormChange = (e) =>{
		const obj =this.state.formData
		obj[e.target.name] = e.target.value
		this.setState(obj)

	}
	addnewcourses(event){
		event.preventDefault()
			const fieldvalue = {
		      coursetitle: this.state.formData.coursetitle,
		      coursedetails: this.state.formData.coursedetails,
		      coursetype:this.state.formData.coursetype,
		      courselevel:this.state.formData.courselevel,
		      startdate:this.state.formData.startdate,
		      enddate:this.state.formData.enddate

   

		  	}
		    const options = {
		      url: `${process.env.REACT_APP_COURSES_SERVICE_URL}/courses/addcoursedetails`,
		      method: 'post',
		      data: fieldvalue,
		      headers: {
		        'Content-Type': 'application/json',
		        Authorization: `Bearer ${window.localStorage.authToken}`

  			  }

    		}
    		
    		console.log(fieldvalue)

    		return axios(options)
		    .then((res)=>{
		      console.log(res.data)
		    })
		    .catch((error)=>{console.log(error)})

	}


	get_courselevel(value){    
		//this.state.courselevel[value]
	     console.log(value)
	    // const levelitems = value.toString()
	    this.state.levelitems=value.toString()
	     alert(this.state.levelitems)

	   // items.courselevel = value.toString()
	    // this.setState({
	    //   courselevel
	    // })
	    
	}
	get_studentgroup(value){ 
		console.log(value)
		 this.state.gradelist=value.toString()
		 console.log(this.state.gradelist)

	}
	get_juniorgroup(value){    
		console.log(value)
		 this.state.juniorlists=value.toString()
		 console.log(this.state.juniorlists)

	}	

	get_coursetype(value){    
		const items = this.state.formData
		items.coursetype = value.toString()
		this.setState({
		  items,
		})

	}


swapFormActive = (a) => (param) => (e) => {
	console.log(param)
    this.setState({
      ['formActivePanel' + a]: param,
      ['formActivePanel' + a + 'Changed']: true
  	});
  	if(param == 2)
      {
      	
      this.state.isActive1 = "active"
       this.state.isActive2 ="active"
       this.state.isActive3 = "disabled"
      }
      else if(param == 3)
      {
      	console.log(param)
      this.state. isActive1 = "active"
       this.state.isActive2 = "active"
       this.state.isActive3 = "active"
      }
      else
      {
       this.state.isActive1 = "active"
       this.state.isActive2 = "disabled"
       this.state.isActive3 = "disabled"
      }

}

startdate(event, date){
    const items = this.state.formData
    items.startdate= date
    this.setState({
      items,
    })
    
}

enddate(event, date){
	const items = this.state.formData
	items.enddate= date
	this.setState({
	  items,
	})

}

toggle = () => { 
    this.setState({
		modal: !this.state.modal
    });
}

showFileUploadToggle = () => {
    this.setState({showProfile: !this.state.showProfile})
    this.toggle()
}

handleNextPrevClick = (a) => (param) => (e) => {
	
    this.setState({
      ['formActivePanel' + a] : param,
      // ['formActivePanel' + a + 'Changed']: false

  	})  	
  	if(param == 2)
      {
      	
      this.state.isActive1 = "active"
       this.state.isActive2 ="active"
       this.state.isActive3 = "disabled"
      }
      else if(param == 3)
      {
      	console.log(param)
      this.state. isActive1 = "active"
       this.state.isActive2 = "active"
       this.state.isActive3 = "active"
      }
      else
      {
       this.state.isActive1 = "active"
       this.state.isActive2 = "disabled"
       this.state.isActive3 = "disabled"
      }

}
 onClickButton(e) {
    alert(e);
  }
   isDisabled(){
    return true;   // for disable button return true otherwise false
  }

   submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  }

addnewdepartment(){
	this.setState({
		departments:[...this.state.departments,""]
	});
  }
handlechange(e,index){
	console.log(index)
	this.state.departments[index]=e.target.value
	this.setState({
		departments:this.state.departments
	})
}
handleremove(index){
	console.log(index)
	this.state.departments.splice(index,1)
	this.setState({
		departments:this.state.departments

	})
}

render(){
	 
		return(
			<MDBContainer fluid>
				<MDBRow>
					<MDBCol lg="12" className="mb-r">
					    <MDBCard narrow >
							<div>
								<Container>
									<h2 className="text-center pt-4 pb-5 mb-2">Add New Course</h2>
							      		<MDBStepper icon>
											<MDBStep far icon="folder-open" stepName="Course Details" id = "1" className={this.state.isActive1} onClick={this.swapFormActive(1)(1)}></MDBStep>
											<MDBStep icon="globe" stepName="Resources" id = "2" className={this.state.isActive2} onClick={this.swapFormActive(1)(2)}></MDBStep>
											<MDBStep icon="photo" stepName="Payment" id = "3" className={this.state.isActive3} onClick={this.swapFormActive(1)(3)}></MDBStep>
							        	</MDBStepper>	
											<form className="needs-validation" onSubmit={this.submitHandler} noValidate>
				              					 {this.state.formActivePanel1 == 1  &&
				              					 	(<Col md="12">
				              					 		<MDBRow>
					              					 		<MDBCol md="1" sm="1">
						              					 		<div className = "ali">
						              					 			<MDBIcon icon='book' float-center/>
					              					 			</div>
					              					 		</MDBCol>

					              					 		<MDBCol md="11" sm="3">
					              					 			<MDBInput type="text" className="form-control" label="coursetitle" required getValue={this.state.formData.coursetitle} onChange={e => this.handleFormChange} outline />
					              					 		</MDBCol>

				              					 			<MDBCol md="1">
				              					 			<div className = "ali">
				              					 			 	<MDBIcon icon='graduation-cap' />
			              					 			 	</div >
					              					 		</MDBCol>

					              					 		<MDBCol md="11">
																<div>
																    <MDBSelect
																		options={this.state.courselevel}
																		selected="Course Level"
																		getValue={this.get_courselevel.bind(this)}
																		onChange={() => alert('clicked')} 
																	/>
										          	        	</div>
									          	        	</MDBCol>

									          	        	{(this.state.levelitems=='School') &&(
									          	        		<MDBContainer fluid>
										          	        		<MDBRow>	
											          	        		<MDBCol md="1">
								              					 		</MDBCol>
										          	        			<MDBCol col-md="11">
										          	        				<MDBCol col-md="12">
									              					 			<div >
									              					 			 	<MDBSelect
																						options={this.state.studentgroup}
																						selected="Students Are Generally Grouped By"
																						getValue={this.get_studentgroup.bind(this)}
																						outline
																					/>
								              					 			 	</div >
							              					 			 	</MDBCol >
						              					 			 		{this.state.gradelist=='Grade 1, Grade 2,...' &&
								              					 			 	<MDBContainer fluid>
													          	        			<MDBRow>
										              					 			 	<MDBCol col-md="12">
												              					 			 	<MDBSelect
																									options={this.state.grade}
																									selected="Select Grade"
																									color="success"
																									outline
																								/>
																						</MDBCol>
									              					 			 	</MDBRow>
								              					 			 	</MDBContainer>
							              					 			 	}

							              					 			 	{this.state.gradelist=='Standard 1, Standard 2,...' &&
								              					 			 	<MDBContainer fluid>
													          	        			<MDBRow>
										              					 			 	<MDBCol col-md="12">
												              					 			 	<MDBSelect
																									options={this.state.standard}
																									selected="Select Standard"
																									color="success"
																									outline
																								/>
																						</MDBCol>
									              					 			 	</MDBRow>
								              					 			 	</MDBContainer>
							              					 			 	}
							              					 			 	<MDBContainer fluid>
												          	        			<MDBRow>
									              					 			 	<MDBCol col-md="6">
											              					 			 	<MDBSelect
																								options={this.state.agefrom}
																								selected="Age From"
																								color="success"
																								outline
																							/>
																					</MDBCol>
																					<MDBCol col-md="6">
																							<MDBSelect
																								options={this.state.ageto}
																								selected="Age to"
																								color="success"
																								outline
																							/>
									              					 			 	</MDBCol>
								              					 			 	</MDBRow>
							              					 			 	</MDBContainer>
							              					 			 	<MDBCol col-md="12">
								              					 			 	<MDBSelect
								              					 			 		multiple
																					options={this.state.coursestream}
																					selected="Course Stream"
																					color="success"
																					outline
																				/>
																			</MDBCol>
								              					 		</MDBCol>
							              					 		</MDBRow>
						              					 		</MDBContainer>
									          	        	)}
									          	        	{this.state.levelitems=='11th-12th/ Junior College/ Diploma' &&
				              					 			 	<MDBContainer fluid>
									          	        			<MDBRow>
										          	        			<MDBCol md="1" sm="1">
								              					 		</MDBCol>
						              					 			 	<MDBCol col-md="11">
								              					 			 	<MDBSelect
																					options={this.state.juniorlist}
																					selected="Select From Below List"
																					color="success"
																					getValue={this.get_juniorgroup.bind(this)}
																					outline
																				/>
																		</MDBCol>
																		{this.state.juniorlists=='Grade 11, Grade 12,...' &&
							              					 			 	<MDBContainer fluid>
												          	        			<MDBRow>
													          	        			<MDBCol md="1" sm="1">
											              					 		</MDBCol>
									              					 			 	<MDBCol col-md="11">
											              					 			 	<MDBSelect
																								options={this.state.juniorgradelist}
																								selected="Select From Below List"
																								color="success"
																								outline
																							/>
																					</MDBCol>
								              					 			 	</MDBRow>
							              					 			 	</MDBContainer>
			              					 			 				}
			              					 			 				{this.state.juniorlists=='Standard 11, Standard 12,...' &&
							              					 			 	<MDBContainer fluid>
												          	        			<MDBRow>
													          	        			<MDBCol md="1" sm="1">
											              					 		</MDBCol>
									              					 			 	<MDBCol col-md="11">
											              					 			 	<MDBSelect
																								options={this.state.juniorstandardlist}
																								selected="Select From Below List"
																								color="success"
																								outline
																							/>
																					</MDBCol>
								              					 			 	</MDBRow>
							              					 			 	</MDBContainer>
			              					 			 				}
			              					 			 				{this.state.juniorlists=='Junior College 1, Junoir College 2, Junior College 3' &&
							              					 			 	<MDBContainer fluid>
												          	        			<MDBRow>
													          	        			<MDBCol md="1" sm="1">
											              					 		</MDBCol>
									              					 			 	<MDBCol col-md="11">
											              					 			 	<MDBSelect
																								options={this.state.juniorcollegelist}
																								selected="Select From Below List"
																								color="success"
																								outline
																							/>
																					</MDBCol>

								              					 			 	</MDBRow>
							              					 			 	</MDBContainer>
		              					 			 					}
		              					 			 					 	<MDBContainer fluid>
							              					 			 		<MDBRow>
							              					 			 			<MDBCol md="1" sm="1">
											              					 		</MDBCol>
									              					 			 	<MDBCol col-md="11">
										              					 			 	<MDBSelect
										              					 			 		multiple
																							options={this.state.coursestream}
																							selected="Course Stream"
																							color="success"
																							outline
																						/>
																					</MDBCol>
																				</MDBRow>
																			</MDBContainer>
					              					 			 	</MDBRow>
				              					 			 	</MDBContainer>
			              					 			 	}
									          	        	{this.state.levelitems=='University' &&
								          	        			<MDBContainer fluid>
									          	        			<MDBRow>
										          	        			<MDBCol md="1" sm="1">
								              					 		</MDBCol>
						              					 			 	<MDBCol col-md="11">
								              					 			 	<MDBSelect
																					options={this.state.universitylist}
																					selected="Select From Below List"
																					color="success"
																					outline
																				/>
																		</MDBCol>
																	</MDBRow>
																	<MDBRow>
				              					 			 			<MDBCol md="1" sm="1">
								              					 		</MDBCol>
						              					 			 	<MDBCol col-md="11">
							              					 			 	<MDBSelect
							              					 			 		multiple
																				options={this.state.coursestream}
																				selected="Course Stream"
																				color="success"
																				outline
																			/>
																		</MDBCol>
																	</MDBRow>
																	<MDBRow>
										          	        			<MDBCol md="1" sm="1">
								              					 		</MDBCol>
																			<MDBCol col-md="11">
																				<div>
																					<MDBInput
																						type="text"
																						label="Enter Your Department"
																						rows="1"
																						outline 
																					/>
																				</div>
																			</MDBCol>
																	</MDBRow>
																	<MDBRow>
																		<MDBCol md="1" sm="1">
								              					 		</MDBCol>
								              					 		<MDBCol col-md="11">
								              					 			
																				<div>
																			        {
																						this.state.departments.map((department, index)=>{
																							return(
																								<div key={index}>
																									<span>
																										<MDBInput type="text" rounded value={department} onChange={(e)=>this.handlechange(e,index)} outline label="Enter Your Department"></MDBInput>
																			
																										<MDBIcon icon="trash" onClick={()=>this.handleremove(index)}></MDBIcon>
																									</span>
																								</div>

																							)
																						})

																			        }
																		        </div>
																	        
													        			<MDBBtn color="warning" rounded onClick={(e)=>this.addnewdepartment(e)}>ADD  Department</MDBBtn>
													        			</MDBCol>
													        		</MDBRow>
																</MDBContainer>
									          	        	}
									          	        	{this.state.levelitems=='Professional' &&
																<MDBContainer fluid>
									          	        			<MDBRow>
										          	        			<MDBCol md="1" sm="1">
										          	        			</MDBCol>
										          	        			<MDBCol col-md="11">
										          	        				<MDBContainer fluid>
										          	        					<MDBRow>
									              					 			 	<MDBCol col-md="6">
										              					 			 	<MDBSelect
																							options={this.state.agefrom}
																							selected="Age From"
																							color="success"
																							outline
																						/>
																					</MDBCol>
																					<MDBCol col-md="6">
																						<MDBSelect
																							options={this.state.ageto}
																							selected="Age to"
																							color="success"
																							outline
																						/>
									              					 			 	</MDBCol>
								              					 			 	</MDBRow>
							              					 			 	</MDBContainer>
						              					 			 	</MDBCol>
					              					 			 	</MDBRow>
				              					 			 	</MDBContainer>
									          	        	}
									          	        	{this.state.levelitems=='Others' &&
																<MDBContainer fluid>
									          	        			<MDBRow>
										          	        			<MDBCol md="1" sm="1">
										          	        			</MDBCol>
										          	        			<MDBCol col-md="11">
								              					 			<div>
																				<MDBInput
																					type="textarea"
																					label="Others"
																					rows="1"
																					outline 
																				/>
																				</div>
						              					 			 	</MDBCol>
					              					 			 	</MDBRow>
				              					 			 		<MDBContainer fluid>
						              					 			 	<MDBRow>
						              					 			 		<MDBCol md="1" sm="1">
										          	        				</MDBCol>
							              					 			 	<MDBCol col-md="11">
							              					 			 		<MDBContainer fluid>
										          	        						<MDBRow>
										              					 			 	<MDBCol col-md="6">
											              					 			 	<MDBSelect
																								options={this.state.agefrom}
																								selected="Age From"
																								color="success"
																								outline
																							/>
																						</MDBCol>
																						<MDBCol col-md="6">
																							<MDBSelect
																								options={this.state.ageto}
																								selected="Age to"
																								color="success"
																								outline
																							/>
										              					 			 	</MDBCol>
									              					 			 	</MDBRow>
					              					 			 				</MDBContainer>
						              					 			 		</MDBCol>
					              					 			 		</MDBRow>
				              					 			 		</MDBContainer>
				              					 			 	</MDBContainer>
									          	        	}

															<MDBCol md="1">
															<div className = "ali">
																<Fa icon='balance-scale' />
															</div>
															</MDBCol>

															<MDBCol md="11">
																<div>
																	<MDBSelect
																		options={this.state.coursetype}
																		selected="Course Type"
																	/>
																</div>
															</MDBCol>
															<MDBCol md="1">
															<div className = "ali">
																<Fa icon='pencil' />
															</div>
															</MDBCol>

															<MDBCol md="11">
																<div>
																	<MDBInput
																		type="textarea"
																		label="Enter course description"
																		rows="1"
																		getValue={this.state.formData.coursedetails}
																		onChange={e => this.handleFormChange} 
																	outline />
																</div>
															</MDBCol>
															
															<MDBCol md="1">
															<div className = "ali">
																<Fa icon='calendar' />
															</div>
															</MDBCol>
															<MDBCol md="5">
															  <MuiThemeProvider>
											                    <DatePicker 
											                      style={{borderBottom: '1px solid #bdbdbd', height: '3rem'}} 
											                      id="startdate" textFieldStyle={{width: '100%'}} 
											                      hintText="Course Start date" 
											                      onChange={this.startdate.bind(this)}
											                      value={this.state.formData.startdate}>
											                      </DatePicker>
											                  </MuiThemeProvider>
															</MDBCol>
															<MDBCol md="5">
															  <MuiThemeProvider>
											                    <DatePicker 
											                      style={{borderBottom: '1px solid #bdbdbd', height: '3rem'}} 
											                      id="startdate" textFieldStyle={{width: '100%'}} 
											                      hintText="Course End date" 
											                      onChange={this.enddate.bind(this)}
											                      value={this.state.formData.enddate}>
										                      	</DatePicker>
											                  </MuiThemeProvider>
															</MDBCol>
														</MDBRow>  
														<br/>
														
														<MDBRow>
															<MDBCol md="1">
															</MDBCol>
															<MDBCol md="11">
																<Logo 
																	sendToggleFunction={this.showFileUploadToggle}
																	previousProfileImg={this.state.imageurl} 
																/>
															</MDBCol>
														</MDBRow>
														<br/>  
														<hr/>  
														<MDBRow>
															<MDBCol md="1">
																<div className = "ali">
																	<Fa icon='pencil' />
																</div>
															</MDBCol>
															<MDBCol md="11">
								                              	<div>
																	<MDBChipsInput placeholder="Enter tags to search" secondaryPlaceholder="Enter a tag" outline/>
														        </div>
													        </MDBCol>
												        </MDBRow>
													        <br/>
													       	
												        <div>
									                    	<MDBBtn color="cyan" type="primary" onClick={this.addnewcourses}>ADD</MDBBtn>
									                    	<MDBBtn color="secondary" rounded className="float-right" onClick={this.handleNextPrevClick (1)(2)}  type="submit" >next</MDBBtn>
									                 	 </div>
									            	     
									          </Col>)}
												 	 	{this.state.formActivePanel1 == 2  &&	
												 	 		(<Col md="12">
												 	 				<h2> second page</h2>
												 	 				<div>
												 	 					<MDBBtn color="primary" rounded onClick={this.handleNextPrevClick (1)(1)}  type="submit" >Previous</MDBBtn>
												                    	<MDBBtn color="secondary" rounded className="float-right" onClick={this.handleNextPrevClick (1)(3)}  type="submit" >next</MDBBtn>
												                 	 </div>
												 	 	</Col>)}
												 	 	{this.state.formActivePanel1 == 3  &&	
												 	 		(<Col md="12">
												 	 				<h2> Third page</h2>
												 	 				<div>
												 	 					<MDBBtn color="primary" rounded onClick={this.handleNextPrevClick (1)(2)}  type="submit" >Previous</MDBBtn>
												                    	<MDBBtn color="success" rounded className="float-right" type="submit" >Save</MDBBtn>
												                 	 </div>
												 	 	</Col>)}
													
							                         	
							                      			
											</form>
												
								</Container>
							</div>
						</MDBCard >

					</MDBCol>
				</MDBRow>
			</MDBContainer>

		)

	}

}

export default NewCourse