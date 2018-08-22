import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
import SideBar from './AdminSideBar';
import ClubList from './ClubList';
import './AdminCss.css';
import '../UIcomponents/UIcomponent.css';
import UserList from './UserList';


$(document).ready(function() {
    
    $("#login-admin").css('display','block');
    $("#body1").css('display','none');

    $("#admin").click(function() {
        var adminEmail=document.getElementById("admin-email").value;
        var adminPassword=document.getElementById("admin-password").value;
        if(adminEmail=="titas@gmail.com" && adminPassword=="12345") {
            $("#login-admin").css('display','none');
            $("#body1").css('display','block');
            $("#showUser").css('display','block');
            $("#show-reg-club").css('display','block');
            $("#show-user-reg-club").css('display','block');
            $("#pending-request").css('display','block');
        }
        else {
            alert("You are not an admin");
        }
    });

    $("#showUser").click(function() {
        $("#userlist").css('display','block');
        $("#clublist").css('display','none');
    });
    $("#show-reg-club").click(function() {
        $("#clublist").css('display','block');
        $("#userlist").css('display','none');
    });

    $("#show-reg-club").click(function() {
        $("#self-reg-club").css('display','block');
        $("#user-reg-club").css('display','none');
        $("#pending-requests").css('display','none');
    });
    

    $("#show-user-reg-club").click(function() {
        $("#self-reg-club").css('display','none');
        $("#user-reg-club").css('display','block');
        $("#pending-requests").css('display','none');
    });

    
    $("#pending-request").click(function() {
        $("#self-reg-club").css('display','none');
        $("#user-reg-club").css('display','none');
        $("#pending-requests").css('display','block');
    });
    
});

class AdminLogin extends Component {
    render() {
        return(
            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
                
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                
                {/* <div class="w3-sidebar w3-bar-block w3-border-right" id="mySidebar">
                    <button id="BarHide" class="w3-bar-item w3-large">Close &times;</button>
                    <a href="#" class="w3-bar-item w3-button">Link 1</a>
                    <a href="#" class="w3-bar-item w3-button">Link 2</a>
                    <a href="#" class="w3-bar-item w3-button">Link 3</a>
                </div>
                
                
                    <button class="w3-button w3-xlarge" id="BarShow">☰</button> */}

                  <div id="login-admin" class="w3-modal admin-login-modal">
                    <div class="w3-animate-top  w3-modal-content">
                    <header class="w3-container w3-teal"> 
                        
                        <h2>Modal Header</h2>
                    </header><br />
                    <div class="w3-container">
                        <p><input type="email" name="email" class="form-control" id="admin-email" placeholder="Enter Admin Email"/></p>
                        <p><input type="password" name="password" class="form-control" id="admin-password" placeholder="Enter Admin password"/></p>
                    </div>
                    <footer class="w3-container w3-teal">
                        <p class="btn btn-primary" id="admin">Login</p>
                    </footer>
                    </div>
                </div>
                    <nav class="navbar navbar-expand-md navbar-bg-pink navbar-primary">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        ☰
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" id="showUser" href="#">User List</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Locations</a>
                        </li>
                        <li class="nav-item w3-dropdown-hover">
                        
                            <a class="nav-link">Clubs</a>
                            <div class="w3-dropdown-content w3-bar-block w3-card-4">
                                <a href="#" class="w3-bar-item w3-button" id="show-reg-club">Self Registered Clubs</a>
                                <a href="#" class="w3-bar-item w3-button" id="show-user-reg-club">User Registered Clubs</a>
                                <a href="#" class="w3-bar-item w3-button" id="pending-request">Pending Requests</a>
                            </div>
                            
                        </li>    
                        </ul>
                    </div>  
                    </nav>
                    
                <div class="container-fluid main-body" id="body1">
                <div id="clublist">
                    <ClubList />
                </div>
                <div id="userlist">
                    <UserList />
                </div>
                </div>
            </div>
            
        )
    }
}
export default AdminLogin;