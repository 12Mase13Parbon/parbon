import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './AdminCss.css';
import '../UIcomponents/UIcomponent.css';
import $ from 'jquery';
import SideBar from './AdminSideBar';
import ClubDetail from './ClubDetail';

$(document).ready(function() {
    $(".show-btn").click(function() {
        $("#club-detail-modal").css('display','block');
    });
});

$(document).ready(function() {
    $("#close-club-modal").click(function() {
        $("#club-detail-modal").fadeOut(200);
    });
});

class ClubList extends Component {
    render() {
        return(
            <div>
               <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
               <div id="club-detail-modal" class="w3-modal">
               <div class=" w3-modal-content w3-card-4 w3-animate-zoom">
                    <ClubDetail />
                    </div>
                </div>
               <div class="w3-container" id="self-reg-club">
                <h2>Self Registered Club List</h2>
                <table class="w3-table-all w3-card-4">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Points</th>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td><button class="show-btn w3-button w3-white w3-border w3-border-blue w3-round-large">Show</button></td>
                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td><button class="show-btn w3-button w3-white w3-border w3-border-blue w3-round-large">Show</button></td>
                    </tr>
                    <tr>
                        <td>Adam</td>
                        <td>Johnson</td>
                        <td><button class="show-btn w3-button w3-white w3-border w3-border-blue w3-round-large">Show</button></td>
                    </tr>
                </table>
                </div>


                <div class="w3-container" id="user-reg-club">
                <h2>User Registered Club List</h2>
                <table class="w3-table-all w3-card-4">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Points</th>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td><button class="show-btn w3-button w3-white w3-border w3-border-blue w3-round-large">Show</button></td>
                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td><button class="show-btn w3-button w3-white w3-border w3-border-blue w3-round-large">Show</button></td>
                    </tr>
                    <tr>
                        <td>Adam</td>
                        <td>Johnson</td>
                        <td><button class="show-btn w3-button w3-white w3-border w3-border-blue w3-round-large">Show</button></td>
                    </tr>
                </table>
                </div>

                <div class="w3-container" id="pending-requests">
                <h2>Pending Requests</h2>
                <table class="w3-table-all w3-card-4">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Points</th>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td><button class="show-btn w3-button w3-white w3-border w3-border-blue w3-round">Show</button></td>
                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td><button class="show-btn w3-button w3-white w3-border w3-border-blue w3-round-large">Show</button></td>
                    </tr>
                    <tr>
                        <td>Adam</td>
                        <td>Johnson</td>
                        <td><button class="show-btn w3-button w3-white w3-border w3-border-blue w3-round-large">Show</button></td>
                    </tr>
                </table>
                </div>

                

            </div>
        )
    }
}
export default ClubList;