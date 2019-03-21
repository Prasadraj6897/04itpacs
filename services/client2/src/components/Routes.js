import React from 'react';
import {Route, Switch} from 'react-router-dom';


import LoginRegisterForm from './forms/LoginRegisterForm'
import ApplicationForm from './forms/ApplicationForm'

import Logout from './pages/mainpages/Logout'
import DashBoard from './pages/mainpages/DashBoard'
import AllUsers from './pages/mainpages/AllUsers'

import {domainsList, domainsListForUrl} from './forms/domainsList.js'


import HomePage from './pages/mainpages/HomePage';
import About from './pages/mainpages/About'
import RiseOfTechnology2 from './pages/mainpages/RiseOfTechnology2'
import Certifications from './pages/mainpages/Certifications'
import TrainingProvider from './pages/mainpages/TrainingProvider'
import Examfees from './pages/mainpages/Examfees.js'
import Profile from './pages/mainpages/Profile'

class Routes extends React.Component {


  render() {
    return (
      <Switch>


          <Route exact path='/logout' render={() => (
                    <Logout
                      logoutUser={this.props.logoutUser}
                      isAuthenticated={this.props.isAuthenticated} />
                    )} /> 

        <Route exact path='/status' render={() => (
                  <DashBoard
                    user={this.props.user}                    
                    isAuthenticated={this.props.isAuthenticated} />

                  )} />

         <Route exact path='/allusers' render={()=>(
                  <AllUsers
                    isAuthenticated={this.props.isAuthenticated}
                    users={this.props.users} />
                  )}  />

        <Route exact path='/register' render={()=>(
                    <LoginRegisterForm 
                      formType={'register'}                 
                      isAuthenticated={this.props.isAuthenticated}
                      loginUser = {this.props.loginUser} 
                      createMessage={this.props.createMessage}/>
                  )} />

        <Route exact path='/login' render={()=>(
                    <LoginRegisterForm 
                      formType={'login'}                    
                      isAuthenticated={this.props.isAuthenticated} 
                      loginUser = {this.props.loginUser} 
                      createMessage={this.props.createMessage}/>
                  )} />

        <Route exact path='/resetpassword' render={()=>(
                    <LoginRegisterForm 
                      formType={'resetpassword'}                 
                      isAuthenticated={this.props.isAuthenticated}
                      loginUser = {this.props.loginUser} 
                      createMessage={this.props.createMessage}/>
                  )} />

        <Route exact path="/updatepassword/:token" render={(props)=> (
                  <LoginRegisterForm 
                    formType={'updatepassword'}
                    isAuthenticated={this.props.isAuthenticated}
                    loginUser = {this.props.loginUser}
                    createMessage={this.props.createMessage} 
                    {...props} />

                  )}/>

        <Route exact path ='/apply' render={()=>(
                  <ApplicationForm
                    domain = {'all'}                    
                    user={this.props.user}
                    isAuthenticated={this.props.isAuthenticated}/>
                  )} />

        {
            domainsListForUrl.map((domain, index)=>{
                    
                    return (<Route exact path ={"/apply/"+domain} render={()=>(
                            <ApplicationForm
                              domain = {domain}                    
                              user={this.props.user}
                              isAuthenticated={this.props.isAuthenticated}/>
                            )} key={index}/>)
                  })
                

        }

        <Route exact path='/profile' render={() => (
          <Profile
            user={this.props.user}                    
            isAuthenticated={this.props.isAuthenticated} />

          )} />




        </Switch>
        )
}
}

        // }} 


export default Routes;
