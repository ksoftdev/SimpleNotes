import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Home from './components/home/Home'

import './App.css'

function App() {
  return (
    <div className="App">
	<Router>
	  <Navbar />

	  <Switch>
	  	<Route exact path='/' component={Home} />
	  </Switch>
	</Router>
    </div>
  );
}

export default App;