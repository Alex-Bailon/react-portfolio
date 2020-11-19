<script>
  export default {
    data: () => ({
      length: 3,
      onboarding: 0,
      portfolioInfo: [
        {
          img: 'https://raw.githubusercontent.com/Alex-Bailon/Alex-Bailon.github.io/master/assets/imagesResize/fetch.png',
          title: 'Fetch',
          text: 'Fetch is a Tinder for dogs. This app allows the user to create an account and start matching with other dogs. Using MERN my team and I were able to build this app from the ground up in just two weeks',
          live: 'https://fetch-woof-312.herokuapp.com/',
          github: 'https://github.com/raise-da-woof/fetch',
          align: 'start',
          color: '#1565C0',
        },
        {
          img: 'https://raw.githubusercontent.com/Alex-Bailon/Alex-Bailon.github.io/master/assets/imagesResize/homeBody.png',
          title: 'Homebody',
          text: 'A full stack health app that allows user to sign-up and login so that they can keep track of their daily nutrition intake.',
          live: 'https://health-app-2020.herokuapp.com/',
          github: 'https://github.com/Alex-Bailon/health-app',
          align: 'center',
          color: '#42A5F5',
        },
        {
          title: 'Weather Dashboard',
          img: 'https://raw.githubusercontent.com/Alex-Bailon/Alex-Bailon.github.io/master/assets/imagesResize/WeatherDashboard.png',
          text: `A weather app that gets information from an API and displays
          the current and five day weather forecast for the searched
          city. Saves cities into local storage.`,
          live: 'https://alex-bailon.github.io/weather-dashboard/',
          github: 'https://github.com/Alex-Bailon/weather-dashboard',
          align: 'start',
          color: '#FF7043',
        },
        {
          id: 6,
          title: 'Day Planner',
          img: 'https://raw.githubusercontent.com/Alex-Bailon/Alex-Bailon.github.io/master/assets/imagesResize/DayPlanner.png',
          text: `A simple day planner for regular business hours. Displays
                        current date and checks for the current hour to know if an
                        event is past, present or in the future. This powerful planner is fully frontend driven. `,
          live: 'https://alex-bailon.github.io/day-planner/',
          github: 'https://github.com/Alex-Bailon/day-planner',
          align: 'center',
          color: '#E64A19',
        },
        {
          id: 7,
          title: 'Code Quiz',
          img: 'https://raw.githubusercontent.com/Alex-Bailon/Alex-Bailon.github.io/master/assets/imagesResize/CodeQuiz.png',
          text: `A fun short code question quiz. User has 60 seconds to answer a few basic questions about coding. A timer is displayed and user gets a question wrong, time is penalized.`,
          live: 'https://alex-bailon.github.io/code-quiz/',
          github: 'https://github.com/Alex-Bailon/code-quiz',
          align: 'end',
          color: '#FF3D00',
        }

      ]
    }),

    methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },
    },
  }
</script>

<template>
  <v-card
    flat
    tile
  >
    <v-card-title class="primary--text font-weight-black">
      Portfolio
    </v-card-title>
    <v-card-text>
    
      <v-parallax v-for="project in portfolioInfo" :key="project.id"
        class="my-3"
        dark
        height="375"
        :src="project.img"
      >
        <v-row
          :align="project.align"
          justify="center"
        >
          <v-col
            class="text-center"
            cols="12"
            :style="{'background-color': project.color, 'opacity': 0.7, 'border-radius': '30px 60px'}"
          >
            <h1 class="display-1 mb-4">
              {{ project.title }}
            </h1>
            <h4 class="subheading">
              {{ project. text}}
               <br/> Link to <a class="links" target="_blank" :href="project.live">live site</a> & <a class="links" target="_blank" :href="project.github"> Github Repository</a>
            </h4>
          </v-col>
        </v-row>
      </v-parallax>
    </v-card-text>
    <v-row>
      <v-col class="text-body-2 text-center">
        <p>To view more of my project please vist my <a href="http://github.com/Alex-Bailon" target="_blank">Github</a> or feel free to contact me <a href="mailto:abailon949@gmail.com">here</a>.</p>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
  .links {
    text-decoration: none;
    color: black;
  }
</style>>