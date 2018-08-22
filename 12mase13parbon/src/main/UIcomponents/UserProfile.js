import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './UIcomponent.css';

import { Link } from 'react-router-dom';
import durga from '../../assets/images/durga.png';
import $ from 'jquery';
import UserPlaces from './UserPlaces';
import UserGallary from './UserGallary';
import SimpleMap from './SimpleMap';

$(document).ready(function() {
    $("#place").click(function() {
        $('#cardMap').attr('class', 'animate-left-out');
        $('#cardGallary').attr('class', 'animate-right-out');
        window.setTimeout(function(){
            $('#cardMap').css('display', 'none');
            $('#cardGallary').css('display', 'none');
            $('#cardPlace').css('display', 'block');
                $('#cardPlace').attr('class', 'row animate-left');
            
        }, 200);
       
    });
});
$(document).ready(function() {
    $("#home").click(function() {
        $('#cardPlace').attr('class', 'row animate-right-out');
        $('#cardGallary').attr('class', 'row animate-right-out');
        window.setTimeout(function(){
            $('#cardPlace').css('display', 'none');
            $('#cardGallary').css('display', 'none');
            $('#cardMap').css('display', 'block');
            $('#cardMap').attr('class', 'row animate-left');
            }, 200);
    

    
});
});

$(document).ready(function() {
    $("#gallary").click(function() {
        $('#cardPlace').attr('class', 'animate-left-out');
        
        window.setTimeout(function(){
            $('#cardPlace').css('display', 'none');
            $('#cardMap').css('display', 'none');
            $('#cardMap').attr('class', 'animate-left-out');
            $('#cardGallary').css('display', 'block');
                $('#cardGallary').attr('class', 'row animate-right');
            
        }, 200);
       
    });
});
$(document).ready(function() {
    $("#user-club-register").click(function() {
        $("#club-modal").css('display','block');
    });
    $("#club-modal-close").click(function() {
        $("#club-modal").fadeOut(800);
        window.setTimeout(function() {
            $("#club-modal").css('display','none');
        },800);
       
    });
});

class UserProfile extends Component {
    render() {
        return(
            <div>
            
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            <nav class="navbar navbar-expand-lg mynavbar">
            <a class="navbar-brand" href="#"><img src={durga} alt="" id="user-dp" class="user-dp" /><strong>User Name</strong></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">☰</span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#" id="home" >Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="place" href="#">Places</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" id="gallary">Gallary</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Profile
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#" id="user-club-register">Register a club loaction</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" ><Link to="/">Logout</Link></a>
                    </div>
                </li>
                
                </ul>
               
            </div>
            </nav>
            
            <div id="cardMap">
            
               <SimpleMap />
            
            </div>
            <div id="cardPlace">
            
               <UserPlaces />
            
            </div>
            <div id="cardGallary">
            
               <UserGallary />
            
            </div>
            <div id="club-modal" class="w3-modal">
                <div class="w3-modal-content w3-animate-zoom w3-card-4">
                <header class="w3-container w3-teal"> 
                    <span id="club-modal-close" 
                    class="w3-button w3-display-topright">&times;</span>
                    <h2>Modal Header</h2>
                </header>
                <br />
                <div class="w3-container">
                    <form class="form-group">
                        <input type="text" class="form-control club-name" id="club-name" name="club" placeholder="Enter The Club Name" required /><br />
                        <textarea class="form-control" name="club-address" placeholder="Enter Club Address"></textarea><br />
                        <p class="btn btn-primary" id="navigate-prev">Go Previous</p>
                        
                        <input type="submit" name="submit" class="btn btn-primary user-club-register"  />
                    </form>
                </div>
                <footer class="w3-container w3-teal">
                    <p>Modal Footer</p>
                </footer>
                </div>
            </div>
            
            
            </div>
        )
    }
}
export default UserProfile;