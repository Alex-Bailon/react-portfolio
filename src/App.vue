<template>
  <v-parallax height="100%" src="https://images.unsplash.com/photo-1566410824233-a8011929225c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" >
  <v-app>
    <v-main >
      <v-container >
        <v-row>
          <v-col cols="12" md="4">
            <v-card class="mx-auto" max-width="344">
              <v-card-title class="pt-2">
                Alex Bailon
              </v-card-title>
              <v-card-subtitle class="pb-0">
                Full Stack Developer <br/>
                <v-btn
                  v-for="(social, i) in socials"
                  :key="i"
                  :color="social.color"
                  class="white--text"
                  fab
                  icon
                  small
                  :href="social.link"
                  target="_blank"
                >
                  <v-icon large>{{ social.icon }}</v-icon>
                </v-btn>
              </v-card-subtitle>
              <v-card-text>
                <v-img src="https://raw.githubusercontent.com/Alex-Bailon/Alex-Bailon.github.io/master/assets/images/AlexGCWest.jpg" />
                <v-timeline dense>
                  <v-timeline-item v-for="( item, i ) in timelineItems" :key="i" :color="item.color" :icon="item.icon" fill-dot>
                    <p><strong>{{ item.title }}</strong> <br/> {{ item.text }}</p>
                  </v-timeline-item>
                </v-timeline>
                <v-btn block depressed outlined href="https://alex-bailon.github.io/assets/images/A_Bailon_Resume.pdf" target="_blank">
                  <v-icon left>mdi-file-document</v-icon> Resume
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="8">
            <v-card>
              <v-tabs show-arrows right grow>
                <v-tab @click="activeTab='about'">About Me</v-tab>
                <v-tab @click="activeTab='portfolio'">Portfolio</v-tab>
                <v-tab @click="activeTab='contact'">Contact</v-tab>
              </v-tabs>
            </v-card>
            <div class="pb-5"></div>
            <About v-if="activeTab == 'about'" />
            <Portfolio v-else-if="activeTab == 'portfolio'" />
            <Contact v-else />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
  </v-parallax>
</template>

<script>
import About from './components/About';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

export default {
  name: 'App',
  data(){
    return {
      activeTab: 'about',
      timelineItems: [
        {
          title: 'Availability:',
          text: 'Full-time',
          color: 'red lighten-2',
          icon: 'mdi-calendar-check-outline'
        },
        {
          title: 'Developement Expreience:',
          text: 'One year',
          color: 'green lighten-1',
          icon: 'mdi-briefcase-outline'
        },
        {
          title: 'Education:',
          text: 'Northwestern University',
          color: 'purple darken-1',
          icon: 'mdi-school-outline'
        },
        {
          title: 'Country:',
          text: 'United States',
          color: 'indigo',
          icon: 'mdi-crosshairs-gps'
        },
      ],
      socials: [
        {
          icon: 'mdi-github',
          color: 'purple darken-1',
          link: 'https://github.com/Alex-Bailon'
        },
        {
          icon: 'mdi-linkedin',
          color: 'cyan darken-1',
          link: 'https://www.linkedin.com/in/alex-bailon'
        },
      ]
    }
  },
  components: {
    About,
    Portfolio,
    Contact
  },
};
</script>

<style scoped>
#app{
  background: none;
}
</style>