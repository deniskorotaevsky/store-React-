import React, { Component } from "react";
import './App.css';
import Login from './component/Login/Login';
import Home from './component/Home/Home';
import Store from "./component/Store/Store";

const Pages = {
  login: Login,
  home: Home,
  store: Store

};

class App extends Component {

  state = { page: 'login' }
  setPage = (page) => {
    this.setState({ page })
  }

  render() {
    const { page } = this.state;
    const Page = Pages[page];

    return (
      <>
        <main>
          <Page setPage={this.setPage} />
        </main>
      </>
    );
  }
}

export default App;