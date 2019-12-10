import React, { Component } from 'react';
import UserRow from './user-row.component';


class UserList extends Component {
  
    render(){
        return (
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Userame</th>
                        <th>Email</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <UserRow />
                </tbody>
            </table>
        )
    }
}

export default UserList;