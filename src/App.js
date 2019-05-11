import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Main from "./component/Main";

class App extends Component {
    render() {
        return (
            <div>
                <h1>Tugas WEB 3</h1>
                <ul className="header">
                    <li><Link to="/home">Home</Link></li> &nbsp;&nbsp;
                    <li><Link to="/profile">Profile</Link></li>&nbsp;&nbsp;
                    <li><Link to="/portofolio">Portofolio</Link></li>&nbsp;&nbsp;
                    <li><Link to="/kontak">Kontak</Link></li>&nbsp;&nbsp;
                <p><Main /></p>
                </ul>
            </div>
        );
    }
}

export default App; 