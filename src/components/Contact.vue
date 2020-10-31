<script>
import axios from 'axios'
export default {
  name: 'Contact',
  data(){
    return {
      form: {
        name: '',
        email: '',
        msg: ''
      }
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit () {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "https://alex-bailon.netlify.app/",
        this.encode({
          "form-name": "ask-question",
          ...this.form
        }),
        axiosConfig
      );
    }
  }
}
</script>

<template>
  <v-card>
    <v-card-title class="primary--text font-weight-black">
      Contact
    </v-card-title>
    <v-card-text>
      <form 
        name="ask-question" 
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
        >
        <input
        type="hidden"
        name="form-name"
        value="ask-question"
        >
        <v-text-field
          v-model="form.name"
          label="Name"
          outlined
          required
        ></v-text-field>
        <v-text-field
          v-model="form.email"
          label="Email"
          outlined
          required
        ></v-text-field>
        <v-textarea
          v-model="form.msg"
          outlined
          required
          label="Message"
        ></v-textarea>
        <v-btn type="submit">Send</v-btn>
      </form>
    </v-card-text>
  </v-card>
</template>
