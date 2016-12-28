import React, { Component } from 'react';
import '../../styles/styles.css';
import Header from '../Header/HeaderContainer';
import Footer from '../Footer/FooterContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
