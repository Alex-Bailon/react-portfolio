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
        "/",
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
      <v-form name="ask-question" @submit.prevent="handleSubmit">
        <v-text-field
          v-model="form.name"
          label="Name"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="form.email"
          label="Email"
          outlined
        ></v-text-field>
        <v-textarea
          v-model="form.msg"
          outlined
          label="Message"
        ></v-textarea>
        <v-btn type="submit">Send</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>