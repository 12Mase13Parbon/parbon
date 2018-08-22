import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './UIcomponent.css';

import { Link } from 'react-router-dom';
import durga from '../../assets/images/durga.png';
import $ from 'jquery';

class UserPlaces extends Component {
    render() {
        return(
            <div>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                <div class="w3-card-4">

                <header class="w3-container w3-blue">
                <h1>Header</h1>
                </header>

                <div class="w3-container">
                <p>Lorem ipsum...</p>
                </div>

                <footer class="w3-container w3-blue">
                <h5>Footer</h5>
                </footer>

            </div>
            </div>
        )
    }
}
export default UserPlaces;