import React from "react";
import image from "./AlexBailon.jpg"

function Aboutme() {
  return (
    <>
        <div class="row mt-2 py-1 px-1">
          <h1>About Me</h1>
        </div>
        <div class="row">
          <div class="col-lg-6 pb-1">
            <img src={ image } class="img-fluid" alt=" of Alex Bailon at the Grand Canyon"/>
          </div>
          <div class="col-lg-6">
            <p>
              My name is Alex Bailon and I am from the Los Angeles Metropolitan area. I am 
              currently attending Northwestern University in Evanston, IL.  At Northwestern 
              I am taking a full stack flex coding bootcamp which is an intensive six month 
              web development course. A few of the covered in the course are HTML5, CSS3, 
              JavaScript, jQuery, Bootstrap (and other CSS Frameworks), Express.js, React.js, 
              Node.js, Database Theory, MongoDB, MySQL, Git and more. I am on track to graduate 
              from the course in July 2020. 
            </p>
            <p>
              I have also been doing freelance work for Fusion92 as a Software Developer where I use MJML to create HTML 
              content that is used for emails and landing pages. I have also used Email on Acid
              to ensure that the HTML that MJML are fully responsive on different types of operating
              systems and email clients.
            </p>
          </div>
        </div>
    </>
  );
}

export default Aboutme;
