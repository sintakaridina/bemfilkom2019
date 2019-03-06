import React, { Component } from 'react';
import Home from './page/home';
import Navbar from './component/navbar';
import Footer from './component/footer';
import { Route, Switch } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>

        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
