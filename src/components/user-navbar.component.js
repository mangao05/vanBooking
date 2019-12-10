import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class UserNavbar extends Component{
    render(){
        return (
            <Link to="/" className="nav-link">User List</Link>
        )
    }
}

export default UserNavbar;