import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
import './AdminCss.css';
import '../UIcomponents/UIcomponent.css';


class UserList extends Component {
    render() {
        return(
            <div>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                <div class="w3-container">
                    <h2>User List</h2>
                    <table class="w3-table-all w3-tiny w3-card-4">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Points</th>
                        </tr>
                        <tr>
                            <td>Jill</td>
                            <td>Smith</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Eve</td>
                            <td>Jackson</td>
                            <td>94</td>
                        </tr>
                        <tr>
                            <td>Adam</td>
                            <td>Johnson</td>
                            <td>67</td>
                        </tr>
                    </table>
                    </div>
            </div>
        )
    }
}
export default UserList;
