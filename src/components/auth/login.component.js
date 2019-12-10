import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Login extends Component{
    constructor(){
        super();
        this.onChangeInput = this.onChangeInput.bind(this);
        this.login = this.login.bind(this);
        this.state = {
            username : '',
            password: ''
        }
    }

    onChangeInput(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    login(){
       if(this.state.username === "" || this.state.password === ""){
           alert("Both fields required");
       }else{
            const loginDetails = {
                username: this.state.username,
                password: this.state.password
            }
            axios.post("http://localhost:5000/users/login", loginDetails)
                .then(response => console.log(response));
       }
    }

    render(){
        return(  
            <React.Fragment>
                <div className="col-lg-4 mx-auto">
                    <div className="form-group">
                        <label>Username/Email</label>
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.onChangeInput}
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChangeInput}
                            className="form-control"
                        />
                    </div>
                    <button className="btn btn-primary" onClick={this.login}>Login</button>
                </div>

                <Link to="/register" className="nav-link">Register here.</Link>
            </React.Fragment>
         
        )
    }


}

export default Login;