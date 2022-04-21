<template>
  <v-app
    class="wrap"
  >
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Footer from './components/Footer.vue'

export default Vue.extend({
  name: 'App',

  components: {
    Footer
  },

  data: () => ({
    //
  }),
});
</script>

<style scoped>
.wrap{
  max-width: 1440px;
  margin: auto;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif
}
</style>
