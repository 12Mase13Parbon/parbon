import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './UIcomponent.css';
import $ from 'jquery';
import UserProfile from './UserProfile';





$(document).ready(function() {
    $("#navigate-left").click(function() {
        $('#card1').attr('class', 'animate-left-out');
        window.setTimeout(function(){
            $('#card1').css('display', 'none');
            $('#card2').css('display', 'block');
                $('#card2').attr('class', 'row animate-right');
            
        }, 200);
       
    });
});

$(document).ready(function() {
    $("#login").click(function() {
        $('#card1').attr('class', 'animate-left-out');
        window.setTimeout(function(){
            $('#card1').css('display', 'none');
            $('#card2').css('display', 'block');
            $('#card2').attr('class', 'row animate-right');
            $("#close").trigger('click');
        }, 200);
       
    });
});

$(document).ready(function() {
    
    $("#user-phone").change(function() {
        var num=(document).getElementById("user-phone").value;
        var c=0;
        var filter = /^[0-9-+]+$/;
        var len=num.length;
        if (filter.test(num) && (len==10)) {
            c=c+1;
        }
        if(c<1) {
            
            (document).getElementById("user-phone").value="";
            $("#user-phone").addClass('is-invalid');
            $("#user-phone").attr('placeholder','only 10 digit number are allowed');
            window.setTimeout(function() {
                $("#user-phone").attr('placeholder','Enter Your Phone Number');
            },1300);
        }
        else {
            $("#user-phone").removeClass('is-invalid');
            $("#user-phone").addClass('is-valid');
        }
    });
});

$(document).ready(function() {
    
    $("#name").change(function() {
        var name=(document).getElementById("name").value;
        var d=0;
        var filter = /^[a-zA-Z\s]+$/;
        if (filter.test(name)) {
            d=d+1;
        }
        if(d==0) {
            
            (document).getElementById("name").value="";
            $("#name").addClass('is-invalid');
            $("#name").attr('placeholder','only alphabets and space are allowed');
            window.setTimeout(function() {
                $("#name").attr('placeholder','Enter Your Name');
            },1300);
           
        }
        else {
            $("#name").removeClass('is-invalid');
            $("#name").addClass('is-valid');
        }
    });
});


$(document).ready(function() {
    $("#navigate-prev").click(function() {
        $('#card2').attr('class', 'row animate-right-out');
        window.setTimeout(function(){
            $('#card2').css('display', 'none');
            $('#card1').css('display', 'block');
            $('#card1').attr('class', 'row animate-left');
            }, 200);
    

    
});
});

$(document).ready(function() {
    $("#agree").click(function() {
        // alert("by clicking 'I agree' button you agreed with all terms and conditions of 12Mase13Parbon.")
        // $('#submit').css('display', 'block');
        // $('#agree').css('display', 'none');
        $('#agree-alert').css('display', 'block');
        $("#agree").css('display','none');
        $('#agree-alert').attr('class', 'w3-panel w3-blue-grey animate-top');
        
    });
});

$(document).ready(function() {
    $("#ok").click(function() {
        // alert("by clicking 'I agree' button you agreed with all terms and conditions of 12Mase13Parbon.")
        // $('#submit').css('display', 'block');
        // $('#agree').css('display', 'none');
        
        $('#agree-alert').fadeOut(1000);
        $("#agree").css('display','none');
        $("#submit").fadeIn(1000);
        
        
    });
    $("#login-modal").click(function() {
        $('#login-alert').css('display', 'block');
        
        $('#login-alert').attr('class', 'w3-panel w3-blue-grey w3-animate-zoom');
        $("#login-modal").hide();
    });
    $("#close").click(function() {
        $("#login-alert").fadeOut(800);
        $("#login-modal").fadeIn(800);
    });
});


class UserRegister extends Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            <div id="login-alert">
                <h3>Login Now</h3>
              
                
                    <input type="email" name="email" class="form-control" placeholder="Enter Registered Email" /><br />
                    <input type="password" name="password" class="form-control" placeholder="Enter Password" /><br />
                
                
                <p class="btn btn-success" id="login">Login</p>
                <p class="btn btn-danger login-modal" id="close">Close</p>
            </div>
                
                <div class="main-form">
                   
                
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card" id="card1" >
                        <div class="card-body">
                        <form class="form-group">
                            <h5 class="card-title">Sign Up now</h5>
                            <input type="text" class="form-control" id="name" name="name" placeholder="Enter Your Name" required /><br />
                            <input type="email" class="form-control" name="user-email" placeholder="Enter Your Email" required /><br />
                            <input type="text" class="form-control"  maxlength="10" id="user-phone" name="user-phone" placeholder="Enter Your Phone Number" required /><br />
                            <textarea class="form-control" name="user-address" placeholder="Enter Your Address"></textarea><br />
                            <p class="btn btn-primary" id="navigate-left">Next</p>
                            <a href="#"><p class="btn btn-success" id="login-modal" class="login-modal">Already Registered</p></a>
                            </form>
                        </div>
                        </div>
                    </div>
                    
                    <div class="col-sm-12">
                        <div class="card" id="card2" >
                        <div class="card-body">
                        <h5 class="card-title">Enter Member Details</h5>
                            {/* <input type="text" class="form-control" name="president" placeholder="Enter name of club president" required /><br />
                            <input type="email" class="form-control" name="president-email" placeholder="Enter president email" required /><br />
                            <input type="text" class="form-control" name="vice-president" placeholder="Enter name of club vice president" required /><br />
                            <input type="email" class="form-control" name="vice-president-email" placeholder="Enter vice president email" required /><br />
                            <input type="number" class="form-control" name="mamber" placeholder="Enter number of members" required /><br />
                            <input type="text" class="form-control" name="club-secratery" placeholder="Enter The Club Secratery Name" required /><br />
                           
                            <p class="btn btn-primary" id="navigate-prev">Go Previous</p>
                            <p class="btn btn-success" id="agree">I Agree</p>
                            <input type="submit" id="submit" name="submit" class="btn btn-primary" id="submit" /> */}
                            <UserProfile />
                        </div>
                        </div>
                    </div>
            </div>
           
            </div>
            
        </div>
        )
    }
}
export default UserRegister;