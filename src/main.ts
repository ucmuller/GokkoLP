import Vue from 'vue'
import VueGtag from 'vue-gtag'
import VueVideoPlayer from 'vue-video-player'
import { firestorePlugin } from 'vuefire'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueVideoPlayer)
Vue.use(firestorePlugin)
Vue.use(
  VueGtag,
  {
    config: { id: "G-H4G3RPNXQY" },
  },
  router
);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
