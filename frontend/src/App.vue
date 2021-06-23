<template>
  <!--<HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <DonationForm />
</template>

<script>
import DonationForm from "./components/DonationForm.vue";

export default {
  name: "App",
  components: {
    DonationForm,
  },
};
</script>

<style>
@font-face {
  font-family: IBMPlexSans;
  src: url(./assets/ibm-plex-sans-600.woff2);
}

body {
  background-color: #f5f5f5;
}

#app {
  font-family: IBMPlexSans, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
