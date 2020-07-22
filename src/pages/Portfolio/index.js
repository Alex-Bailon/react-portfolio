import React from "react";
import homeBody from "./homeBody.png"
import CodeQuiz from "./CodeQuiz.png"
import bugerApp from "./burger-app.png"
import DayPlanner from "./DayPlanner.png"
import Flyte from "./Flyte.png"
import Weather from "./WeatherDashboard.png"
import Card from "../../components/Card"
import fetch from './fetch.png'

function Protfolio() {
  const projects = [
    {
      id: 1,
      name: 'Fetch',
      image: fetch,
      description: `Fetch is a Tinder for dogs. This app allows the user to create
                    an account and start matching with other dogs. Using MERN my team
                    and I were able to build this app from the ground up in just two
                    weeks`,
      live: 'https://fetch-woof-312.herokuapp.com/',
      github: 'https://github.com/raise-da-woof/fetch'
    },
    {
      id: 2,
      name: 'Home Body',
      image: homeBody,
      description: `A full stack health app that allows user to sing-up and login so that
                    they can keep track of their daily nutrition intake.`,
      live: 'https://health-app-2020.herokuapp.com/',
      github: 'https://github.com/Alex-Bailon/health-app'
    },
    {
      id: 3,
      name: 'Flyte',
      image: Flyte,
      description: `Stock market app that gets information from three APIs. With a
                    group of five, we had a little more than a week to creat the
                    app from scratch.`,
      live: 'https://kyleres.github.io/Finance_App/',
      github: 'https://github.com/kyleres/Finance_App'
    },
    {
      id: 4,
      name: 'Weather Dashboard',
      image: Weather,
      description: `A weather app that gets information from an API and displays
      the current and five day weather forecast for the searched
      city. Saves cities into local storage.`,
      live: 'https://alex-bailon.github.io/weather-dashboard/',
      github: 'https://github.com/Alex-Bailon/weather-dashboard'
    },
    {
      id: 5,
      name: 'Burger App',
      image: bugerApp,
      description: `An app that allows the user to input their favorite burgers,
                    stores them into an MySQL database and with the click of a
                    button “devours” the burger (update MySQL database).`,
      live: 'https://frozen-retreat-67912.herokuapp.com/',
      github: 'https://github.com/Alex-Bailon/burger'
    },
    {
      id: 6,
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
      <div className="row mt-2 py-1 px-1">
        <h1>Portfolio</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3">
        <Card projects={projects}/>
      </div>

    </>
  );
}

export default Protfolio;
