import React, { Component } from 'react';
import '../assets/css/welcome.css';
import Navbar from './UIcomponents/Navbar';
import MainBody from './UIcomponents/MainBody';
import $ from 'jquery';

// $(document).ready(function() {
//     $("#main").slideUp(10).slideDown(1000);
    
// });
class Welcome extends Component {
    render() {
        return(
            <div class="main-body" id="main-body">
                <div>
                    <Navbar />
                </div>
                <div id="main">
                <div class="main" id="main-cards" >
                    <MainBody />
                </div>
                </div>
            </div>
        );

    }
}
export default Welcome;