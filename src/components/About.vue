<script>
  import axios from 'axios'
  export default {
    name: 'About',
    data(){
      return {
        aboutme: {}
      }
    },
    async mounted(){
      const aboutme = await axios.get('https://api.cosmicjs.com/v2/buckets/nuxt-portfolio-production/objects/6056606482408b0007b7f1d2?pretty=true&read_key=LPx3LELVgjXcFbGKD3xjBQGNVd87FsFbK9bbCeO9MJ8lFGNcLN&props=slug,title,content,metadata')
      this.aboutme = aboutme.data.object
    }
  }
</script>

<template>
  <v-card>
    <v-card-title class="primary--text font-weight-black">
      About Me
    </v-card-title>
    <v-card-text v-if="aboutme.metadata != undefined">
      <p>{{ aboutme.metadata.p1 }}</p>
      <p>{{ aboutme.metadata.p2 }}</p>
      <p>{{ aboutme.metadata.p3 }}</p>
      <p>{{ aboutme.metadata.p4 }}</p>      
      <blockquote class="blockquote py-2"><p><em>{{ aboutme.metadata.quote }}<br/>- {{ aboutme.title }}</em></p></blockquote>
    </v-card-text>
  </v-card>
</template>