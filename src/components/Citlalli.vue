<script>
export default {
  name: 'Citlalli',
  data(){
    return {
      text: 'Hey...',
      arr: ['I know this is a little dumb...', 'But I wanted to say a few things...', 'You are the best thing that ever happened to me.', "Not only that, but you're amazing too...", "I know just words aren't really enough, but I all demonstarted to you everyday", "Whenever I see you, I can't help but smile.", "And when you laugh, it makes me laugh too", "When you're hurt, it hurts me to see you hurt...", "And when you do hurt, I will stop at NOTHING to help you feel better again.", "I will be in your corner whenever life tries to pick a fight.", "People may say you're nothing...", "But to me, you're everthing and more.", "And I know it seems like times are dark most of the time...", "But there will always be light to shine in that darkness.", "Whenever I thik of you, I feel that light.", "Becasue you're an amazing, talented woman.", "I know it seems like these are just words put together...", "But, my heart wanted to tell you this.", "And I wanted to tell you this.", "I will promise never to hurt you intentionally.", "And if I do hurt you unintentionally, I will do everything to make things right.", "You are my angel...", "And I will always be here for you", "No matter what."]  
    }
  },
  async mounted() {
    setInterval( () => {
      if( this.arr.length > 0 )
      this.text = this.arr[0]
      this.arr.shift()
    }, 5000)
  },
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" style="text-align: center">
        <h1>Hi Citlalli ❤️ </h1>
        <p>Made this little page for you, hope it help!</p>
      </v-col>
      <v-col cols="12" style="padding-top: 15px; text-align: center">
        <h1 style="max-width: 550px; margin: 0 auto" v-html="text"></h1>
      </v-col>
      <v-col cols="12">
        <v-img style="margin: 0 auto" src="https://raw.githubusercontent.com/Alex-Bailon/react-portfolio/master/src/assets/IMG_4958.jpeg" max-width="500px"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
#app{
  background: none;
}
a {
  text-decoration: none;
}
</style>
