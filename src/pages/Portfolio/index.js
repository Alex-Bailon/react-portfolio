import React from "react";
import homeBody from "./homeBody.png"
import CodeQuiz from "./CodeQuiz.png"
import bugerApp from "./burger-app.png"
import DayPlanner from "./DayPlanner.png"
import Flyte from "./Flyte.png"
import Weather from "./WeatherDashboard.png"
import Card from "../../components/Card"

function Protfolio() {
  const projects = [
    {
      name: 'Home Body',
      image: homeBody,
      description: `A full stack health app that allows user to sing-up and login so that
                    they can keep track of their daily nutrition intake.`,
      live: 'https://health-app-2020.herokuapp.com/',
      github: 'https://github.com/Alex-Bailon/health-app'
    },
    {
      name: 'Flyte',
      image: Flyte,
      description: `Stock market app that gets information from three APIs. With a
                    group of five, we had a little more than a week to creat the
                    app from scratch.`,
      live: 'https://kyleres.github.io/Finance_App/',
      github: 'https://github.com/kyleres/Finance_App'
    },
    {
      name: 'Weather Dashboard',
      image: Weather,
      description: `A weather app that gets information from an API and displays
                    the current and five day weather forecast for the searched
                    city. Saves cities into local storage.`,
      live: 'https://alex-bailon.github.io/weather-dashboard/',
      github: 'https://github.com/Alex-Bailon/weather-dashboard'
    },
    {
      name: 'Code Quiz',
      image: CodeQuiz,
      description: `A fun short quiz that uses JS to render questions and display
                    them onto the html. At the end of quiz user can save score and
                    high scores are saved to local storage.`,
      live: 'https://alex-bailon.github.io/code-quiz/',
      github: 'https://github.com/Alex-Bailon/code-quiz'
    },
    {
      name: 'Burger App',
      image: bugerApp,
      description: `An app that allows the user to input their favorite burgers,
                    stores them into an MySQL database and with the click of a
                    button “devours” the burger (update MySQL database).`,
      live: 'https://frozen-retreat-67912.herokuapp.com/',
      github: 'https://github.com/Alex-Bailon/burger'
    },
    {
      name: 'Day Planner',
      image: DayPlanner,
      description: `A simple day planner for regular business hours. Displays
                    current date and check for the current hour to know if an
                    event has passed, current or in the future.`,
      live: 'https://alex-bailon.github.io/day-planner/',
      github: 'https://github.com/Alex-Bailon/day-planner'
    }
  ]
  return (
    <>
      <div className="row mt-2 mb-3 py-1 px-1">
        <h1>Portfolio</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3">
        <Card projects={projects}/>
      </div>

    </>
  );
}

export default Protfolio;
