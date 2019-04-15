import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from "./Product";

class App extends Component {
  render() {
    return (
      <div className="row">
        <header className="App-header">
          <Product className="column" judul="Power Bank" harga="10.0000"/>
          <Product className="column" judul="Power Bank" harga="10.0000"/>
          <Product className="column" judul="Power Bank" harga="10.0000"/>
          <Product className="column" judul="Power Bank" harga="10.0000"/>
        </header>
      </div>
    );
  }
}

export default App;
