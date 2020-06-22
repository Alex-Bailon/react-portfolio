import React, { useState } from "react";

function Signup() {
  return (
    <>
      <div class="row mt-5 py-1 px-1">
        <h1>Portfolio</h1>
      </div>
      <div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4">
          <div class="card h-100">
            <a href="https://health-app-2020.herokuapp.com/" target="_blank">
              <img src="../../../public/images/homeBody.png" alt='' class="card-img-top" />
            </a>
            <div class="card-body">
              <h5 class="card-title">Home Body</h5>
              <p class="card-text">
                A full stack health app that allows user to sing-up and login so that
                they can keep track of their daily nutrition intake. <br/>
                <a
                  
                  href="https://github.com/Alex-Bailon/health-app"
                  target="_blank"
                  >Link to Github repository</a
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <a href="https://kyleres.github.io/Finance_App/" target="_blank">
              <img src="../../../public/images/Flyte.png" class="card-img-top" />
            </a>
            <div class="card-body">
              <h5 class="card-title">Flyte</h5>
              <p class="card-text">
                Stock market app that gets information from three APIs. With a
                group of five, we had a little more than a week to creat the
                app from scratch. <br/>
                <a
                  href="https://github.com/kyleres/Finance_App"
                  target="_blank"
                  >Link to Github repository</a
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <a
              href="https://alex-bailon.github.io/weather-dashboard/"
              target="_blank"
            >
              <img
                src="../../../public/images/WeatherDashboard.png"
                class="card-img-top"
              />
            </a>
            <div class="card-body">
              <h5 class="card-title">Weather Dashboard</h5>
              <p class="card-text">
                A weather app that gets information from an API and displays
                the current and five day weather forecast for the searched
                city. Saves cities into local storage. <br/>
                <a
                  href="https://github.com/Alex-Bailon/weather-dashboard"
                  target="_blank"
                  >Link to Github repository</a
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <a
              href="https://alex-bailon.github.io/code-quiz/"
              target="_blank"
            >
              <img src="../../../public/images/CodeQuiz.png" class="card-img-top" />
            </a>
            <div class="card-body">
              <h5 class="card-title">Code Quiz</h5>
              <p class="card-text">
                A fun short quiz that uses JS to render questions and display
                them onto the html. At the end of quiz user can save score and
                high scores are saved to local storage. <br/>
                <a
                  href="https://github.com/Alex-Bailon/code-quiz"
                  target="_blank"
                  >Link to Github repository</a
                >
              </p>
            </div>
          </div>
        </div>

        <div class="col mb-4">
          <div class="card h-100">
            <a
              href="https://frozen-retreat-67912.herokuapp.com/"
              target="_blank"
            >
              <img
                src="../../../public/images/burger-app.png"
                class="card-img-top"
              />
            </a>
            <div class="card-body">
              <h5 class="card-title">Burger App</h5>
              <p class="card-text">
                An app that allows the user to input their favorite burgers,
                stores them into an MySQL database and with the click of a
                button “devours” the burger (update MySQL database). <br/>
                <a
                  href="https://github.com/Alex-Bailon/burger"
                  target="_blank"
                  >Link to Github repository</a
                >
              </p>
            </div>
          </div>
        </div>

        <div class="col mb-4">
          <div class="card h-100">
            <a
              href="https://alex-bailon.github.io/day-planner/"
              target="_blank"
            >
              <img
                src="../../../public/images/DayPlanner.png"
                class="card-img-top"
              />
            </a>
            <div class="card-body">
              <h5 class="card-title">Day Planner</h5>
              <p class="card-text">
                A simple day planner for regular business hours. Displays
                current date and check for the current hour to know if an
                event has passed, current or in the future. <br/>
                <a
                  href="https://github.com/Alex-Bailon/day-planner"
                  target="_blank"
                  >Link to Github repository</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Signup;
