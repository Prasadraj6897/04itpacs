import React from 'react'
import axios from 'axios'
import '../App.css';

import FooterPage from './pages/FooterPage'
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './pages/ScrollToTop'

import {Route, Switch} from 'react-router-dom';

import CertifiedPage from './pages/mainpages/CertifiedPage'

import Message from './Message'

import SideNavigation from './SideNavigation';
import TopNavigation from './TopNavigation'
import MyNavBar from './MyNavBar'
import Routes from './Routes'


import HomePage from './pages/mainpages/HomePage';

import About from './pages/mainpages/About'
import Certifications from './pages/mainpages/Certifications'
import TrainingProvider from './pages/mainpages/TrainingProvider'
import RiseOfTechnology2 from './pages/mainpages/RiseOfTechnology2'
import Examfees from './pages/mainpages/Examfees.js'
import RegisterFormControl from './forms/RegisterFormControl'
import LoginRegisterForm from './forms/LoginRegisterForm'
import DashBoard from './pages/mainpages/DashBoard'
import AllUsers from './pages/mainpages/AllUsers'
import Logout from './pages/mainpages/Logout'

import ApplicationForm from './forms/ApplicationForm'

import {domainsList, domainsListForUrl} from './forms/domainsList.js'






class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false,

            users:[],
            user:{},
                       
            isAuthenticated:false,
            messageName:null,
            messageType:null,
            messageNameEmail:null,
            messageTypeEmail:null ,

            currentPage:'',  

            windowWidth:0,
            sideNavToggled: false,
            breakWidth: 1400         
        }

      this.onClick = this.onClick.bind(this);
      

      // this.getUsers = this.getUsers.bind(this)
      this.logoutUser = this.logoutUser.bind(this)
      this.loginUser = this.loginUser.bind(this)
      this.createMessage = this.createMessage.bind(this)      
      this.removeMessage = this.removeMessage.bind(this)
      this.removeMessageEmail = this.removeMessageEmail.bind(this)
      this.getUserDetails = this.getUserDetails.bind(this)
      }

    getUserDetails(event){
    const options = {
      url: `${process.env.REACT_APP_USERS_SERVICE_URL}/auth/status`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.authToken}`
      }
    }
    return axios(options)
    .then((res)=>{         
      this.setState({
        user:res.data.data
        
      }
        )

    })
    .catch((error)=>{console.log(error)})
  }

  componentDidUpdate(prevProps, nextProps, snapshot) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.assessLocation(this.props.location.pathname)
    }
  }


  getUsers(){

    const options = {
      url: `${process.env.REACT_APP_USERS_SERVICE_URL}/users`,
      method: 'get',
      headers:{
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.authToken}`
      }
    }

    return axios(options)
    .then((res)=>{
      this.setState({users: res.data.data})
    })
    .catch((error)=>{console.log(error)})
  }

  componentDidMount(){
    
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    this.assessLocation(this.props.location.pathname)
  
    if (this.state.isAuthenticated){
      this.getUserDetails()
    }

  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
    });
  }

  componentWillMount(){
    if(window.localStorage.getItem('authToken')){
      this.setState({isAuthenticated: true})
    }

    window.removeEventListener("resize", this.handleResize);
  }

  toggleSideNav = () => {
    if (this.state.windowWidth < this.state.breakWidth) {
      this.setState({
        sideNavToggled: !this.state.sideNavToggled
      })
    }
  }

  

  logoutUser(){
    window.localStorage.clear()
    this.setState({isAuthenticated: false})
  }

  loginUser(token){
    window.localStorage.setItem('authToken', token)
    this.setState({isAuthenticated: true})
    this.getUsers()
    this.createMessage({name:'Successfully logged in', type:'success'})

    this.getUserDetails()
    
    if (this.state.user.confirmed===false){
      this.createMessageEmail({name:'Confirm your email. Check your inbox', type:'danger'})
    }

    
  }

  createMessageEmail({name, type}){
     this.setState({
      messageNameEmail:name,
      messageTypeEmail:type
    })

    setTimeout(()=>{
    this.removeMessageEmail()
  }, 6000)

  }


  createMessage({name, type}){
     this.setState({
      messageName:name,
      messageType:type
    })

    setTimeout(()=>{
    this.removeMessage()
  }, 3000)

  }

  removeMessageEmail(){
    this.setState({
      messageNameEmail:null,
      messageTypeEmail:null,
    })
  }

  removeMessage(){
    this.setState({
      messageName: null,
      messageType: null

    })
  }
    
    

  onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

  assessLocation = (location) => {
      let locationString;
      
      switch(location) {
        case '/status':
          locationString= 'Dashboard'
          break;
        case '/apply/datascience':
          locationString= 'Data Science'
          break;
        case '/apply/webdevelopment':
          locationString= 'Web Development'
          break;
        case '/apply/mobileappsdevelopment':
          locationString= 'Mobile Development'
          break;
        case '/apply/cybersecurity':
          locationString= 'Cyber Security'
          break;
        case '/apply/blockchain':
          locationString= 'Blockchain'
          break;
        case '/apply/iot':
          locationString= 'IoT'
          break;
        case '/apply/bigdata':
          locationString= 'Big Data'
          break;
        case '/apply/artificialintelligence':
          locationString= 'Artificial Intelligence'
          break;
        case '/profile':
          locationString= 'Profile'
          break;
        case '/courses':
          locationString= 'Courses'
          break;
        case '/becometrainingprovider':
          locationString= 'Training Provider'
          break;
        case '/takeexam':
          locationString= 'Take an exam'
          break;
        default:
      }

      this.setState({
        currentPage: locationString
      })
    }




    render() {
      const dynamicLeftPadding = { paddingLeft: this.state.windowWidth > this.state.breakWidth ? "240px" : "0"}
        
        return (

          <div className='app'>

                  <TopNavigation 
                    isAuthenticated={this.state.isAuthenticated} 
                    toggle={this.state.windowWidth < this.state.breakWidth}  
                    onSideNavToggleClick={this.toggleSideNav} 
                    routeName={this.state.currentPage} 
                    className="white-skin" />

                <div className="flexible-content white-skin">
                                
                  {this.state.messageName && this.state.messageType &&
                    <Message
                      messageName={this.state.messageName}
                      messageType={this.state.messageType} 
                      removeMessage={this.removeMessage}/>

                  }

                  {this.state.messageNameEmail && this.state.messageTypeEmail &&
                    <Message
                      messageName={this.state.messageNameEmail}
                      messageType={this.state.messageTypeEmail} 
                      removeMessage={this.removeMessageEmail}/>

                  }                  

                {!this.state.isAuthenticated &&
                  <main>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/riseoftechnology' component={RiseOfTechnology2} />
                    <Route path='/about' component={About} />
                    <Route exact path="/certifications/:id1/:id2" render={(props)=> <Certifications {...props} />}/>        
                    <Route exact path="/trainingproviders" component={TrainingProvider} />
                    <Route exact path="/examfees" component={Examfees} />
                    
                    <Routes 
                        user={this.state.user}
                        isAuthenticated={this.state.isAuthenticated}
                        loginUser={this.loginUser}
                        createMessage={this.createMessage}
                        logoutUser={this.logoutUser} />
                        onChange={()=>this.assessLocation()} 
                  </main>


                }

                {this.state.isAuthenticated &&

                  <div>
                  <div className="white-skin">
                    <SideNavigation
                      style={{transition: 'all .3s'}}
                      triggerOpening={this.state.sideNavToggled}
                      onLinkClick={()=>this.toggleSideNav()} />
                
                  </div>

                      <Route exact path='/' component={HomePage} />
                      <Route path='/riseoftechnology' component={RiseOfTechnology2} />
                      <Route path='/about' component={About} />
                      <Route exact path="/certifications/:id1/:id2" render={(props)=> <Certifications {...props} />}/>        
                      <Route exact path="/trainingproviders" component={TrainingProvider} />
                      <Route exact path="/examfees" component={Examfees} />
                      
                      <main style={{...dynamicLeftPadding, margin: "6rem 6% 0"}}>
                      <Routes 
                          user={this.state.user}
                          isAuthenticated={this.state.isAuthenticated}
                          loginUser={this.loginUser}
                          createMessage={this.createMessage}
                          logoutUser={this.logoutUser} 
                          onChange={()=>this.assessLocation()} />
                    </main>
                  </div>
                }                



                
                </div>
          		
                <footer>
          			 <FooterPage />
                </footer>
				  </div>	
        
        );
    }
  }

export default App