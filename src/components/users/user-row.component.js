import React, { Component } from 'react';
import axios from 'axios';
class UserRow extends Component{

    constructor(){
        super();
        this.state = {
            users : []
        }
        
    }

    componentDidMount(){
        axios.get('http://localhost:5000/users/')
            .then(response => {
                this.setState({
                    users : response.data
                })
            })
    }

    render(){
        return (
            <tr>
                <td>qwewqe</td>
                <td>Qeasdas</td>
                <td>qweqwe</td>
            </tr>
        )
    }
}

export default UserRow;