<script>
import About from './components/About';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import axios from 'axios'

export default {
  name: 'App',
  data(){
    return {
      activeTab: 'about',
      timelineItems: [],
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
  async mounted() {
    const timeline = await axios.get('https://api.cosmicjs.com/v2/buckets/nuxt-portfolio-production/objects?pretty=true&query=%7B%22type%22%3A%22time-lines%22%7D&read_key=LPx3LELVgjXcFbGKD3xjBQGNVd87FsFbK9bbCeO9MJ8lFGNcLN&limit=20&props=slug,title,content,metadata')
    this.timelineItems = timeline.data.objects
  },
};
</script>

<template>
  <v-parallax height="100%" src="https://images.unsplash.com/photo-1551651056-2cb4d5c104be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" >
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
                  <v-timeline-item v-for="( item, i ) in timelineItems" :key="i" :color="item.metadata.color" :icon="item.metadata.icon" fill-dot>
                    <p><strong>{{ item.metadata.title }}:</strong> <br/> {{ item.metadata.text }}</p>
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

<style>
#app{
  background: none;
}
a {
  text-decoration: none;
}
</style>
