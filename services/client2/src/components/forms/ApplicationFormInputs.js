import React from 'react'
import {CardTitle, CardText, Jumbotron, Autocomplete, InputNumeric, Select, Fa, SelectInput, SelectOptions, SelectOption, Row, Col, Card, CardBody, Container, Stepper, Step, Input, Button} from 'mdbreact';

import {countries, qualifications, years} from './selectLists.js'
import {Link} from 'react-router-dom'

import TableEditablePage from './ReviewApplications'

import DatePickerPage from './DatePickerPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DatePicker from 'material-ui/DatePicker'

import ModalPage from '../pages/ModalPage'
import Terms from './termsconditions'

import Message from '../Message'

import axios from 'axios'

import ApplicationFielder from './ApplicationFielder.js'
import {applicationFormRules} from './ApplicationFormRules.js'
import './ApplicationError.css';

class ApplicationFormInputs extends React.Component {
  constructor(props) {
    super(props);

        
    this.state = {
      formActivePanel1: 1,
      formActivePanel1Changed: false,
      
      responsibleCheckboxState:true,
      accountableCheckboxState:true,
      consultedCheckboxState:true,
      informedCheckboxState:true,
      termsCheckboxState:true,

      messageNameSaved:null,
      messageTypeSaved:null, 

      certificateDetails:{},
            
      formData: {
          domain: this.props.domain,          
          certificate:this.props.certificate,
          
          contact_firstname:"",
          contact_lastname: "",
          contact_email:"",
          contact_streetaddress:'',
          contact_homecountry:"",        
          contact_phonenumber:'',          
          contact_company_name:'',
          education_highest_degree:'',
          education_year:'',
          education_school:'',
          education_city:'',
          education_country:'',
          general_main_language:'',
          general_coding_years:2,
          general_coding_languages:'',
          general_industry:'',          
          requirements_project_name_1:'',
          requirements_project_description_1:'',          
          requirements_project_start_date_1:{},
          requirements_project_start_date_2:{},
          requirements_responsible:false,
          requirements_accountable:false,
          requirements_consulted:false,
          requirements_informed:false,
          requirements_project_company_1:'',
          requirements_project_reference_name_1:'',
          requirements_project_reference_email_1:'',
          requirements_project_reference_phonenumber_1:'',
          terms_agree:true,
          status:'saved'     

        
      },

      applicationFormRules: applicationFormRules,
      valid:false
    }

    this.handleApplicationFormSubmit = this.handleApplicationFormSubmit.bind(this)
    this.handleApplicationFormSave = this.handleApplicationFormSave.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)

    this.autoSuggestSet = this.autoSuggestSet.bind(this)

    this.swapFormActive = this.swapFormActive.bind(this)

    this.getCertificationDetails = this.getCertificationDetails.bind(this)
    
    this.removeMessageSaved = this.removeMessageSaved.bind(this)

    }


  validateFirst1(Firstname1){

     var re = /[^0-9]/
    return re.test(Firstname1)
  }
    




    formValid(){
    const formRules = this.state.applicationFormRules

    if((this.state.formData.contact_firstname.length > 2) && (this.validateFirst1(this.state.formData.contact_firstname))){
      formRules[0].valid = true
    }
    else
    {
      formRules[0].valid = false
    }

    this.setState({applicationFormRules: formRules})
    if (this.allTrue()){
      this.setState({valid:true})
    }else{
      this.setState({valid:false})
    }
  }

   allTrue(){
    let formRules = applicationFormRules
    for (const rule of formRules){
      if(!rule.valid) return false
    }
    return true
  }


    componentDidMount(){    
      this.getCertificationDetails(this.props.certificate)
    }

    getCertificationDetails(cert){
    
    const options = {
      url: `${process.env.REACT_APP_USERS_SERVICE_URL}/auth/application`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.authToken}`
      },
      params:{certificate:cert}
    }
    return axios(options)
    .then((res)=>{  
      

      const items = this.state.formData
      const obj = res.data.data

      for (const key of Object.keys(obj)){
        items[key] = obj[key]
      }
      
      this.setState({
        items,
      })


    })
    .catch((error)=>{console.log(error)})
  }

    

    swapFormActive = (a) => (param) => (e) => {


    this.setState({
      ['formActivePanel' + a]: param,
      ['formActivePanel' + a + 'Changed']: true
      });
  }

  handleNextPrevClick = (a) => (param) => (e) => {
    this.setState({
      ['formActivePanel' + a] : param,
      ['formActivePanel' + a + 'Changed']: true
  });
  }

  handleSubmission = () => {
    alert('Form submitted!');
  }

  calculateAutofocus = (a) => {
    if (this.state['formActivePanel'+a+'Changed']) {
      return true
    }
  }

  handleApplicationFormSave(event){
    event.preventDefault()


    
    const items = this.state.formData
    items.status = 'saved'


    this.createMessageSaved({name:'Application Saved', type:'success'})

    


    let dataToSend = {
                domain: this.state.formData.domain,
                certificate: this.state.formData.certificate,
                contact_firstname: this.state.formData.contact_firstname,
                contact_lastname: this.state.formData.contact_lastname,
                contact_email: this.state.formData.contact_email,
                contact_streetaddress: this.state.formData.contact_streetaddress,
                contact_homecountry: this.state.formData.contact_homecountry,
                contact_phonenumber: this.state.formData.contact_phonenumber,
                contact_company_name: this.state.formData.contact_company_name,
                education_highest_degree:this.state.formData.education_highest_degree,
                education_year:this.state.formData.education_year,
                education_school:this.state.formData.education_school,
                education_city:this.state.formData.education_city,
                education_country:this.state.formData.education_country,
                general_main_language:this.state.formData.general_main_language,
                general_coding_years:this.state.formData.general_coding_years,
                general_coding_languages:this.state.formData.general_coding_languages,
                general_industry:this.state.formData.general_industry,          
                requirements_project_name_1:this.state.formData.requirements_project_name_1,
                requirements_project_description_1:this.state.formData.requirements_project_description_1,          
                requirements_project_start_date_1: this.state.formData.requirements_project_start_date_1.toString(),
                requirements_project_start_date_2: this.state.formData.requirements_project_start_date_2.toString(),
                requirements_responsible:this.state.formData.requirements_responsible.toString(),
                requirements_accountable:this.state.formData.requirements_accountable.toString(),
                requirements_consulted:this.state.formData.requirements_consulted.toString(),
                requirements_informed:this.state.formData.requirements_informed.toString(),
                requirements_project_company_1:this.state.formData.requirements_project_company_1,
                requirements_project_reference_name_1:this.state.formData.requirements_project_reference_name_1,
                requirements_project_reference_email_1:this.state.formData.requirements_project_reference_email_1,
                requirements_project_reference_phonenumber_1:this.state.formData.requirements_project_reference_phonenumber_1,
                terms_agree:this.state.formData.terms_agree.toString(),
                status: this.state.formData.status
              }

      

             const options = {
              url: `${process.env.REACT_APP_USERS_SERVICE_URL}/auth/application`,
              method: 'post',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${window.localStorage.authToken}`,        
              },
              data:dataToSend
            }
            return axios(options)
            .then((res)=>{
                               
              })    
            .catch((error)=>{console.log(error)})
  }

  handleApplicationFormSubmit(event){
    event.preventDefault()
    
    const items = this.state.formData
    items.status = 'submitted'
    
    this.setState({
        items,
      })
    

    let dataToSend = {
                domain: this.state.formData.domain,
                certificate: this.state.formData.certificate,
                contact_firstname: this.state.formData.contact_firstname,
                contact_lastname: this.state.formData.contact_lastname,
                contact_email: this.state.formData.contact_email,
                contact_streetaddress: this.state.formData.contact_streetaddress,
                contact_homecountry: this.state.formData.contact_homecountry,
                contact_phonenumber: this.state.formData.contact_phonenumber,
                contact_company_name: this.state.formData.contact_company_name,
                education_highest_degree:this.state.formData.education_highest_degree,
                education_year:this.state.formData.education_year,
                education_school:this.state.formData.education_school,
                education_city:this.state.formData.education_city,
                education_country:this.state.formData.education_country,
                general_main_language:this.state.formData.general_main_language,
                general_coding_years:this.state.formData.general_coding_years,
                general_coding_languages:this.state.formData.general_coding_languages,
                general_industry:this.state.formData.general_industry,          
                requirements_project_name_1:this.state.formData.requirements_project_name_1,
                requirements_project_description_1:this.state.formData.requirements_project_description_1,          
                requirements_project_start_date_1:this.state.formData.requirements_project_start_date_1.toString(),
                requirements_project_start_date_2:this.state.formData.requirements_project_start_date_2.toString(),
                requirements_responsible:this.state.formData.requirements_responsible.toString(),
                requirements_accountable:this.state.formData.requirements_accountable.toString(),
                requirements_consulted:this.state.formData.requirements_consulted.toString(),
                requirements_informed:this.state.formData.requirements_informed.toString(),
                requirements_project_company_1:this.state.formData.requirements_project_company_1,
                requirements_project_reference_name_1:this.state.formData.requirements_project_reference_name_1,
                requirements_project_reference_email_1:this.state.formData.requirements_project_reference_email_1,
                requirements_project_reference_phonenumber_1:this.state.formData.requirements_project_reference_phonenumber_1,
                terms_agree:this.state.formData.terms_agree.toString(),
                status: this.state.formData.status
              }

      

             const options = {
              url: `${process.env.REACT_APP_USERS_SERVICE_URL}/auth/application`,
              method: 'post',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${window.localStorage.authToken}`,        
              },
              data:dataToSend
            }
            return axios(options)
            .then((res)=>{
                               
              })    
            .catch((error)=>{console.log(error)})
              
           
      }

  

  

  handleFormChange(event){
    
    const obj =this.state.formData
    obj[event.target.id] = event.target.value
    this.setState(obj)
     this.formValid()
  }

  getSelectValue_contact_homecountry(value){    
    const items = this.state.formData
    items.contact_homecountry = value
    this.setState({
      items,
    })
    
  }

  getSelectValue_education_highest_degree(value){    
    const items = this.state.formData
    items.education_highest_degree = value.toString()
    this.setState({
      items,
    })
    
  }

    getSelectValue_education_year(value){    
    const items = this.state.formData
    items.education_year = value.toString()
    this.setState({
      items,
    })
    
  }


  getSelectValue_education_country(value){    
    const items = this.state.formData
    items.education_country = value
    this.setState({
      items,
    })
    
  }

  set_requirements_project_start_date_1(event, date){
      
      
    const items = this.state.formData
    items.requirements_project_start_date_1= date
    this.setState({
      items,
    })
    
  }

  set_requirements_project_start_date_2(event, date){
      

    const items = this.state.formData
    items.requirements_project_start_date_2= date
    this.setState({
      items,
    })
    
  }
  
  set_roles_responsible(param, e) {  

     this.setState({responsibleCheckboxState: !this.state.responsibleCheckboxState})      
      let checked = this.state.responsibleCheckboxState
      const items = this.state.formData

      if(checked){        
        items.requirements_responsible= true
        this.setState({
          items,
        })
      } else {
        items.requirements_responsible= false
        this.setState({
          items,
        })
      }
      
  }

  set_roles_accountable(param, e) {  

     this.setState({accountableCheckboxState: !this.state.accountableCheckboxState})      
      let checked = this.state.accountableCheckboxState
      const items = this.state.formData

      if(checked){        
        items.requirements_accountable= true
        this.setState({
          items,
        })
      } else {
        items.requirements_accountable= false
        this.setState({
          items,
        })
      }
      
  }

  set_roles_consulted(param, e) {  

     this.setState({consultedCheckboxState: !this.state.consultedCheckboxState})      
      let checked = this.state.consultedCheckboxState
      const items = this.state.formData

      if(checked){        
        items.requirements_consulted= true
        this.setState({
          items,
        })
      } else {
        items.requirements_consulted= false
        this.setState({
          items,
        })
      }
      
  }

  set_roles_informed(param, e) {  

     this.setState({informedCheckboxState: !this.state.informedCheckboxState})      
      let checked = this.state.informedCheckboxState
      const items = this.state.formData

      if(checked){        
        items.requirements_informed= true
        this.setState({
          items,
        })
      } else {
        items.requirements_informed= false
        this.setState({
          items,
        })
      }
      
  }

  setAgreeTerms(e){

    this.setState({termsCheckboxState: !this.state.termsCheckboxState})
    let checked = this.state.termsCheckboxState
    const items = this.state.formData

      if(checked){        
        items.terms_agree= true
        this.setState({
          items,
        })
      } else {
        items.terms_agree= false
        this.setState({
          items,
        })
      }
           
           

  }

  autoSuggestSet(someId, suggestion){
    const items = this.state.formData
    items[someId] = suggestion
    this.setState({
          items,
        })
    
  }

  onSuggestionSelected(param, e, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }){

      this.autoSuggestSet(param, suggestion)

  }

 removeMessageSaved(){
    this.setState({
      messageNameSaved:null,
      messageTypeSaved:null,
    })
  }

  createMessageSaved({name, type}){
     this.setState({
      messageNameSaved:name,
      messageTypeSaved:type
    })

    setTimeout(()=>{
    this.removeMessageSaved()
  }, 3000)

  }


  render() {
          let formRules = this.state.applicationFormRules

    if (this.state.formData.status==='submitted'){
          return <Container>
                    
                      <h1 className="h1-responsive">Form Submitted</h1>
                     

                      <Card className="w-75 mb-4">
                        <CardBody>
                          <CardTitle>{this.state.formData.certificate}</CardTitle>
                          <CardText>Your application form has been submitted. ITPACS will take 5 working days to review your application. 
                          In case of clarifications, ITPACS will get in touch with you at the email you provided in the application. 
                          Upon successful review, you will receive an eligibility notification. You can then book your exam time slot.
                          You will not be able to make changes to your application. For questions regarding your application, you can 
                          send us an email at customercare@itpacs.org</CardText>
                          <Link to='/apply'>
                          <Button color="primary">Other certifications</Button>
                          </Link>
                        </CardBody>
                      </Card>

                  </Container>
        }

  


    return(       

        <Container>
        
          <h2 className="text-center pt-4 pb-5 mb-2">{this.props.certificate}</h2>
          
              
          {this.state.formData.status==='saved' &&
          <h5 className="text-center pt-4 pb-5 mb-2">Application saved. You can continue working on your application for upto 90 days. Once submitted, no changes can be made. </h5>
        
        }

          <Stepper icon>
            <Step icon="address-book" stepName="Contact Information" onClick={this.swapFormActive(1)(1)} ></Step>
            <Step icon="graduation-cap" stepName="Education" onClick={this.swapFormActive(1)(2)} ></Step>
            <Step icon="globe" stepName="General Experience" onClick={this.swapFormActive(1)(3)}></Step>
            <Step icon="gears" stepName="Requirements" onClick={this.swapFormActive(1)(4)}></Step>
            <Step icon="legal" stepName="Terms & Conditions" onClick={this.swapFormActive(1)(5)}></Step>
            <Step icon="check" stepName="Finish" onClick={this.swapFormActive(1)(6)}></Step>
          </Stepper>

          <form role="form" onSubmit={(event)=>this.handleApplicationFormSubmit(event)}>
            <Row>
              { this.state.formActivePanel1 == 1  &&
              (<Col md="12">
                <h3 className="font-weight-bold pl-0 my-4">
                  <strong>Contact Information</strong></h3>

                <div className='form-group'>
                <Input 
                  id='contact_firstname'
                  label='Your first name'                  
                  className="mt-4"
                  type='text'
                  autoFocus={this.calculateAutofocus(1)}
                  icon="user"
                  group                  
                  value={this.state.formData.contact_firstname}
                  validate
                  required
                  onChange={this.handleFormChange} />

                  

                  </div>
                  

                <div className='form-group'>
                  <Input 
                    id='contact_lastname'
                    label='Your surname'
                    type='text'
                    className="mt-4"                    
                    icon="user"
                    group
                    value={this.state.formData.contact_lastname}
                    validate
                    required
                    onChange={this.handleFormChange} />
                  </div>

                <div className='form-group'>
                  <Input 
                    id='contact_email'
                    label='Your preferred email for communication'
                    type='email'
                    className="mt-4"                    
                    icon="envelope"
                    group
                    value={this.state.formData.contact_email}
                    validate
                    required
                    onChange={this.handleFormChange} />
                  </div>

                  <div className='form-group'>
                  <Input 
                    id='contact_streetaddress'
                    label='Current Home Address'
                    type='textarea'
                    rows='2'
                    className="mt-4"                    
                    icon="home"
                    group
                    value={this.state.formData.contact_streetaddress}
                    validate
                    required
                    onChange={this.handleFormChange} />
                  </div>

                  <div className='form-group' >
                      <Autocomplete
                      data = {countries}
                      label="Choose your current country of residence"
                      clear
                      clearClass="grey-text"
                      id="contact_homecountry"
                      name='contact_homecountry'
                      icon='globe'                      
                      onSuggestionSelected={this.onSuggestionSelected.bind(this, 'contact_homecountry')} />                                             
                      
                  </div>                 

                  <div className='form-group'>
                  <Input
                    id='contact_phonenumber'
                    label='Your phone number.'
                    type='text'
                    className="mt-4"                    
                    icon="phone"
                    group
                    value={this.state.formData.contact_phonenumber}
                    validate
                    required
                    onChange={this.handleFormChange} />
                  </div>

                  <div className='form-group'>
                  <Input
                    id='contact_company_name'
                    label='Current company or instituition name.'
                    type='text'
                    className="mt-4"                    
                    icon="info"
                    group
                    value={this.state.formData.contact_company_name}
                    validate
                    required
                    onChange={this.handleFormChange} />
                  </div>
                   

                
                <Button color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(1)(2)} type="submit" >next</Button>
                <Button color="success" rounded className="float-right" onClick={this.handleApplicationFormSave} type="submit" >Save</Button>
              </Col>)}

              { this.state.formActivePanel1 == 2  &&
              (<Col md="12">
                <h3 className="font-weight-bold pl-0 my-4"><strong>Education</strong></h3>
                <h5 className="pl-0 my-4"><strong>Indicate your highest level of education attained at this time.</strong></h5>
                
                <div className='form-group'>
                  <Fa icon='map'/>
                  <Input 
                    id='education_city'
                    label='City where you obtained highest your degree'
                    autoFocus={this.calculateAutofocus(1)}
                    className="mt-4"
                    type='text'       
                    group
                    value={this.state.formData.education_city}
                    validate
                    required
                    onChange={this.handleFormChange.bind(this)} />
                  </div>

                <div className='form-group mt-3' >
                <Fa icon='graduation-cap'/>
                  <Select getValue={this.getSelectValue_education_highest_degree.bind(this)} color="primary">
                    <SelectInput value={this.state.formData.education_highest_degree} selected="Choose your highest education attained"></SelectInput>                    
                    <SelectOptions> 
                    <SelectOption disabled>Choose your highest degree</SelectOption>                                           
                      {qualifications.map((country, i)=>{
                        return <SelectOption key={i}>{country}</SelectOption>
                      })
                    }
                    </SelectOptions>
                  </Select>
                  </div>

                <div className='form-group mt-3' >
                <Fa icon='calendar'/>
                  <Select getValue={this.getSelectValue_education_year.bind(this)} color="primary">
                    <SelectInput value={this.state.formData.education_year} selected="Year degree awarded"></SelectInput>
                    <SelectOptions>
                    <SelectOption disabled>Year you obtained your degree</SelectOption>                                            
                      {years.map((country, i)=>{
                        return <SelectOption key={i}>{country}</SelectOption>
                      })
                    }
                    </SelectOptions>
                  </Select>
                  </div>
                  
                <div className='form-group'>
                  <Fa icon='institution'/>
                  <Input 
                    id='education_school'
                    label='School or University name'
                    type='text'  
                    group
                    value={this.state.formData.education_school}
                    validate
                    required
                    onChange={this.handleFormChange} />
                  </div>
                  
                    <div className='form-group' >
                      <Autocomplete
                      data = {countries}
                      label="Choose country from where you obtained your degree"
                      clear
                      clearClass="grey-text"
                      id="education_country"
                      name='education_country'
                      icon='globe'                                                                                     
                      onSuggestionSelected={this.onSuggestionSelected.bind(this, 'education_country')} /> 
                  </div>                
                <Button color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(1)(1)}>previous</Button>
                <Button color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(1)(3)}>next</Button>
                <Button color="success" rounded className="float-right" onClick={this.handleApplicationFormSave}>Save</Button>
              </Col>)}




              { this.state.formActivePanel1 == 3  &&
              (<Col md="12">
                <h3 className="font-weight-bold pl-0 my-4"><strong>General Experience</strong></h3>
                <h5 className="pl-0 my-4"><strong>Details about your overall work experience</strong></h5>
                
                <div className='form-group'>
                  <Fa icon='code'/>
                  <Input 
                    id='general_main_language'
                    label='Your primary programming language. Specify just one'
                    autoFocus={this.calculateAutofocus(1)}
                    className="mt-4"
                    type='text'       
                    group
                    value={this.state.formData.general_main_language}
                    validate
                    required
                    onChange={this.handleFormChange} />
                  </div>

                  <div className='form-group'>
                  <Fa icon='code'/><Fa icon='code'/><Fa icon='code'/>
                  <Input 
                    id='general_coding_languages'
                    label='Other programming languages you know. Separated by comma'                    
                    className="mt-4"
                    type='text'       
                    group
                    value={this.state.formData.general_coding_languages}
                    validate
                    required
                    onChange={this.handleFormChange} />
                  </div>               


                  <div className='form-group'>
                    <Fa icon='hourglass'/>
                    <br></br>
                    <br></br>
                    <label className="f4 mt0">
                    Years of coding experience: <b className="fw7 pl1">{this.state.formData.general_coding_years}</b>
                    </label>
                    <input
                      className="w-100 appearance-none bg-transparent range-slider-thumb-custom" 
                      id="general_coding_years" 
                      type="range" 
                      min="0" max="30" 
                      value={this.state.formData.general_coding_years} 
                      onChange={this.handleFormChange}
                      step="1"/>
                  </div>

                  <div className='form-group'>
                  <Fa icon='wrench'/>
                  <Input 
                    id='general_industry'
                    label='Specify your current industry. Example: Finance'                    
                    className="mt-4"
                    type='text'       
                    group
                    value={this.state.formData.general_industry}
                    validate
                    required
                    onChange={this.handleFormChange} />
                  </div>
                
                <Button color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(1)(2)}>previous</Button>
                <Button color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(1)(4)}>next</Button>
                <Button color="success" rounded className="float-right" onClick={this.handleApplicationFormSave}>Save</Button>
              </Col>)}

              { this.state.formActivePanel1 == 4  &&
              (<Col md="12">
                <h3 className="font-weight-bold pl-0 my-4"><strong>Requirements</strong></h3>
                <h5 className="pl-0 my-4"><strong>Specify details about a project wherein you contributed significantly in writing code</strong></h5>

                <div className='form-group'>                  
                  <Input 
                    id='requirements_project_name_1'
                    label='Project title'
                    autoFocus={this.calculateAutofocus(1)}
                    className="mt-4"
                    type='text'
                    icon='code'       
                    group
                    value={this.state.formData.requirements_project_name_1}
                    validate
                    required
                    onChange={this.handleFormChange} />
                  </div>

                <div className='form-group'>
                  <Input 
                    id='requirements_project_company_1'
                    label='Company/Instituition name'                    
                    className="mt-4"
                    type='text'
                    icon='info'       
                    group
                    value={this.state.formData.requirements_project_company_1}
                    validate
                    required
                    onChange={this.handleFormChange} />
                  </div>

                <div className='form-group'>
                  <Input 
                    id='requirements_project_description_1'
                    label='Project Description (In less than 500 characters)'
                    type='textarea'                    
                    rows='6'
                    className="mt-4"                    
                    icon="question-circle-o"
                    group
                    value={this.state.formData.requirements_project_description_1}
                    validate
                    required
                    onChange={this.handleFormChange} />
                    

                  </div>


                  <div className='form-group'>
                  <Fa icon='calendar'/>
                    <br></br>
                    <br></br>
                    <label className="f4 mt0">
                    Project Start Date: 
                    </label>
                  <MuiThemeProvider>
                    <DatePicker 
                      style={{borderBottom: '1px solid #bdbdbd', height: '3rem'}} 
                      id="requirements_project_start_date_1" textFieldStyle={{width: '100%'}} 
                      hintText="Project Start date" 
                      onChange={this.set_requirements_project_start_date_1.bind(this)}
                      value={this.state.formData.requirements_project_start_date_1}>
                      </DatePicker>
                  </MuiThemeProvider>
                  </div>

                   <div className='form-group'>
                   <Fa icon='calendar'/>
                    <br></br>
                    <br></br>
                    <label className="f4 mt0">
                    Project Finish Date: 
                    </label>
                  <MuiThemeProvider>                   
                    <DatePicker 
                      style={{borderBottom: '1px solid #bdbdbd', height: '3rem'}} 
                      id="requirements_project_start_date_2" textFieldStyle={{width: '100%'}} 
                      hintText="Project End date" 
                      onChange={this.set_requirements_project_start_date_2.bind(this)}
                      value={this.state.formData.requirements_project_start_date_2}>  
                    </DatePicker>
                  </MuiThemeProvider>
                  </div>


                  <div className='form-group'>
                   <Fa icon='sitemap'/>
                    <br></br>
                    <br></br>
                    <label className="f4 mt0">
                    Your role in the Project: 
                    </label>
                    
                    <Input 
                      label="Responsible (You did most of the implementation work)" 
                      type="checkbox" 
                      id="requirements_responsible"  
                      onClick={this.set_roles_responsible.bind(this, 'requirements_responsible')} />

                    <Input 
                      label="Accountable (You managed work of other people in this project)" 
                      type="checkbox" 
                      id="requirements_accountable"  
                      onClick={this.set_roles_accountable.bind(this, 'requirements_accountable')} />
                    

                    <Input 
                      label="Consulted (You mostly provided support for the project)" 
                      type="checkbox" 
                      id="requirements_consulted"  
                      onClick={this.set_roles_consulted.bind(this, 'requirements_consulted')} />
                    

                    <Input 
                      label="Informed (You were mostly a customer or recepient of the deliverables)" 
                      type="checkbox" 
                      id="requirements_informed"  
                      onClick={this.set_roles_informed.bind(this, 'requirements_informed')} />

                    </div>

                    <div className='form-group'>
                      <Input 
                      id='requirements_project_reference_name_1'
                      label='Provide full name of a reference for your work. This can be your manager, peer, trainer etc)'                      
                      className="mt-4"
                      type='text'
                      icon='user-circle'       
                      group
                      value={this.state.formData.requirements_project_reference_name_1}
                      validate
                      required
                      onChange={this.handleFormChange} />
                  </div>

                  <div className='form-group'>
                      <Input 
                      id='requirements_project_reference_email_1'
                      label='Provide a working email address of your reference. ITPACS will send your experience verification request to this email.'                      
                      className="mt-4"
                      type='email'
                      icon='mail-forward'       
                      group
                      value={this.state.formData.requirements_project_reference_email_1}
                      validate
                      required
                      onChange={this.handleFormChange} />
                  </div>

                  <div className='form-group'>
                      <Input 
                      id='requirements_project_reference_phonenumber_1'
                      label='Provide a working phone number of your reference.'                      
                      className="mt-4"
                      type='text'
                      icon='mobile-phone'       
                      group
                      value={this.state.formData.requirements_project_reference_phonenumber_1}
                      validate
                      required
                      onChange={this.handleFormChange} />
                  </div>


                <Button color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(1)(3)}>previous</Button>
                <Button color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(1)(5)}>next</Button>
                <Button color="success" rounded className="float-right" onClick={this.handleApplicationFormSave}>Save</Button>
              </Col>)}

              { this.state.formActivePanel1 == 5  &&
              (<Col md="12">
                <h3 className="font-weight-bold pl-0 my-4"><strong>Terms and conditions</strong></h3>
                
                <Input 
                  label="I agreee to the terms and conditions" 
                  type="checkbox" 
                  id="terms_agree" 
                  autoFocus={this.calculateAutofocus(1)}
                  onClick={this.setAgreeTerms.bind(this)}/>

                <a><ModalPage 
                      body={<Terms/>}
                      name='Terms and conditions'/>
                  </a>

                
                <Button color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(1)(4)}>previous</Button>
                <Button color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(1)(6)}>next</Button>
                <Button color="success" rounded className="float-right" onClick={this.handleApplicationFormSave}>Save</Button>
              </Col>)}

              { this.state.formActivePanel1 == 6  &&
              (<Col md="12">
                <h3 className="font-weight-bold pl-0 my-4"><strong>Finish</strong></h3>
                <h2 className="text-center font-weight-bold my-4">Review Application</h2>

                <TableEditablePage 
                  formData={this.state.formData}
                  onClick={this.swapFormActive}/>

                <Button color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(1)(5)}>previous</Button>
                <Button color="default" rounded className="float-right" onClick={this.handleApplicationFormSubmit}>Submit</Button>
                <Button color="success" rounded className="float-right" onClick={this.handleApplicationFormSave}>Save</Button>
              </Col>)}
          
          </Row>
        </form>
        {this.state.messageNameSaved && this.state.messageTypeSaved &&
                    <Message
                      messageName={this.state.messageNameSaved}
                      messageType={this.state.messageTypeSaved} 
                      removeMessage={this.removeMessageSaved}/>

                  }
      </Container>
    );
  }
  }

export default ApplicationFormInputs