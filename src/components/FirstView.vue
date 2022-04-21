<template>
  <v-container
    fluid
    class="wrap"
  >
    <v-app-bar
      absolute
      color="transparent"
      flat
      dark
      scroll-target="#scrolling-techniques-8"
    >
      <v-spacer></v-spacer>

      <div
        v-if="!sp"
        class="ma-0 pa-0"
      >
        <v-btn
          text
          @click="pushToHome()"
        >
          TOP
        </v-btn>

        <v-btn
          text
          @click="externalLink('https://gokkoclub.wraptas.site/')"
        >
          COMPANY
        </v-btn>
        
        <v-btn
          text
          @click="externalLink('https://gokkoclub.wraptas.site/dee1406c16aa4dfbb49476cb15855b2e')"
        >
          RECRUIT
        </v-btn>
      </div>

      <div
        v-if="sp"
        class="ma-0 pa-0"
      >
        <v-app-bar-nav-icon
          @click="drawer = true"
        >
        </v-app-bar-nav-icon>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
      dark
      width="300"
      color="black"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-white--text text--accent-4"
        >
        <v-row
          class="ma-2"
          justify="end"
        >
          <v-btn
            icon
          >
            <v-icon
              @click="drawer = false"
              large
            >
              mdi-close-circle
            </v-icon>
          </v-btn>
        </v-row>

          <v-list-item>
            <v-list-item-title
              class="text-h5 py-5"
              @click="pushToHome()"
            >
                <p class="drawer-text ma-0">
                  TOP
                </p>
              </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              class="text-h5 py-5"
              @click="externalLink('https://gokkoclub.wraptas.site/')"
            >
              <p class="drawer-text ma-0">
                COMPANY
              </p>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              class="text-h5 py-5"
              @click="externalLink('https://gokkoclub.wraptas.site/dee1406c16aa4dfbb49476cb15855b2e')"
            >
              <p class="drawer-text ma-0">
                RECRUIT
              </p>
            </v-list-item-title>
          </v-list-item>
          <v-row
            justify="start"
            align="start"
            class="py-10"
          >
            <v-btn
              v-for="(item, i) in icons"
              :key="i"
              class="ml-4 white--text"
              icon
              @click="pushPage(item.url)"
            >
              <v-icon size="24px">
                {{ item.icon }}
              </v-icon>
            </v-btn>

          </v-row>
          

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-row>
      <v-col cols="12"
        class="ma-0 pa-0 video-secttion"
      >
        <video-player
          class="video-player-box"
          :options="playerOptions"
          :playsinline="true"
        >
        </video-player>
      </v-col>
      <v-col cols="12"
        class="mt-16 mb-0 pb-0 label-top-view"
      >
        <div 
          v-if="sp"
          class="mb-10 text-h5 font-weight-black"
        >
          <p class="text-left mb-2"><span class="text-back-color">ごっこ倶楽部は、</span></p>
          <p class="text-left mb-2"><span class="text-back-color">偶々ではなく、</span></p>
          <p class="text-left"><span class="text-back-color">狙ってバズってます。</span></p>
        </div>
        <div
          v-if="!sp"
          class="mb-10 text-h5 font-weight-black"
        >
          <p class="text-left mb-2"><span class="text-back-color">ごっこ倶楽部は、</span></p>
          <p class="text-left"><span class="text-back-color">偶々ではなく、狙ってバズってます。</span></p>
        </div>
        <div class="text-subtitle-2 font-weight-black text-top-view">
          <p class="mb-2">アナログな繋がりが少しづつ希薄になってきている今、</p>
          <p class="mb-2">ショートドラマ特有の"短尺の密度"を大切にしながら</p>
          <p class="mb-2">人間関係から生まれる様々な「愛」を主題とした。</p>
          <p class="mb-2">コンテンツを作成しています。</p>
          <p class="mb-2">テレビを"みんな"で見る時代から、</p>
          <p class="mb-2">スマホを通して"ひとり"でコンテンツを消費する時代に</p>
          <p class="mb-2">「色んな繋がりの中で生きている」と感じてもらえる</p>
          <p class="mb-0">ドラマを作り続けていたいと思っています。</p>
        </div>
      </v-col>
      <v-col
        class="mt-5 py-0 px-0"
      >
        <div
          class="logo-background-color"
        >
          <p class="mb-0">GokkoClub</p>
        </div>
      </v-col>
      
      <v-col
        cols="12"
        class="pb-15 ma-0 pa-0 pt-5 text-center  background-color-grey"
      >
        <div class="mb-0 label-heading font-weight-black">Achievement</div>
        <div class="mb-10 font-weight-black">実績</div>
        <v-row
          class="mx-2"
          justify="center"
        >
          <v-col
            class="text-left box-white mx-2 my-2"
            cols="12"
            sm="12" md="3" lg="3" xl="3"
          >
            <p class="mb-0 text-h6 font-weight-black">
              <span class="box-black text-subtitle-2 font-weight-black">
                動画再生数
              </span>
            </p>
            <p class="my-3 text-h4 font-weight-black" ref="scrollTarget">{{tweenTotalVideoPlayCount.toLocaleString('ja-JP')}}<span class="text-subtitle-2 font-weight-black">回超</span></p>
          </v-col>
          <v-col
            class="text-left box-white mx-2 my-2"
            cols="12"
            sm="12" md="3" lg="3" xl="3"
          >
            <p class="mb-0 text-h6 font-weight-black">
              <span class="box-black text-subtitle-2 font-weight-black">
                TikTokフォロワー数
              </span>
            </p>
            <p class="my-3 text-h4 font-weight-black">{{tweenFollowerCount.toLocaleString('ja-JP')}}<span class="text-subtitle-2 font-weight-black">人超</span></p>
          </v-col>
          <v-col
            class="text-left box-white mx-2 my-2"
            cols="12"
            sm="12" md="3" lg="3" xl="3"
          >
            <p class="mb-0 text-h6">
              <span class="box-black text-subtitle-2 font-weight-black">
                TikTokイイね数
              </span>
            </p>
            <p class="my-3 text-h4 font-weight-black">{{tweenHeart.toLocaleString('ja-JP')}}<span class="text-subtitle-2 font-weight-black">超</span></p>
          </v-col>
        </v-row>
      </v-col>

      <v-col
        class="mt-10 mx-2"
        flex
      >
        <div
          class="box-outline-grey"
          @click="scrollToContact()"
        >
          <p class="mb-0 pt-10 text-center text-subtitle-2 font-weight-black">お問い合わせこちらから</p>
          <v-row
            class="pt-7 pb-10"
            justify="center"
          >
            <v-btn
              depressed
              color="black"
              class="white--text"
              width="300"
            >
              Contact us
            </v-btn>
          </v-row>
        </div>
      </v-col>

      <v-col
        cols="12"
        class="ma-0 pa-0 mt-16 text-center"
      >
        <div class="mb-0 label-heading font-weight-black">Content</div>
        <div class="mb-10 font-weight-black">ショートドラマ紹介</div>
        <v-row
          class="pa-0 ma-0 mt-10 text-left"
        >
          <v-col
            cols="6"
            sm="3" md="3" lg="3" xl="3"
            class="pa-1 ma-0 mb-2 d-flex justify-space-around align-center"
            v-for="(item, index) in content"
            :key="index"
          >
            <v-card
              flat
              @click="pushPage(item.tiktokUrl)"
            >
              <v-img
                :src="item.image"
                width="250"
                contain
              >
              </v-img>
              <p class="mt-1 mb-2 text-h6 font-weight-black text-left">{{item.title}}</p>
              <p class="my-1 text-left">
                <span class="box-black text-subtitle-2 font-weight-black">
                  {{item.playCount}}
                </span>
              </p>
              
              <p class="mb-2 font-weight-light text-left"># {{item.etc}}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>   

      <v-col
        class="mt-10 mx-2"
        flex
      >
        <div
          class="box-outline-grey"
          @click="scrollToContact()"
        >
          <p class="mb-0 pt-10 text-center text-subtitle-2 font-weight-black">お問い合わせこちらから</p>
          <v-row
            class="pt-7 pb-10"
            justify="center"
          >
            <v-btn
              depressed
              color="black"
              class="white--text"
              width="300"
            >
              Contact us
            </v-btn>
          </v-row>
        </div>
      </v-col>

      <v-col
        v-if="!sp"
        cols="12"
        class="ma-0 pa-0 mt-16 text-center"
      >
        <div class="mb-0 label-heading font-weight-black">Feature</div>
        <div class="mb-10 font-weight-black">ごっこ倶楽部はPR作品でもバズる理由</div>
        <v-row
          class="pa-0 ma-0 mt-10 text-left align-center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="6" md="4" lg="4" xl="4"
            class="pa-1 ma-0 mb-2 px-2 feature-bg-image-1"
          >
            <div class="feature-heading mb-5 text-h6 font-weight-black">
              <p class="ml-5">
                『アップデートし続けるノウハウ』
                <br>
                脚本・撮影・編集まで全てインハウス
              </p>
            </div>
            <p class="my-5 text-sm">
              トレンドの移り変わりが早いTikTokにおいて、視聴者分析やアルゴリズム把握はもちろん、その実行がバズるためには何よりも重要です。
            </p>
            <p class="my-5 text-sm">
              それを実現しているのが、企画立案・キャスティング・撮影・動画編集・投稿までを全て内製化しているチーム体制にあります。
            </p>
          </v-col>
          <v-col
            cols="12"
            sm="6" md="4" lg="4" xl="4"
            align-self="center"
            class="pa-0 ma-0 mb-2 px-2"
          >
            <v-img
              src="https://firebasestorage.googleapis.com/v0/b/gokko5club-lp.appspot.com/o/lp%2Ffeature_1.png?alt=media&token=72e45d0f-dd90-4ee5-971a-b4385840ed1d"
              contain
              class="pa-1 ma-0 mb-2"
              height="380"
            >
            </v-img>
          </v-col>
        </v-row>
        <v-row
          class="pa-0 ma-0 mt-10 text-left align-center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="6" md="4" lg="4" xl="4"
            align-self="center"
            class="pa-0 ma-0 mb-2 px-2"
          >
            <v-img
              src="https://firebasestorage.googleapis.com/v0/b/gokko5club-lp.appspot.com/o/lp%2Ffeature_2.png?alt=media&token=94b0a6da-3436-4e71-9acd-17a6b9dea141"
              contain
              class="pa-1 ma-0 mb-2"
              height="380"
            >
            </v-img>
          </v-col>
          <v-col
            cols="12"
            sm="6" md="4" lg="4" xl="4"
            class="pa-1 ma-0 mb-2 px-2 feature-bg-image feature-bg-image-2"
          >
            <div class="feature-heading mb-5 text-h6 font-weight-black">
              <p class="ml-5">
                密なリズム、強い葛藤、爽快ポイント
                <br>
                をナラティブに訴求
              </p>
            </div>
            <p class="my-5 text-sm">
              冒頭3秒を意識した掴み、180秒に詰め込まれた濃厚なストーリー、180秒とは思えない見応え。そのストーリの中に、顧客目線で入り込むナラティブな訴求方法を追求しているのが、PRドラマでも100万再生を超えている理由です。
            </p>
          </v-col>
        </v-row>
        <v-row
          class="pa-0 ma-0 mt-10 text-left align-center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="6" md="4" lg="4" xl="4"
            class="pa-1 ma-0 mb-2 px-2 feature-bg-image feature-bg-image-3"
          >
            <div class="feature-heading mb-5 text-h6 font-weight-black">
              <p class="ml-5">
                ロウコスト
                <br>
                ハイクオリティ
              </p>
            </div>
            <p class="my-5 text-sm">
              映画やドラマに遜色がないクオリティーで、圧倒的な安さでドラマを作れているのは、撮影コストを極力下げられる「縦型」の特徴です。 
            </p>
            <p class="my-5 text-sm">
              最初の企画から完成品の編集までの全てをチーム内で完結できるので、
              <br>
              コストを抑えられるだけでなく、スピーディに進めていくことが可能です。
            </p>
          </v-col>
          <v-col
            cols="12"
            sm="6" md="4" lg="4" xl="4"
            align-self="center"
            class="pa-0 ma-0 mb-2 px-2"
          >
            <v-img
              src="https://firebasestorage.googleapis.com/v0/b/gokko5club-lp.appspot.com/o/lp%2Ffeature_3.png?alt=media&token=d83e3712-efee-4cb7-b7d9-a3d48ec229a1"
              contain
              class="pa-1 ma-0 mb-2"
              height="380"
            >
            </v-img>
          </v-col>
        </v-row>
      </v-col>

      <v-col
        v-if="sp"
        cols="12"
        class="ma-0 pa-0 mt-16 text-center"
      >
        <div class="mb-0 label-heading font-weight-black">Feature</div>
        <div class="mb-10 font-weight-black">ごっこ倶楽部はPR作品でもバズる理由</div>
        <v-row
          class="pa-0 ma-0 mt-10 text-left align-center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="6" md="4" lg="4" xl="4"
            class="pa-1 ma-0 mb-2 px-2 feature-bg-image-1"
          >
            <div class="feature-heading mb-5 text-h6 font-weight-black">
              <p class="ml-5">
                『アップデートし続けるノウハウ』
                <br>
                脚本・撮影・編集まで全てインハウス
              </p>
            </div>
            <p class="my-5 text-sm">
              オーディエンスや流入状況の分析はもちろん、
              <br>
              トレンドの移り変わりが早いTikTokにおいて、視聴者分析やアルゴリズム把握はもちろん、その実行がバズるためには何よりも重要です。
            </p>
            <p class="my-5 text-sm">
              それを実現しているのが、企画立案・キャスティング・撮影・動画編集・投稿までを全て内製化しているチーム体制にあります。
            </p>
          </v-col>
          <v-col
            cols="12"
            sm="6" md="4" lg="4" xl="4"
            align-self="center"
            class="pa-0 ma-0 mb-2 px-2"
          >
            <v-img
              src="https://firebasestorage.googleapis.com/v0/b/gokko5club-lp.appspot.com/o/lp%2Ffeature_1.png?alt=media&token=72e45d0f-dd90-4ee5-971a-b4385840ed1d"
              contain
              class="pa-1 ma-0 mb-2"
              height="380"
            >
            </v-img>
          </v-col>
        </v-row>
        <v-row
          class="pa-0 ma-0 mt-10 text-left align-center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="6" md="4" lg="4" xl="4"
            class="pa-1 ma-0 mb-2 px-2 feature-bg-image feature-bg-image-2"
          >
            <div class="feature-heading mb-5 text-h6 font-weight-black">
              <p class="ml-5">
                密なリズム、強い葛藤、爽快ポイント
                <br>
                をナラティブに訴求
              </p>
            </div>
            <p class="my-5 text-sm">
              冒頭3秒を意識した掴み、180秒に詰め込まれた濃厚なストーリー、180秒とは思えない見応え。そのストーリの中に、顧客目線で入り込むナラティブな訴求方法を追求しているのが、PRドラマでも100万再生を超えている理由です。
            </p>
          </v-col>
          <v-col
            cols="12"
            sm="6" md="4" lg="4" xl="4"
            align-self="center"
            class="pa-0 ma-0 mb-2 px-2"
          >
            <v-img
              src="https://firebasestorage.googleapis.com/v0/b/gokko5club-lp.appspot.com/o/lp%2Ffeature_2.png?alt=media&token=94b0a6da-3436-4e71-9acd-17a6b9dea141"
              contain
              class="pa-1 ma-0 mb-2"
              height="380"
            >
            </v-img>
          </v-col>
        </v-row>
        <v-row
          class="pa-0 ma-0 mt-10 text-left align-center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="6" md="4" lg="4" xl="4"
            class="pa-1 ma-0 mb-2 px-2 feature-bg-image feature-bg-image-3"
          >
            <div class="feature-heading mb-5 text-h6 font-weight-black">
              <p class="ml-5">
                ロウコスト
                <br>
                ハイクオリティ
              </p>
            </div>
            <p class="my-5 text-sm">
              映画やドラマに遜色がないクオリティーで、圧倒的な安さでドラマを作れているのは、撮影コストを極力下げられる「縦型」の特徴です。 
            </p>
            <p class="my-5 text-sm">
              最初の企画から完成品の編集までの全てをチーム内で完結できるので、
              <br>
              コストを抑えられるだけでなく、スピーディに進めていくことが可能です。
            </p>
          </v-col>
          <v-col
            cols="12"
            sm="6" md="4" lg="4" xl="4"
            align-self="center"
            class="pa-0 ma-0 mb-2 px-2"
          >
            <v-img
              src="https://firebasestorage.googleapis.com/v0/b/gokko5club-lp.appspot.com/o/lp%2Ffeature_3.png?alt=media&token=d83e3712-efee-4cb7-b7d9-a3d48ec229a1"
              contain
              class="pa-1 ma-0 mb-2"
              height="380"
            >
            </v-img>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12"
        class="ma-0 pa-0 mt-16 text-center"
      >
        <div class="mb-0 label-heading font-weight-black">Member</div>
        <div class="mb-10 font-weight-black">メンバー</div>
        <v-row
          class="pa-0 ma-0 mt-10 text-left"
          justify="center"
        >
          <v-col
            cols="6"
            xs="6" sm="2" md="2" lg="2" xl="2"
            class="pa-1 ma-0 mb-2"
            v-for="(item, index) in member"
            :key="index"
          >
            <v-card
              flat
              class="mx-0"
              @click="pushPage(item.twitter)"
            >
              <v-img
                :src="item.image"
                contain
              >
              </v-img>
              <p class="mt-2 mb-0 font-weight-black">{{item.name}}</p>
              <p class="mb-2 font-weight-light text-sm"># {{item.role}}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12"
        class="ma-0 pa-0 mt-16 mb-10 text-center"
        id="contact"
      >
        <div class="mb-0 label-heading font-weight-black">Contact</div>
        <div class="mb-10 font-weight-black">資料請求・お問い合わせ</div>
        <contact-form/>
      </v-col>
    </v-row>
    <div class="scroll-top" @click="scrollTop()">
      <v-btn
        color="white"
        fab
        
      >
        <v-icon
          x-large
          color="black"
        >
          mdi-chevron-up
        </v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import 'video.js/dist/video-js.css'
  import { videoPlayer } from 'vue-video-player'
  import ContactForm from '@/components/ContactForm.vue'
  import { DB } from '@/firebase/db'
  import { setDoc, addDoc, collection, serverTimestamp, query, where, getDoc, getDocs, doc, orderBy, limit, startAfter } from "firebase/firestore"
  import { gsap } from 'gsap'
  

  export default Vue.extend({
    name: 'FirstView',

    components: {
      videoPlayer,
      ContactForm
    },

    data: () => ({
      width: 0,
      height: 0,
      sp: true,
      drawer: false,
      logo: 'https://firebasestorage.googleapis.com/v0/b/gokko5club-lp.appspot.com/o/lp%2FGoDaddyStudioPage-0.png?alt=media&token=678f2d5d-a31a-4d5d-a925-4aecc0f534ce',
      account: {} as any,
      totalVideoPlayCount: 0,
      tweenTotalVideoPlayCount: 0,
      followerCount: 0,
      tweenFollowerCount: 0,
      heart: 0,
      tweenHeart: 0,
      observer: {} as any,
      isAnimation: false,
      label: {
        aboutHeading: `ごっこ倶楽部は、
        ショートドラマクリエイター集団です。`
      },
      playerOptions: {
        muted: true,
        language: 'jp',
        autoplay: true,
        loop: true,
        controls: false,
        sources: [{
          type: "video/mp4",
          src: "https://firebasestorage.googleapis.com/v0/b/gokko5club-lp.appspot.com/o/lp%2Fpr_movie_light.mp4?alt=media&token=3e6527e4-1b6c-4f1b-b509-ecb0d0737f8f"
        }],
        poster: "/static/images/author.jpg",
        autoSetup: true,
        width: window.innerWidth,
        height: 750
      },
      member: [
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/gokko5club-lp.appspot.com/o/lp%2Fmember%2F_FJ_8379.jpg?alt=media&token=66dd9c2a-cbc4-419d-b0c4-d1b19a7232c1',
          name: '多田智',
          role: '監督/俳優',
          twitter: 'https://twitter.com/satosix3'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/gokko5club-lp.appspot.com/o/lp%2Fmember%2F_FJ_8172_light.jpg?alt=media&token=ca147818-2b8c-4d7d-9938-9f604e99eb6b',
          name: '早坂架威',
          role: '俳優/助監督',
          twitter: 'https://twitter.com/kai_hayasaka'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/gokko5club-lp.appspot.com/o/lp%2Fmember%2F_FJ_1.jpg?alt=media&token=5bad44dc-bab3-4ec1-90cb-ce3759037f46',
          name: '鈴木浩文',
          role: '俳優/脚本',
          twitter: 'https://twitter.com/sukkun'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/gokko5club-lp.appspot.com/o/lp%2Fmember%2F_FJ_2.jpg?alt=media&token=d1ccd2fe-afaf-4593-a13f-6e32c3cc2094',
          name: '渡辺大貴',
          role: '俳優/スタイリスト',
          twitter: 'https://twitter.com/daiki_w1990'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/gokko5club-lp.appspot.com/o/lp%2Fmember%2F_FJ_8456.jpg?alt=media&token=2095852d-ce77-4902-abd7-50804cf8c79e',
          name: '谷沢龍馬',
          role: '俳優/キャスティング',
          twitter: 'https://twitter.com/ryuma_tanizawa'
        }
      ],
      content: [
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/gokko5club-lp.appspot.com/o/lp%2Fdfe4745c5b094030ad4e087836bbab25.jpg?alt=media&token=be9d1403-f316-40f4-a580-1a4eeeefa59c',
          title: '此処には、いない',
          playCount: '全1,570万再生',
          etc: 'アパレル/飲食',
          tiktokUrl: 'https://www.tiktok.com/@gokko5club/video/6966897485285477633?lang=ja-JP&is_copy_url=0&is_from_webapp=v1'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/gokko5club-lp.appspot.com/o/lp%2F59c5160456a7488a885143af15fa7055.jpg?alt=media&token=584892f2-a662-49c1-a9d8-752ec7fd0356',
          title: '僕のアナザーウェイ',
          playCount: '全760万再生',
          etc: '「Te Amo」PR',
          tiktokUrl: 'https://www.tiktok.com/@gokko5club/video/7050783683493530881?is_from_webapp=1&sender_device=pc&web_id=7082771256379377154'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/gokko5club-lp.appspot.com/o/lp%2F03aaaf4cede0411db46d50dcf871350b.jpg?alt=media&token=9a115a08-940e-4dda-95cd-cc25a0a7deb4',
          title: '死海兄弟',
          playCount: '全1,100万再生',
          etc: 'アパレル/飲食',
          tiktokUrl: 'https://www.tiktok.com/@gokko5club/video/6965032839582649602?lang=ja-JP&is_copy_url=0&is_from_webapp=v1'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/gokko5club-lp.appspot.com/o/lp%2F44bec8c5021045a1ab16c33de7cb45a2.jpg?alt=media&token=8374440c-949e-430e-8f2c-5ec078f9a63b',
          title: '陰徳恩賜',
          playCount: '全930万再生',
          etc: '採用/スーツ/サービス',
          tiktokUrl: 'https://www.tiktok.com/@gokko5club/video/6993981388957519105?lang=ja-JP&is_copy_url=0&is_from_webapp=v1'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/gokko5club-lp.appspot.com/o/lp%2F4eb6bbb8e24c4249bbc4753521885e30.jpg?alt=media&token=0c7eebbc-6c55-46e6-8fd1-454bec0aa82f',
          title: 'クロスロード',
          playCount: '全720万再生',
          etc: 'handdripタイアップ',
          tiktokUrl: 'https://www.tiktok.com/@gokko5club/video/6987672982403419393?lang=ja-JP&is_copy_url=0&is_from_webapp=v1'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/gokko5club-lp.appspot.com/o/lp%2F8536ed4d2a24452baaf72c69b3001505.jpg?alt=media&token=2f4064ab-24fa-469c-98ed-10018d537b61',
          title: '合縁奇縁',
          playCount: '全240万再生',
          etc: 'マッチングアプリPR',
          tiktokUrl: 'https://www.tiktok.com/@gokko5club/video/7022184403476417794?is_from_webapp=1&sender_device=pc&web_id=7082771256379377154'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/gokko5club-lp.appspot.com/o/lp%2Fc5e8eed429944174a98a1f36d8f4b245.jpg?alt=media&token=96144299-a2d1-45a0-881c-3154700b741c',
          title: 'リンクメモリー',
          playCount: '全440万再生',
          etc: 'アパレルブランドPR',
          tiktokUrl: 'https://www.tiktok.com/@gokko5club/video/7019586007540452610?is_from_webapp=1&sender_device=pc&web_id=7082771256379377154'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/gokko5club-lp.appspot.com/o/lp%2Fdownload.jpg?alt=media&token=4ef768cb-b990-49a5-b7b6-aa720b62524f',
          title: 'MEDULLA',
          playCount: '全220万再生',
          etc: 'ヘアケアブランドPR',
          tiktokUrl: 'https://www.tiktok.com/@gokko5club/video/7055952397973179650?is_from_webapp=1&sender_device=pc&web_id=7082771256379377154'
        },
      ],
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

    watch: {
      totalVideoPlayCount: function (newValue) {
        if (newValue) {
          gsap.to(this.$data, { duration: 3, tweenTotalVideoPlayCount: this.totalVideoPlayCount })
          gsap.to(this.$data, { duration: 3, tweenFollowerCount: this.followerCount })
          gsap.to(this.$data, { duration: 3, tweenHeart: this.heart })
        }
      }
    },

    created: function () {
\    },

    mounted: function () {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
      this.setScrollTarget()
      window.scrollTo({
        top: 0
      })
    },

    beforeDestroy: function () {
      window.removeEventListener('resize', this.handleResize)
    },

    methods: {
      handleResize() {
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.playerOptions.width = window.innerWidth
        if(window.innerWidth >= 1440) {
          this.playerOptions.height = 750
        }
        if(window.innerWidth < 1440) {
          this.playerOptions.height = window.innerWidth * 9/16
        }
        if(window.innerWidth >= 600) {
          this.sp = false
        }
        if(window.innerWidth < 600) {
          this.sp = true
        }
      },

      setScrollTarget () {
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry && entry.isIntersecting) {
              this.fetchAccountData()
              this.observer.disconnect()
            }
          })
        })
        const scrollTarget = this.$refs.scrollTarget;
        this.observer.observe(scrollTarget);
      },
      
      async fetchAccountData () {
        const docRef = doc(DB, 'accounts', '6962992285463200769')
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          this.account = docSnap.data()
          this.totalVideoPlayCount = docSnap.data()['totalVideoPlayCount']
          this.followerCount = docSnap.data()['followerCount']
          this.heart = docSnap.data()['heart']
        }
      },

      scrollTop () {
        window.scrollTo({
          top:0,
          behavior:"smooth"
        })
      },

      scrollToContact () {
        const element = document.getElementById('contact');
        if(element) {
          element.scrollIntoView(
          );
        }
      },

      pushPage (url: string) {
        window.open(url, '_blank', 'width=1024,height=768,scrollbars=yes,resizable=yes')
      },

      pushToHome () {
        location.reload()
      },

      externalLink (url: string) {
        window.location.href = url
      }
    },
  })
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

.label-top-view {
  padding-left: 20%;
  font-weight: bold;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.text-back-color {
  background-color: #EEEEEE;
}
.background-color-grey {
  background-color: #F6F6F6;
}
.logo-background-color {
  padding-left: 30%;
  font-weight: 900;
  background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 50%, #F6F6F6 50%, #F6F6F6 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 130px;
  font-style: italic;
  font-family: 'Montserrat', sans-serif;
  -webkit-text-stroke: 1px #CCCCCC;
  text-stroke: 1px #CCCCCC;
  color: transparent;
}
.label-heading {
  text-transform: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  letter-spacing:2px;
}
.box-black {
  background-color: #1D1D1D;
  color: #FFFFFF;
  padding: 2px 10px 2px 10px;
  font-size: 15px;
}
.box-white {
  background-color: #FFFFFF;
}
.box-outline-grey {
  outline: solid 1px;
  outline-color: #CCCCCC;
}
.text-sm {
  font-size: 12px;
}
.feature-heading{
  position:relative;
}
.feature-heading::before{
  content:"";
  display:inline-block;
  width:2px;
  height:65px;
  background-color:#1D1D1D;
  position:absolute;
  top:-2px;
}
.feature-bg-image-1 {
  background-image: url("~@/assets/images/feature_text_1.png");
  background-position: left 0% bottom 0%;
  background-size: contain;
  background-repeat: no-repeat;
  background-size: 70%;
}
.feature-bg-image-2 {
  background-image: url("~@/assets/images/feature_text_2.png");
  background-position: right 0% bottom 0%;
  background-size: contain;
  background-repeat: no-repeat;
  background-size: 70%;
}
.feature-bg-image-3 {
  background-image: url("~@/assets/images/feature_text_3.png");
  background-position: left 0% bottom 0%;
  background-size: contain;
  background-repeat: no-repeat;
  background-size: 70%;
}
.drawer-text {
  font-family: 'Montserrat', sans-serif;
}
.scroll-top {
  position: fixed;
  right: 20px;
  bottom: 80px;
  z-index: 100;
  width: 50px;
}
.scroll-top:hover {
  cursor: pointer;
  opacity: .7;
}
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

@media screen and (max-width: 599px) {
  .label-top-view {
    padding: 10px;
    font-weight: bold;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .logo-background-color {
    padding-left: 30%;
    font-weight: 900;
    background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 50%, #F6F6F6 50%, #F6F6F6 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 80px;
    font-style: italic;
    font-family: 'Montserrat', sans-serif;
    -webkit-text-stroke: 1px #CCCCCC;
    text-stroke: 1px #CCCCCC;
    color: transparent;
  }

  .label-heading {
  text-transform: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  letter-spacing:2px;
}
}
</style>
