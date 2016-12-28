import React, { Component } from 'react';
import '../../styles/styles.css';
import logo from '../../images/logo.svg';
import Header from '../Header/HeaderContainer';
import Footer from '../Footer/FooterContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <Footer />
      </div>
    );
  }
}

export default App;
