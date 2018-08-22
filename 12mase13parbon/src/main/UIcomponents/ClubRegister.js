import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './UIcomponent.css';
import $ from 'jquery';



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
});

$(document).ready(function() {
    
    $(".club-name").change(function() {
        var name=(document).getElementById("club-name").value;
        var d=0;
        var filter = /^[a-zA-Z\s]+$/;
        if (filter.test(name)) {
            d=d+1;
        }
        if(d==0) {
            
            (document).getElementById("club-name").value="";
            $(".club-name").addClass('is-invalid');
            $(".club-name").attr('placeholder','only alphabets and space are allowed');
            window.setTimeout(function() {
                $(".club-name").attr('placeholder','Enter Your Name');
            },1300);
           
        }
        else {
            $(".club-name").removeClass('is-invalid');
            $(".club-name").addClass('is-valid');
        }
    });
});

class ClubRegister extends Component {
    render() {
        return (
            <div>
            <div id="agree-alert">
                <h3>If you agree</h3>
                <p>by clicking 'I agree' button you agreed with all terms and conditions of 12Mase13Parbon.</p>
                <p class="btn btn-success" id="ok">OK</p>
            </div>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                <div class="main-form">
                    <form class="form-group">
                
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card" id="card1" >
                        <div class="card-body">
                            <h5 class="card-title">Enter Club Details</h5>
                            <input type="text" class="form-control club-name" id="club-name" name="club" placeholder="Enter The Club Name" required /><br />
                            <input type="email" class="form-control" name="club-email" placeholder="Enter The Club Email" required /><br />
                            <textarea class="form-control" name="club-address" placeholder="Enter Club Address"></textarea><br />
                            <input type="text" class="form-control" name="club-secratery" placeholder="Enter The Club Secratery Name" required /><br />
                            <p class="btn btn-primary" id="navigate-left">Next</p>
                            
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card" id="card2" >
                        <div class="card-body">
                        <h5 class="card-title">Enter Member Details</h5>
                            <input type="text" class="form-control" name="president" placeholder="Enter name of club president" required /><br />
                            <input type="email" class="form-control" name="president-email" placeholder="Enter president email" required /><br />
                            <input type="text" class="form-control" name="vice-president" placeholder="Enter name of club vice president" required /><br />
                            <input type="email" class="form-control" name="vice-president-email" placeholder="Enter vice president email" required /><br />
                            <input type="number" class="form-control" name="mamber" placeholder="Enter number of members" required /><br />
                            <input type="text" class="form-control" name="club-secratery" placeholder="Enter The Club Secratery Name" required /><br />
                           
                            <p class="btn btn-primary" id="navigate-prev">Go Previous</p>
                            <p class="btn btn-success" id="agree">I Agree</p>
                            <input type="submit" id="submit" name="submit" class="btn btn-primary" id="submit" />
                        </div>
                        </div>
                    </div>
            </div>
            </form>
            </div>
            
        </div>
        )
    }
}
export default ClubRegister;