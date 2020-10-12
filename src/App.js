import React, { Component } from "react";
import logo from "./logo.svg";
import Table from "react-bootstrap/Table";
import "./App.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Profile from './components/Profile'
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {

   return(
    <Profile/>
   );
  }

}
export default App;
