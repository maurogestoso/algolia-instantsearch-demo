import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {InstantSearch} from 'react-instantsearch/dom';
import Search from './Search';
import {appId, apiKey, indexName} from '../credentials.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <InstantSearch
          appId={appId}
          apiKey={apiKey}
          indexName={indexName}
        >
          {/*Search widgets here*/}
          <Search />
        </InstantSearch>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const Header = () => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to React</h2>
  </div>
);

export default App;
