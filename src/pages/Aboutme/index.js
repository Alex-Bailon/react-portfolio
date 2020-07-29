import React, { useEffect } from "react";
import axios from 'axios'
import image from "./AlexBailon.jpg"
import "./style.css"

function Aboutme() {
  useEffect(()=> {
    axios.get('https://script.google.com/macros/s/AKfycbynlVv_y_xTTtwlAkvXTVVf0FHWIUV0yDWeiQsR_m7QEGrGqb_7/exec', { form_field_test: Date.call()})
    .then( res => console.log('done'))
  }, [])
  return (
    <>
        <div className="row mt-2 mb-2 py-1 px-1">
          <h1>About Me</h1>
        </div>
        <div className="row">
          <div className="col-lg-6 pb-1 mb-3">
            <img src={ image } className="img-fluid" alt=" of Alex Bailon at the Grand Canyon"/>
          </div>
          <div className="col-lg-6">
            <p>
            Full-Stack Web Developer with a background in customer service ensuring that customers are always fully 
            satisfied with the product and service they receive. Recently earned a certificate in Full Stack 
            Development from Northwestern University, with developed skills in JavaScript, CSS3, React.js, and responsive 
            web design. Having analytical problem solving skills and adaptableness, worked alongside a team to efficiently 
            create and develop mobile-first applications. With everyone’s contribution and the use of MERN ( MongoDB, Express,
             React, Node), the team and I were able to successfully create a dog dating app that allows users to 
            create a user login and swip on other dogs to set up a play date. Optimistic to support a fast-paced, quality-driven 
            team to build better experiences on the web for users and customers. 
            </p>
            <p>
              Currently doing freelance work for Fusion92 as a Software Developer use MJML to create HTML 
              content that is used for emails and landing pages. I have also used Email on Acid
              to ensure the code is fully responsive on different types of operating systems and email clients.
              I work with the Project Manager and Account Supervisor to ensure everything is 100% accurate to meet 
              and exceed the clients standards.
            </p>
          </div>
        </div>
    </>
  );
}

export default Aboutme;
