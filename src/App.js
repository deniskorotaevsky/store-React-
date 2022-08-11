import React, { Component } from "react";
import './App.css';
import Login from './component/Login/Login';
import Home from './component/Home/Home';

const PAGES = {
  login: Login,
  home: Home,
};

class App extends Component {

  state = { page: 'login' }
  setPage = (page) => {
    this.setState({ page })
  }

  render() {
    const { page } = this.state;
    const Page = PAGES[page];

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