import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import CreateSample from "./components/sample/create-sample.component";
import CreateVans from "./components/van/create-van.component";
import Login from './components/auth/login.component';
import Register from './components/auth/register.component';


class App extends Component {
  constructor(){
    super();
    this.state = {
      username: ''
    }
  }
  componentDidMount(){
    const username = localStorage.getItem('username');
    if(username){
      this.setState({
        username: username
      })
    }
  }
  render(){
    return (
      <Router>
        <div className="container">
        {this.state.username}
        <Navbar />
        <br/>
          <Route path="/" exact component={ExercisesList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
          <Route path="/sample/create" component={CreateSample} />
          <Route path="/van/create" component={CreateVans} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

        </div>
      </Router>
    );
  }
  
}

export default App;
