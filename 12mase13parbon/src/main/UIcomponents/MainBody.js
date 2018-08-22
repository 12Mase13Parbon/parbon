import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './UIcomponent.css';
import { Link } from 'react-router-dom';
import durga from '../../assets/images/durga.png';
import $ from 'jquery';
$(document).ready(function() {
    $("#middle-section").hide();
})
$(document).ready(function() {
    setInterval(function() {
        $("#middle-section").fadeIn(1000);
    },100);
});

$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#to-top').fadeIn();
    } else {
        $('#to-top').fadeOut();
    }
});




class MainBody extends Component {
    
    render() {
        return(
                
                <div class="body" id="body">
                
               

                
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                <link rel="stylesheet" href="./UIcomponent.css" />
                <section id="first">
                </section>
                <section>
                        <div class="row">
                            <div class="col-md-4 offset"></div>
                            <div class="top-to-bottom" id="img-durga1">
                                <img src={durga} alt="durga" class="durga-img" />
                            </div>
                        </div>

                    </section>
                   


                   <section>
                       <div class="row mid-row">
                            <div class="col-md-2 offset"></div>
                            <div class="col-md-10">
                        
                            <div class="card-group" id="middle-section">
                            <div class="col-md-5">
                            
                                <div class="card" >
                                    <div class="card-header">
                                        <p class="card-title"><strong>Register as Club</strong></p>
                                    </div>
                                    <div class="card-body">
                                        <Link to="/Club"><button class="btn btn-primary btn-lg">Register Now</button></Link>
                                    </div>
                                    <div class="card-footer">
                                        <p>You should provide the respective club details</p>
                                    </div>
                                </div>
                                
                                </div>
                                <div class="col-md-5">
                                
                                <div class="card">
                                    <div class="card-header">
                                        <p class="card-title"><strong>Register as user</strong></p>
                                    </div>
                                    <div class="card-body">
                                    <Link to="/User"><button class="btn btn-success btn-lg">Register Now</button></Link>
                                    </div>
                                    <div class="card-footer">
                                        <p>You should provide the respective club details</p>
                                    </div>
                                </div>
                               
                                
                                </div>
                                </div>
                            </div>
                           
                       </div>
                   </section>

                    <section>
                        <div class="row mid-row">
                        <div class="col-md-8 offset"></div>
                            <div class="bottom-to-top" id="img-durga">
                                <img src={durga} alt="kash" class="durga-img2" />
                            </div>
                        </div>

                    </section>
                    <div class="row">
                    
                    <div class="to-top">
                    
                        <a href="#first"><button class="w3-circle btn btn-large top-btn"id="to-top">#</button></a>
                    </div>
                    </div>
                </div>
        );
    }
}
export default MainBody;