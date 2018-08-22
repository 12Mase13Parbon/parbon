import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
import SideBar from './AdminSideBar';



class AdminView extends Component {
    render() {
        return(
            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                
                {/* <div class="w3-sidebar w3-bar-block w3-border-right" id="mySidebar">
                    <button id="BarHide" class="w3-bar-item w3-large">Close &times;</button>
                    <a href="#" class="w3-bar-item w3-button">Link 1</a>
                    <a href="#" class="w3-bar-item w3-button">Link 2</a>
                    <a href="#" class="w3-bar-item w3-button">Link 3</a>
                </div>
                
                    <button class="w3-button w3-xlarge" id="BarShow">☰</button> */}
                    <nav class="navbar navbar-expand-md navbar-bg-pink navbar-primary">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        ☰
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>    
                        </ul>
                    </div>  
                    </nav>
                    
                <div class=" container-fluid main-body">
                    mainbody
                </div>
            </div>
            
        )
    }
}
export default AdminView;