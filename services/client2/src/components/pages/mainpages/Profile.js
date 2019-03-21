import React from 'react';
import axios from 'axios'
import Avatar from './AvatarProfile.js'
import AWS from'aws-sdk'
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
} from 'mdbreact';

import './Profile.css';

AWS.config.update({ accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY, secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY});

const s3 = new AWS.S3();

class PV2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null,
      selectedFile: '',
      imageurl: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-4.jpg',
      showProfile: true,
      username:'',
      firstname:'',
      lastname:'',
      company:'',
      job:'',
      city:'',
      country:'',
      institute:'',
      aboutme:'',
      imageBorder:'',
    }
    this.getProfileImage = this.getProfileImage.bind(this)
  }

  getProfileImage(event){
    const options = {
      url: `${process.env.REACT_APP_USERS_SERVICE_URL}/users/getprofile`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.authToken}`
      }
    }
    return axios(options)
    .then((res)=>{
      this.setState({
        imageurl: res.data.imgUrl,
        imageBorder: res.data.imgBorder,
      })
    })
    .catch((error)=>{console.log(error)})
  }

  componentDidMount(){
      this.getProfileImage()
  }

  showFileUploadToggle = () => {
    this.setState({showProfile: !this.state.showProfile})
    this.getProfileImage()
  }

  deleteProfileImageS3 = e => {

    const filename = this.state.imageurl
    const file = filename.split('/').pop();
    var params1 = {
      Bucket: process.env.REACT_APP_S3_BUCKET,
      Key: file
      /* where value for 'Key' equals 'pathName1/pathName2/.../pathNameN/fileName.ext' - full path name to your file without '/' at the beginning */
    };

    s3.deleteObject(params1, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data); // successful response
    });
    this.deleteProfileImageDBData()
  }

  deleteProfileImageDBData = e => {
    const options = {
      url: `${process.env.REACT_APP_USERS_SERVICE_URL}/users/deleteprofile`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.authToken}`
      }
    }
    return axios(options)
    .then((res)=>{
      console.log(res.data)
      this.setState({
        imageurl: res.data.status
      })
    })
    .catch((error)=>{console.log(error)})
  }

  addAccountDetails = e => {
    e.preventDefault();
    const fieldval = {
      username: this.state.username,
      firstname: this.state.firsname,
      lastname: this.state.lastname,
      company: this.state.company,
      job: this.state.job,
      city: this.state.city,
      country: this.state.country,
      aboutme: this.state.aboutme,
      institute: this.state.institute,
    }
    const options = {
      url: `${process.env.REACT_APP_USERS_SERVICE_URL}/users/insertaccountdetails`,
      method: 'post',
      data: fieldval,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.authToken}`
      }
    }
    return axios(options)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((error)=>{console.log(error)})
  }

  handleChange = (e) => {
    const obj ={}
    obj[e.target.name] = e.target.value
    this.setState(obj)
  }

  render(){
    return (
      <div id="profile-v2" className="mb-5">
         <MDBContainer fluid>
             <MDBRow>
                 <MDBCol lg="4" className="mb-4">
                     <MDBCard narrow>
                         <MDBView cascade className="mdb-color lighten-3 card-header">
                             <h5 className="mb-0 font-weight-bold text-center text-white">Edit Photo</h5>
                         </MDBView>

                        {this.state.showProfile &&
                         <MDBCardBody className="text-center">
                            
                             <MDBAvatar tag="img" style={{borderRadius: this.state.imageBorder+'px'}} src={this.state.imageurl} alt="User Photo"  className="z-depth-1 mb-3 mx-auto"/>

                             <p className="text-muted"><small>Profile photo will be changed automatically</small></p>
                             <MDBBtn color="info" onClick={this.showFileUploadToggle} rounded size="sm">Upload New Photo</MDBBtn>
                             <MDBBtn color="danger" onClick={this.deleteProfileImageS3} rounded size="sm">Delete</MDBBtn>
                         </MDBCardBody>
                        } 

                        {!this.state.showProfile &&
                          <MDBCardBody className="text-center">
                            <Avatar 
                              sendToggleFunction={this.showFileUploadToggle}
                              previousProfileImg={this.state.imageurl} 
                            />
                          </MDBCardBody>
                        }
                     </MDBCard>
                 </MDBCol>

                 <MDBCol lg="8" className="mb-r">

                     <MDBCard narrow>

                        <MDBView cascade className="mdb-color lighten-3 card-header">
                             <h5 className="mb-0 font-weight-bold text-center text-white">Edit Account Details</h5>
                         </MDBView>
                         <MDBCardBody className="text-center">
                                 <MDBRow>
                                     <MDBCol md="6">
                                         <MDBInput
                                            type="text"
                                            label="Username/ Email"
                                            name="username"
                                            onChange={e => this.handleChange(e)}
                                          />
                                     </MDBCol>
                                     <MDBCol md="6">
                                         <MDBInput
                                            type="text"
                                            label="First name"
                                            name="firstname"
                                            onChange={e => this.handleChange(e)}
                                          />
                                     </MDBCol>
                                 </MDBRow>
                                 <MDBRow>
                                     <MDBCol md="6">
                                         <MDBInput
                                            type="text"
                                            label="Last name"
                                            name="lastname"
                                            onChange={e => this.handleChange(e)}
                                          />
                                     </MDBCol>
                                     <MDBCol md="6">
                                            <MDBInput
                                            name="company"
                                            type="text"
                                            label="Company"
                                            onChange={e => this.handleChange(e)}
                                          />
                                     </MDBCol>
                                 </MDBRow>
                                 <MDBRow>
                                     <MDBCol md="6">
                                         <MDBInput
                                            type="text"
                                            label="Job Title"
                                            name="job"
                                            onChange={e => this.handleChange(e)}
                                          />
                                     </MDBCol>
                                     <MDBCol md="6">
                                         <MDBInput
                                            type="text"
                                            label="City of residency"
                                            name="city"
                                            onChange={e => this.handleChange(e)}
                                          />
                                     </MDBCol>
                                 </MDBRow>
                                 <MDBRow>
                                     <MDBCol md="6">
                                         <MDBInput
                                            type="text"
                                            label="Country of residency"
                                            name="country"
                                            onChange={e => this.handleChange(e)}
                                          />
                                     </MDBCol>
                                     <MDBCol md="6">
                                         <MDBInput
                                            type="text"
                                            label="Instituition"
                                            name="institute"
                                            onChange={e => this.handleChange(e)}
                                          />
                                     </MDBCol>
                                 </MDBRow>
                                 <MDBRow>
                                    <MDBCol md="12">
                                       <MDBInput
                                          type="textarea"
                                          label="About me"
                                          name="aboutme"
                                          onChange={e => this.handleChange(e)}
                                        />
                                    </MDBCol>
                                 </MDBRow>
                                 <MDBRow>
                                   <MDBCol md="12" className="text-center">
                                      <MDBBtn color="info" type="submit" rounded onClick={(e) => this.addAccountDetails(e)}>Update account</MDBBtn>
                                   </MDBCol>
                                </MDBRow>
                         </MDBCardBody>
                     </MDBCard>
                 </MDBCol>
             </MDBRow>
          </MDBContainer>
      </div>
    );
  }
}

export default PV2;