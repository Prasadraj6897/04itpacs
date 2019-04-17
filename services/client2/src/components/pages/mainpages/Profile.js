import React from 'react';
import axios from 'axios'
import Avatar from './AvatarProfile.js'
import {accountFormRules} from '../../forms/form_rules.js'
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
} from 'mdbreact';
import './Profile.css';
import AccountFieldError from './AccountFieldErr.js'


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
      account:false,
      valid:false,
      accountFormRules:accountFormRules
    }
    this.getProfileImage = this.getProfileImage.bind(this)
    this.getUserBasicDetails = this.getUserBasicDetails.bind(this)
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

  getUserBasicDetails(event){
    const options = {
      url: `${process.env.REACT_APP_USERS_SERVICE_URL}/users/userbasicdetails`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.authToken}`
      }
    }
    return axios(options)
    .then((res)=>{
      var ObjUserDetails = res.data.data
      var UserCount = Object.keys(ObjUserDetails).length
      if(UserCount > 0){
        this.setState({
          firstname:ObjUserDetails.firstname,
          lastname:ObjUserDetails.lastname,
          username:ObjUserDetails.email
        })
        var ObjUserAccount = res.data.data.accountdetails[0]
        var AccountCount = Object.keys(ObjUserAccount).length
        if(AccountCount > 0){
          this.setState({
            company:ObjUserAccount.company,
            job:ObjUserAccount.job_title,
            city:ObjUserAccount.city,
            country:ObjUserAccount.country,
            institute:ObjUserAccount.instituition,
            aboutme:ObjUserAccount.about_me
          })
        }
        this.formValid()
      }
    })
    .catch((error)=>{console.log(error)})
  }

  componentDidMount(){
      this.getProfileImage()
      this.getUserBasicDetails()
  }

  showFileUploadToggle = () => {
    this.setState({showProfile: !this.state.showProfile})
    this.getProfileImage()
    this.toggle()
  }

  deleteProfileImageS3 = e => {

    const prevImage = this.state.imageurl
    const filename = prevImage.split('/').pop();

    const options = {
      url: `${process.env.REACT_APP_USERS_SERVICE_URL}/users/deleteprofile`,
      method: 'post',
      data: {fileName:filename},
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
      firstname: this.state.firstname,
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
      /*console.log(res.data)*/
      this.accountToggle()
    })
    .catch((error)=>{console.log(error)})
  }

  handleChange = (e) => {
    const obj = this.state
    obj[e.target.name] = e.target.value
    this.setState(obj)
    this.formValid()
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  accountToggle = () => {
    this.setState({
      account: !this.state.account
    }); 
  }

  formValid(){
    const formRules = this.state.accountFormRules
    if(this.state.firstname.length > 2){
      formRules[0].valid = true
    }else{
      formRules[0].valid = false
    }

    if(this.state.lastname.length > 2){
      formRules[1].valid = true
    }else{
      formRules[1].valid = false
    }

    if(this.state.company.length > 4){
      formRules[2].valid = true
    }else{
      formRules[2].valid = false
    }

    if(this.state.job.length > 0){
      formRules[3].valid = true
    }else{
      formRules[3].valid = false
    }

    this.setState({accountFormRules: formRules})
    if (this.allTrue()){
      this.setState({valid:true})
    }else{
      this.setState({valid:false})
    }
  }

  allTrue(){
    let formRules = accountFormRules
    for (const rule of formRules){
      if(!rule.valid) return false
    }
    return true
  }

  render(){
    let formRules = this.state.accountFormRules
    return (
      <div id="profile-v2" className="mb-5">
         <MDBContainer fluid>
             <MDBRow>
                 <MDBCol lg="4" className="mb-4">
                     <MDBCard narrow>
                         <MDBView cascade className="mdb-color lighten-3 card-header">
                             <h5 className="mb-0 font-weight-bold text-center text-white">{this.state.firstname}</h5>
                         </MDBView>

                         <MDBCardBody className="text-center">
                            
                             <MDBAvatar tag="img" style={{borderRadius: this.state.imageBorder+'px', "height":"100px", "width":"100px"}} src={this.state.imageurl} alt="User Photo"  className="z-depth-1 mb-3 mx-auto"/>

                             <p className="text-muted"><small>Profile photo will be changed automatically</small></p>
                             <MDBBtn color="info" onClick={this.toggle} rounded size="sm">Upload New Photo</MDBBtn>
                             <MDBBtn color="danger" onClick={this.deleteProfileImageS3} rounded size="sm">Delete</MDBBtn>
                         </MDBCardBody>

                          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                            <MDBView cascade className="mdb-color lighten-3 card-header">
                              <h5 className="mb-0 font-weight-bold text-center text-white">Upload New Photo</h5>
                           </MDBView>
                            <MDBCardBody className="text-center">
                              <Avatar 
                                sendToggleFunction={this.showFileUploadToggle}
                                previousProfileImg={this.state.imageurl} 
                              />
                            </MDBCardBody>
                          </MDBModal>

                     </MDBCard>
                 </MDBCol>

                 <MDBCol lg="8" className="mb-r">
                     <MDBCard narrow>
                      <MDBView cascade className="mdb-color lighten-3 card-header">
                         <h5 className="mb-0 font-weight-bold text-center text-white">Account Details</h5>
                      </MDBView>
                      <MDBCardBody className="text-center text-black-50">
                        <MDBRow>
                          <MDBCol md="12">
                            <div className="border-bottom text-right">
                              <a onClick={this.accountToggle} className="blue-text">Edit</a>
                            </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="mt-3">
                          <MDBCol md="6" className="text-right">
                            User Name/ Email :
                          </MDBCol>
                          <MDBCol md="6" className="text-left">
                            {this.state.username}
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="mt-3">
                          <MDBCol md="6" className="text-right">
                            First Name :
                          </MDBCol>
                          <MDBCol md="6" className="text-left">
                            {this.state.firstname}
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="mt-3">
                          <MDBCol md="6" className="text-right">
                            Last Name :
                          </MDBCol>
                          <MDBCol md="6" className="text-left">
                            {this.state.lastname}
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="mt-3">
                          <MDBCol md="6" className="text-right">
                            Company :
                          </MDBCol>
                          <MDBCol md="6" className="text-left">
                            {this.state.company}
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="mt-3">
                          <MDBCol md="6" className="text-right">
                            Job Title :
                          </MDBCol>
                          <MDBCol md="6" className="text-left">
                            {this.state.job}
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="mt-3">
                          <MDBCol md="6" className="text-right">
                            City of residency :
                          </MDBCol>
                          <MDBCol md="6" className="text-left">
                            {this.state.city}
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="mt-3">
                          <MDBCol md="6" className="text-right">
                            Country of residency :
                          </MDBCol>
                          <MDBCol md="6" className="text-left">
                            {this.state.country}
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="mt-3">
                          <MDBCol md="6" className="text-right">
                            Instituition :
                          </MDBCol>
                          <MDBCol md="6" className="text-left">
                            {this.state.institute}
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="mt-3">
                          <MDBCol md="6" className="text-right">
                            About me :
                          </MDBCol>
                          <MDBCol md="6" className="text-left">
                            {this.state.aboutme}
                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody>

                      <MDBModal isOpen={this.state.account} toggle={this.accountToggle}>
                        <MDBView cascade className="mdb-color lighten-3 card-header">
                             <h5 className="mb-0 font-weight-bold text-center text-white">Edit Account Details</h5>
                         </MDBView>
                         <MDBCardBody>
                                 <MDBRow>
                                     <MDBCol md="6">
                                         <MDBInput
                                            type="text"
                                            label="Username/ Email"
                                            name="username"
                                            onChange={e => this.handleChange(e)}
                                            value={this.state.username}
                                          />
                                     </MDBCol>
                                     <MDBCol md="6">
                                         <MDBInput
                                            type="text"
                                            label="First name"
                                            name="firstname"
                                            onChange={e => this.handleChange(e)}
                                            value={this.state.firstname}
                                          />
                                          <AccountFieldError 
                                            formRulesObject = {formRules[0]}/>
                                     </MDBCol>
                                 </MDBRow>
                                 <MDBRow>
                                     <MDBCol md="6">
                                         <MDBInput
                                            type="text"
                                            label="Last name"
                                            name="lastname"
                                            onChange={e => this.handleChange(e)}
                                            value={this.state.lastname}
                                          />
                                          <AccountFieldError 
                                            formRulesObject = {formRules[1]}/>
                                     </MDBCol>
                                     <MDBCol md="6">
                                            <MDBInput
                                            name="company"
                                            type="text"
                                            label="Company"
                                            onChange={e => this.handleChange(e)}
                                            value={this.state.company}
                                          />
                                          <AccountFieldError 
                                            formRulesObject = {formRules[2]}/>
                                     </MDBCol>
                                 </MDBRow>
                                 <MDBRow>
                                     <MDBCol md="6">
                                         <MDBInput
                                            type="text"
                                            label="Job Title"
                                            name="job"
                                            onChange={e => this.handleChange(e)}
                                            value={this.state.job}
                                          />
                                          <AccountFieldError 
                                            formRulesObject = {formRules[3]}/>
                                     </MDBCol>
                                     <MDBCol md="6">
                                         <MDBInput
                                            type="text"
                                            label="City of residency"
                                            name="city"
                                            onChange={e => this.handleChange(e)}
                                            value={this.state.city}
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
                                            value={this.state.country}
                                          />
                                     </MDBCol>
                                     <MDBCol md="6">
                                         <MDBInput
                                            type="text"
                                            label="Instituition"
                                            name="institute"
                                            onChange={e => this.handleChange(e)}
                                            value={this.state.institute}
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
                                          value={this.state.aboutme}
                                        />
                                    </MDBCol>
                                 </MDBRow>
                                 <MDBRow>
                                   <MDBCol md="12" className="text-center">
                                      <MDBBtn color="info" disabled={!this.state.valid} type="submit" rounded size="sm" onClick={(e) => this.addAccountDetails(e)}>Update account</MDBBtn>
                                      <MDBBtn color="danger" onClick={this.accountToggle} rounded size="sm">Close</MDBBtn>
                                   </MDBCol>
                                </MDBRow>
                         </MDBCardBody>
                        </MDBModal>
                     </MDBCard>
                 </MDBCol>
             </MDBRow>
          </MDBContainer>
      </div>
    );
  }
}

export default PV2;