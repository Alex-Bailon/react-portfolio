import React, { useState, useEffect } from "react";

function Contact() {
  const style = {
    card: {
      "max-width": "18rem"
    }
  }
  return (
    <>
      <div class="row mt-2 py-1 px-1">
            <h1>Contact</h1>
      </div>
      <div class= "row">
        <div class="col-md-4 col-sm-12">
          <div class="card bg-light mb-2" style={ style.card }>
            <div class="card-header"><i class="fas fa-phone-square"> Phone Number</i></div>
            <div class="card-body">
              <p class="card-text"><a href="tel:+17739493259">(773)949-3259</a></p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="card bg-light mb-2" style={ style.card }>
            <div class="card-header"><i class="fas fa-inbox"> Email</i></div>
            <div class="card-body">
              <p class="card-text"><a href="mailto:abailon949@gmail.com">abailon949@gmail.com</a></p>
            </div>
          </div>
        </div> 
        <div class="col-md-4 col-sm-12">
          <div class="card bg-light mb-2" style={ style.card }>
            <div class="card-header"><i class="fab fa-github-square"> Github</i></div>
            <div class="card-body">
              <p class="card-text"><a href="https://github.com/Alex-Bailon" target="_blank"> Alex-Bailon</a></p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="card bg-light mb-2" style={ style.card }>
            <div class="card-header"><i class="fab fa-linkedin"> Linked-In</i></div>
            <div class="card-body">
              <p class="card-text"><a href="https://www.linkedin.com/in/alex-bailon" target="_blank"> Alex Bailon</a></p>
            </div>
          </div>
        </div> 
        <div class="col-md-4 col-sm-12">
          <div class="card bg-light mb-2" style={ style.card }>
          <div class="card-header"><i class="fas fa-file-pdf"> Resume</i></div>
            <div class="card-body">
              <p class="card-text"><a href="https://alex-bailon.github.io/assets/images/Alex-Bailon_Resume.pdf" target="_blank"> Alex Bailon</a></p>
            </div>
          </div>
        </div>      
      </div>
    </>
  );
}

export default Contact;
