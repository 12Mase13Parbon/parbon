import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
import './AdminCss.css';

$(document).ready(function() {
    $("#BarHide").click(function() {
        $("#mySidebar").css('display','none');
    });
});
$(document).ready(function() {
    $("#BarShow").click(function() {
        $("#mySidebar").css('display','block');
    });
});

class AdminSideBar extends Component {
    render() {
        return(
            <div>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                {/* <div class="w3-sidebar w3-bar-block w3-border-right" id="mySidebar">
                    <button id="BarHide" class="w3-bar-item w3-large">Close &times;</button>
                    <a href="#" class="w3-bar-item w3-button">Link 1</a>
                    <a href="#" class="w3-bar-item w3-button">Link 2</a>
                    <a href="#" class="w3-bar-item w3-button">Link 3</a>
                </div>
                
                    <button class="w3-button w3-xlarge" id="BarShow">☰</button> */}
                    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Linkjddbfnsdvfnsdfnsdbfvnbsdvfnbsdvfnvsdnfvsnbvfnbsdvf</a>
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
                    
            </div>
        )
    }
}
export default AdminSideBar;