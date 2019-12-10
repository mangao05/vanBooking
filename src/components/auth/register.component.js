import React , { Component } from 'react';
import axios from 'axios';


class Register extends Component {
    constructor(){
        super();

        this.handleRegister = this.handleRegister.bind(this);
      
        this.handleChangeInput =  this.handleChangeInput.bind(this);
        this.state = {
            username : '',
            password : '',
            password2: '',
            email : ''
        }
    }
    handleChangeInput(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleRegister(){
        const userDetails = {
            username : this.state.username,
            email : this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        axios.post("http://localhost:5000/users/register", userDetails)
            .then(response => {
                console.log(response);
                this.setState({
                    username : '',
                    password: '',
                    email: '',
                    password2: ''
                })
            })
            .catch()
           
    }

    render(){
        return (
           <div className="col-lg-4 mx-auto">
               <div className="form-group">
                    <label for="username">Username/Email:</label>
                    <input 
                        type="text" 
                        className="form-control text-center" 
                        id="username" 
                        name="username"
                        onChange={this.handleChangeInput} 
                        placeholder="Enter Username or Email" 
                        value={this.state.username}
                    />
               </div>
               <div className="form-group">
                    <label for="email">Email:</label>
                    <input 
                        type="email" 
                        className="form-control text-center" 
                        onChange={this.handleChangeInput} 
                        name="email"
                        id="email" 
                        placeholder="Enter Password" 
                        value={this.state.email}
                    />
               </div>
               <div className="form-group">
                    <label for="password">Password:</label>
                    <input 
                        type="password" 
                        className="form-control text-center" 
                        onChange={this.handleChangeInput} 
                        id="password" 
                        name="password"
                        placeholder="Enter Password" 
                        value={this.state.password}
                    />
               </div>
               <div className="form-group">
                    <label for="password2">Confirm Password:</label>
                    <input 
                        type="password" 
                        className="form-control text-center" 
                        onChange={this.handleChangeInput} 
                        id="password2" 
                        name="password2"
                        placeholder="Confirm Password" 
                        value={this.state.password2}
                    />
               </div>
                <button className="btn btn-success btn-block" onClick={this.handleRegister}>Register</button>
           </div>
        )
    }
}

export default Register;