import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './AdminCss.css';
import '../UIcomponents/UIcomponent.css';
import $ from 'jquery';
import SideBar from './AdminSideBar';




class ClubDetail extends Component {
    render() {
        return(
            <div>
                 <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                 <div class="row">
                    <span id="close-club-modal" class="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
                 </div>
                 <div class="row">
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
export default ClubDetail;