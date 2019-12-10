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
import UserNavbar from './components/user-navbar.component';
import UserList from './components/users/user-list.component';
class App extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      loggedIn : false
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
        { this.state.loggedIn ? <Navbar /> : <UserNavbar/>}
        
        <br/>
          { this.state.loggedIn ? <Route path="/" exact component={ExercisesList} /> : <Route path="/" exact component={UserList} />}
          
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
