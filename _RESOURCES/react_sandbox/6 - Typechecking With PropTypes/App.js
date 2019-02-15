import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact manager" />
        <Contact name="John Doe" email="john@gmail.com" phone="555-555-555" />
        <Contact
          name="Karen Williams"
          email="karen@gmail.com"
          phone="333-333-3333"
        />
        <Contact
          name="Henry Johnson"
          email="henry@gmail.com"
          phone="222-222-2222"
        />
      </div>
    );
  }
}

export default App;
