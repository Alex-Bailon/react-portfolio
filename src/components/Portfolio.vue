<script>
import axios from 'axios'
  export default {
    data: () => ({
      projects: []
    }),
    async mounted() {
      const projects = await axios.get('https://api.cosmicjs.com/v2/buckets/nuxt-portfolio-production/objects?pretty=true&query=%7B%22type%22%3A%22projects%22%7D&read_key=LPx3LELVgjXcFbGKD3xjBQGNVd87FsFbK9bbCeO9MJ8lFGNcLN&limit=20&props=slug,title,content,metadata')
      this.projects = projects.data.objects
    },
    methods: {
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
      <v-col cols="12" :sm="project.metadata.col" v-for="project in projects" :key="project.title">
        <v-card min-height="425">
          <v-img :src="project.metadata.img" :height="project.metadata.height"/>
          <v-card-title>{{ project.title }}</v-card-title>
          <v-card-text>{{ project.metadata.description }} <br/> <a target="_blank" :href="project.metadata.live">Link to live site</a> <br/> <a target="_blank" :href="project.metadata.github">Link to Github Repository</a> </v-card-text>
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