import React, { Component } from 'react';
import { Link } from 'react-router-dom';


/**
 * Create Luma+ Benefits Card Component
 */

class LumaPlusCards extends Component {
  render() {
    return (
             
        /* Loyalty Benefits cards */
      
    <div class="container">
      <div class="row">
         <div class="col-md-6 order-2 order-md-1">
            <img src="https://t3.ftcdn.net/jpg/02/19/91/90/240_F_219919005_kCYKyF1DU89b7WPEfzxXW6eKfw9AlpNL.jpg" class="img-fluid rounded-start" alt="cid-2">
         </div>
         <div class="col-md-6 order-1 order-md-2">
            <div class="card-body">
               <h1 class="title">HOW IT WORKS</h1>
               <p class="card-text" style="font-size: 1.25em;">With LUMA+ you get points for every online or in-store purchase. Exchange your points for discounts and perks and get access to our exclusive offers for members.</p>
               <br>
               <ul style="font-size:1.25em;">
                  <li>Sign up for free</li>
                  <li>Earn points for every purchase</li>
                  <li>Climb higher with exclusive member offers</li>
                  <li>Get early access to limited edition collections</li>
               </ul>
            </div>
         </div>
      </div>
      <br>
      <br>
      <div class="row">
         <div class="col-md-6 order-2 order-md-1">
            <div class="card-body">
               <h1 class="title">FROM BLUE TO PLATINUM</h1>
               <p class="card-text" style="font-size:1.25em;">Earn more points, rise to a new peak and get even more special offers and unique experiences, including free expedited shipping and dedicated customer support.</p>
            </div>
         </div>
         <div class="col-md-6 order-1 order-md-2">
            <img src="https://t3.ftcdn.net/jpg/03/86/46/32/240_F_386463291_vzuYZTf83aE6W490NUuKDMeT91hgFuI1.jpg" class="img-fluid rounded-start" alt="cid-2">
         </div>
      </div>
      <br>
      <div class="row">
         <h1 class="title" style="margin-left:12px;">THE PERKS OF BEING A LUMA+ MEMBER</h1>
         <div class="col-md-4 order-1 order-md-2">
            <img src="https://demo-system-next.s3.amazonaws.com/assets/luma/luma%2Bbanner-small.png" class="img-fluid rounded-start" alt="cid-2">
         </div>
         <div class="col-md-8 order-2 order-md-1">
            <img src="https://demo-system-next.s3.amazonaws.com/assets/luma/Luma-tiers.jpg" class="img-fluid rounded-start" alt="cid-2">
         </div>
      </div>
      <br>
       <div class="row">
         <section style="padding-left: 15px;padding-right: 15px;width: 100%;">
            <div style="color: rgb(51, 51, 51);margin-top: 20px;padding-left: 15px;padding-right: 15px;background-size: cover;background-image: url('https://demo-system-next.s3.amazonaws.com/assets/luma/AdobeStock_352857962.jpeg');background-position: center bottom;/* margin-left: 15px; *//* margin-right: 100px; */ height: 90%;" class="container">
               <div class="title-center-dark" style="color: rgb(0, 0, 0);">
                  <div class="Title__content">
                     <h1 class="title-center-dark">BECOME A LUMA+ MEMBER</h1>
                  </div>
                  <br>
               </div>
               <div style="/* gap: 1rem 2rem; *//* padding-right: 20px; */" class="Container">
                  <div class="content" style="float:right;">
    {/*  removing original placement of <MyForm />
    */}

   </div>
                 
               </div>
            </div>
         </section>
      </div>
   </div>
 


    );
  }
}

export default LumaPlusCards;