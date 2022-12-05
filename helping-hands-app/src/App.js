import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Events from './components/AllEvents/Events'
import Navbar from './components/navbar/Navbar'
import Homepage from './components/main-page/homepage'
import Login from './components/login'
import Registration from './components/registration'
import Contact from './components/contact'
import './App.css'
import EventDetail from './components/EventDetail'
import NewEvent from "./components/AllEvents/NewEvent";

const App = () => {

  return (
    <Router>
      <div >
        < Navbar 
        />
        <div>
          <Switch>
            <Route exact path="/">
              < Homepage/>
            </Route>
              
            <Route path="/events">
              < Events
              />
            </Route>

            <Route path="/newEvent">
              < NewEvent />
            </Route>

            <Route path = "/eventDetails/:id">
              <EventDetail
              />
            </Route>

            <Route path = "/login">
              <Login />
            </Route>

            <Route path = "/registration">
              <Registration />
            </Route>

            <Route path = "/contact">
              <Contact />
            </Route>

          </Switch>  
        </div>
      </div>
    </Router>
  )
}

export default App
