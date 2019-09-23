import React, { Component } from "react";
//import logo from './logo.svg';
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Dashboard from "./components/dashboard";
import "./App.css";
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Route path="/" exact strict render={()=>{
          return (<Login/>)
        }} />
        <Route path="/console" exact strict render={()=>{
          return (<NavBar/>)
        }} />
        <Route path="/dash" exact strict render={()=>{
          return (<Dashboard/>)
        }} />
      </Router>
    );
  }
}

export default App;
