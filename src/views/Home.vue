<template>
  <first-view />
</template>

<script lang="ts">
  import Vue from 'vue'
  import FirstView from '../components/FirstView.vue'

  export default Vue.extend({
    name: 'Home',

    components: {
      FirstView
    },
  })
</script>
