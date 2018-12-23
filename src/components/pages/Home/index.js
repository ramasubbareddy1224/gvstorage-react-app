import React, { Component } from 'react';
import Header from '../../common/header';
import Footer from '../../common/footer';



class Home extends Component {
  render() {
    return (
      <div >
          <Header></Header>
          <h1>From Home Component</h1>
          <Footer></Footer>
      </div>
    );
  }
}

export default Home;
   