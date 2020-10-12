import React, { Component } from "react";
import "./index.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import axios from "axios";
import Profile from "./components/Profile";
// var time : any;

class App extends Component {


    render() {

      return(
        <div>
        <Profile/>
        </div>
      );  }

}
export default App;
