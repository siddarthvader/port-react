import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import ReadMe from './pages/ReadMe';

import './styles/style_desktop.less'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path='/' component={About}/>
          <Route path='/work' component={Work}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/readme' component={ReadMe}/>
          <Route path='/blog' component={Blog}/>
        </div>
      </Router>
    )
  }
}

export default App;