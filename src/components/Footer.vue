<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      width="100%"
      class="black white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="(item, i) in icons"
          :key="i"
          class="mx-4 white--text"
          icon
          @click="pushPage(item.url)"
        >
          <v-icon size="24px">
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>GOKKO CLUB</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
  import Vue from 'vue' 

  export default Vue.extend({
    name: 'Footer',

    data: () => ({
      icons: [
        {
          icon: 'mdi-twitter',
          url: 'https://twitter.com/gokko5club'
        },
        {
          icon: 'mdi-instagram',
          url: 'https://www.instagram.com/gokko5club/'
        },
        {
          icon: 'mdi-youtube',
          url: 'https://www.youtube.com/channel/UChbyqrxREoPtmUmYaxUAGqA'
        },
        {
          icon: 'mdi-music-circle-outline',
          url: 'https://www.tiktok.com/@gokko5club'
        }
      ]
    }),

    methods: {
      pushPage (url: string) {
        window.open(url, '_blank', 'width=1024,height=768,scrollbars=yes,resizable=yes')
      }
    },
  })
</script>

<style scoped>

.video-player-box {
  display: flex;
  justify-content: center;
}
.video-secttion {
  position: relative;
}
.logo {
  position: absolute;/*絶対配置*/
  color: white;/*文字は白に*/
  top: 10%;
  left: 0;
  width: 50%;
}

.underline {
  border-bottom: solid;
  border-color: #D13D2D;
  border-width: 5px;/*5ピクセルの太さにする*/
}
</style>