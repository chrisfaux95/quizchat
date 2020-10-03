import React, { Component } from 'react';
import AppProvider from './AppProvider';
import Header from './components/Header';
import Main from './components/Main';
// import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <AppProvider className="app">
          <Header />
          <Main />
          {/* <Footer /> */}
      </AppProvider>
    );
  }
}

export default App;
