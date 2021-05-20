import './App.css';
import React, { Component } from 'react';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Contact';
import Users from './Pages/Users';
import UserDetails from './Pages/UserDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/about">
                <About/>
              </Route>

              <Route path="/services">
                <Services/>
              </Route>

              <Route path="/contact">
                <Contact/>
              </Route>

              <Route path="/users">
                <Users/>
              </Route>

              <Route path={"/post/:idz"} component={UserDetails}/>

            </Switch>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
