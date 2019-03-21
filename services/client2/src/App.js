import React from 'react'
import axios from 'axios'
import './App.css';

import RoutesWithNavigation from './components/RoutesWithNavigation';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'mdbreact/dist/css/mdb.css'


import FooterPage from './components/pages/FooterPage'
import { BrowserRouter as Router } from 'react-router-dom';
import MyNavBar from './components/MyNavBar'
import ScrollToTop from './components/pages/ScrollToTop'

import {Route, Switch} from 'react-router-dom';



const App = () => {
  return (
      
      <Switch>           
                    
          <RoutesWithNavigation/>

          
      </Switch>

      
    )
}

export default App;