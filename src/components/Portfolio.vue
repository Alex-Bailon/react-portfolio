<script>
  export default {
    data: () => ({
      length: 3,
      onboarding: 0,
      portfolioInfo: [
        {
          img: 'https://raw.githubusercontent.com/Alex-Bailon/Alex-Bailon.github.io/master/assets/images/fetch.png',
          title: 'Fetch',
          text: 'Fetch is a Tinder for dogs. This app allows the user to create an account and start matching with other dogs. Using MERN my team and I were able to build this app from the ground up in just two weeks',
          live: 'https://fetch-woof-312.herokuapp.com/',
          github: 'https://github.com/raise-da-woof/fetch',
          col: '12',
          height: '300'
        },
        {
          img: 'https://raw.githubusercontent.com/Alex-Bailon/Alex-Bailon.github.io/master/assets/images/homeBody.png',
          title: 'Homebody',
          text: 'A full stack health app that allows user to sign-up and login so that they can keep track of their daily nutrition intake.',
          live: 'https://health-app-2020.herokuapp.com/',
          github: 'https://github.com/Alex-Bailon/health-app',
          col: '6'
        },
        {
          name: 'Weather Dashboard',
          img: 'https://raw.githubusercontent.com/Alex-Bailon/Alex-Bailon.github.io/master/assets/images/WeatherDashboard.png',
          text: `A weather app that gets information from an API and displays
          the current and five day weather forecast for the searched
          city. Saves cities into local storage.`,
          live: 'https://alex-bailon.github.io/weather-dashboard/',
          github: 'https://github.com/Alex-Bailon/weather-dashboard',
          col: '6'
        },
        {
          id: 6,
          name: 'Day Planner',
          img: 'https://raw.githubusercontent.com/Alex-Bailon/Alex-Bailon.github.io/master/assets/images/DayPlanner.png',
          text: `A simple day planner for regular business hours. Displays
                        current date and checks for the current hour to know if an
                        event is past, present or in the future. This powerful planner is fully frontend driven. `,
          live: 'https://alex-bailon.github.io/day-planner/',
          github: 'https://github.com/Alex-Bailon/day-planner',
          col: '12',
          height: '300'
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
    <v-row class="px-4 d-flex justify-space-around">
      <v-col cols="12" :sm="item.col" v-for="(item, i) in portfolioInfo" :key="i">
        <v-card min-height="425">
          <v-img :src="item.img" :height="item.height || 200"/>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>{{ item.text }} <br/> <a target="_blank" :href="item.live">Link to live site</a> <br/> <a target="_blank" :href="item.github">Link to Github Repository</a> </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-body-2 text-center">
        <p>To view more of my project please vist my <a href="http://github.com/Alex-Bailon" target="_blank">Github</a> or feel free to contact me <a href="mailto:abailon949@gmail.com">here</a>.</p>
      </v-col>
    </v-row>
  </v-card>
</template>