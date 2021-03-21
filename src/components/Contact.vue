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
      },
      formFilled: this.formStatus(),
      snackbar: false,
      submit: false
    }
  },
  computed: {
    required() {
      return v => !!v || 'Field is required'
    },
    emailRules() {
      return [
        v => v.length <= 320 || 'Email is too long',
        v => /\S+@\S+\.\S+/.test(v) || 'E-mail must be valid',
      ]     
    }
  },
  methods: {
    formStatus() {
      if(this.name != '' && this.email != "" && this.msg != '')
      return true
      else false
    },
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    async handleSubmit () {
      if ( this.$refs.form.validate()){
        const axiosConfig = {
          header: { 
            "Content-Type": "application/x-www-form-urlencoded",
            'Access-Control-Allow-Origin': '*',
          }
        };
        this.snackbar = true
        this.submit = true
        await axios.post(
          "https://alex-bailon.netlify.app/",
          this.encode({
            "form-name": "ask-question",
            ...this.form
          }),
          axiosConfig
        )
      }
    },
  }
}
</script>

<template>
  <v-card>
    <v-card-title class="primary--text font-weight-black">
      Contact
    </v-card-title>
    <v-card-subtitle>
      For the quickest response please reach out to me on <a href="https://www.linkedin.com/in/alex-bailon">LinkedIn</a>
    </v-card-subtitle>
    <v-card-text>
      <form 
        name="ask-question" 
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
        >
        <v-form ref="form">
          <input
          type="hidden"
          name="form-name"
          value="ask-question"
          >
          <v-text-field
            v-model="form.name"
            label="Name"
            outlined
            :rules="[required]"
            :disabled="submit"
          ></v-text-field>
          <v-text-field
            v-model="form.email"
            label="Email"
            type="email"
            outlined
            :rules="emailRules"
            :disabled="submit"
          ></v-text-field>
          <v-textarea
            v-model="form.msg"
            outlined
            :rules="[required]"
            label="Message"
            :disabled="submit"
          ></v-textarea>

        </v-form>
        <v-btn outlined width="125" :disabled="submit" type="submit">Send<v-icon right small >mdi-send</v-icon></v-btn>
      </form>
    </v-card-text>

    <v-snackbar
      v-model="snackbar"
      color="success"
      transition="fade-transition"
      centered      
      multi-line
      dark
      shaped
    >
      Thank you for the submittion! <br/> I'll be in contact with you soon.
    </v-snackbar>

  </v-card>
</template>
