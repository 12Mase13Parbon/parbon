import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './UIcomponent.css';
import $ from 'jquery';
import durga from '../../assets/images/durga.png';

class UserProfileHead extends Component {
    render() {
        return (
            <div>
            <nav class="navbar navbar-expand-lg mynavbar">
            <a class="navbar-brand" href="#"><img src={durga} alt="" id="user-dp" class="user-dp" /><strong>User Name</strong></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">#</span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Places</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Gallary</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Profile
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="localhost/3000/">Logout</a>
                    </div>
                </li>
                
                </ul>
               
            </div>
            </nav>
            </div>
        );
    }
}
export default UserProfileHead;
