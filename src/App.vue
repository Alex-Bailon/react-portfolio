<template>
  <v-app>
    <v-main>
      <v-container >
        <v-row>
          <v-col cols="12" sm="4">
            <v-card class="mx-auto" max-width="344">
              <v-card-title>
                Alex Bailon
              </v-card-title>
              <v-card-subtitle>
                Full Stack Developer
              </v-card-subtitle>
              <v-card-text>
                <v-img src="https://raw.githubusercontent.com/Alex-Bailon/Alex-Bailon.github.io/master/assets/images/AlexBailon.jpg" />
                <v-timeline dense>
                  <v-timeline-item v-for="( item, i ) in timelineItems" :key="i" :color="item.color" :icon="item.icon" fill-dot>
                    <p><strong>{{ item.title }}</strong> <br/> {{ item.text }}</p>
                  </v-timeline-item>
                </v-timeline>
                <v-btn block depressed outlined>
                  <v-icon>mdi-file-document</v-icon> Resume
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="8">
            <HelloWorld/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  data(){
    return {
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
    }
  },
  components: {
    HelloWorld,
  },
};
</script>
