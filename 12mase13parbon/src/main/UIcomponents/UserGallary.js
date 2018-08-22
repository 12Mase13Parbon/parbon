import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './UIcomponent.css';

import durga from '../../assets/images/durga.png';
import $ from 'jquery';


class UserGallary extends Component {
    render() {
        return(
            <div>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                <div class="col-md-12">
                <div class="w3-row-padding w3-margin-top">
  <div class="w3-third">
    <div class="w3-card">
      <img src={durga} alt="durga" class="gallary-img" />
      <div class="w3-container">
        <h5>5 Terre</h5>
      </div>
    </div>
  </div>

  <div class="w3-third">
    <div class="w3-card">
    <img src={durga} alt="durga" class="gallary-img" />
      <div class="w3-container">
        <h5>Monterosso</h5>
      </div>
    </div>
  </div>

  <div class="w3-third">
    <div class="w3-card">
    <img src={durga} alt="durga" class="gallary-img" />
      <div class="w3-container">
        <h5>Vernazza</h5>
      </div>
    </div>
  </div>
</div>

<div class="w3-row-padding w3-margin-top">
  <div class="w3-third">
    <div class="w3-card">
    <img src={durga} alt="durga" class="gallary-img" />
      <div class="w3-container">
        <h5>Manarola</h5>
      </div>
    </div>
  </div>

  <div class="w3-third">
    <div class="w3-card">
    <img src={durga} alt="durga" class="gallary-img" />
      <div class="w3-container">
        <h5>Corniglia</h5>
      </div>
    </div>
  </div>

  <div class="w3-third">
    <div class="w3-card">
    <img src={durga} alt="durga" class="gallary-img" />
      <div class="w3-container">
        <h5>Riomaggiore</h5>
      </div>
    </div>
  </div>
</div>
                </div>
            </div>
        )
    }
}
export default UserGallary;