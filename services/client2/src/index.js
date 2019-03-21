import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'mdbreact/dist/css/mdb.css'

import * as serviceWorker from './registerServiceWorker';
import App from './App'

import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();



// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);

ReactDOM.render(<Router history={history}><App /></Router>, document.getElementById('root'));
serviceWorker.unregister();

