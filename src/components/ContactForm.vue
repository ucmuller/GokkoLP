<template>
    <v-container
      class="mt-16 px-8"
    >
      <v-row
        justify="center"
      >
        <v-col
          v-if="!this.$route.params.id"
          class="mt-0 pt-0 pb-0 text-center"
          cols="12"
          sm="8" md="8" lg="8" xl="8"
        >
          <p
            v-if="errorMessage != ''"
            class="text-subtitle-2 red--text text-left"
          >
            {{errorMessage}}
          </p>
          <v-form
            ref="form"
          >
            <v-row>
              <v-col
                cols="12"
                sm="12" md="12" lg="12" xl="12"
                class="py-0 px-2"
              >
                <v-text-field
                  color="#1D1D1D"
                  v-model="company"
                  label="*企業名"
                  type="text"
                  outlined
                  :rules="[rules.required]"
                >
                </v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12" md="12" lg="12" xl="12"
                class="py-0 px-2"
              >
                <v-radio-group
                  row
                  class="mt-0"
                  v-model="type"
                >
                  <v-radio color="#1D1D1D" label="代理店" value="代理店"></v-radio>
                  <v-radio color="#1D1D1D" label="直接企業依頼" value="直接企業依頼"></v-radio>
                  <v-radio color="#1D1D1D" label="個人依頼" value="個人依頼"></v-radio>
                  <v-radio color="#1D1D1D" label="取材" value="取材"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col
                cols="12"
                sm="12" md="12" lg="12" xl="12"
                class="py-0 px-2"
              >
                <v-text-field
                  color="#1D1D1D"
                  v-model="url"
                  label="URL（HP, SNSリンク等）"
                  type="text"
                  outlined
                >
                </v-text-field>
              </v-col>
              <v-col
                cols="6"
                sm="6" md="6" lg="6" xl="6"
                class="py-0 px-2"
              >
                <v-text-field
                  color="#1D1D1D"
                  v-model="role"
                  label="役職"
                  type="text"
                  outlined
                >
                </v-text-field>
              </v-col>
              <v-col
                cols="6"
                sm="6" md="6" lg="6" xl="6"
                class="py-0 px-2"
              >
                <v-text-field
                  color="#1D1D1D"
                  v-model="department"
                  label="部署"
                  type="text"
                  outlined
                >
                </v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12" md="12" lg="12" xl="12"
                class="py-0 px-2"
              >
                <v-text-field
                  color="#1D1D1D"
                  v-model="name"
                  label="*名前（フルネーム）"
                  type="text"
                  outlined
                  :rules="[rules.required]"
                >
                </v-text-field>
              </v-col>
              <v-col
                cols="6"
                sm="6" md="6" lg="6" xl="6"
                class="py-0 px-2"
              >
                <v-text-field
                  color="#1D1D1D"
                  v-model="tel"
                  label="*電話番号（ハイフン無し）"
                  type="email"
                  outlined
                  :rules="[rules.required, rules.min, rules.tel]"
                >
                </v-text-field>
              </v-col>
              <v-col
                cols="6"
                sm="6" md="6" lg="6" xl="6"
                class="py-0 px-2"
              >
                <v-text-field
                  color="#1D1D1D"
                  v-model="email"
                  label="*メールアドレス"
                  type="email"
                  outlined
                  :rules="[rules.required, rules.email]"
                >
                </v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12" md="12" lg="12" xl="12"
                class="py-0 px-2"
              >
                <v-textarea
                  outlined
                  color="#1D1D1D"
                  name="input-7-4"
                  label="お問い合わせの内容"
                  placeholder="現在、問い合わせが増えており具体的な希望から優先して対応しています。時期や予算感なども合わせて頂けますと幸いです。また、問い合わせ者が特定出来ない問い合わせには返答致しませんので、正確な記載をお願いたします。"
                  v-model="message"
                  :rules="[rules.required, rules.textMin]"
                ></v-textarea>
              </v-col>
                <v-btn
                  class="white--text button font-weight-bold mb-4 mt-4"
                  color="#1D1D1D"
                  large
                  block
                  :disabled="!readySignupWithEmail"
                  @click="setContactFormData()"
                >
                  送信
                </v-btn>
              
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { DB } from '@/firebase/db'
import { setDoc, addDoc, collection, serverTimestamp, query, where, getDoc, getDocs, doc, orderBy, limit, startAfter } from "firebase/firestore"

export default Vue.extend({
  name: 'ContactForm',
  data: () => ({
    name: '',
    type: '代理店',
    url: '',
    role: '',
    department: '',
    company: '',
    email: '',
    tel: '',
    message: '',
    readyEmail: false,
    readyTel: false,
    showPassword: false,
    rules: {
      required: (v: string) => !!v || '未入力です。',
      min: (v: string) => v.length >= 8 || '8文字以上必要です。',
      textMin: (v: string) => v.length >= 1 || '1文字以上必要です。',
      email: (v: string) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(v) || 'メールアドレスの形式が正しくありません。'
      },
      tel: (v: string) => {
        const pattern = /^0[0-9]{9,10}$/
        return pattern.test(v) || '電話番号の形式が正しくありません。'
      }
    },
    errorMessage: "",
    ready: true
  }),

  watch: {
    email: function() {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (this.email != '' && pattern.test(this.email)) {
        this.readyEmail = true
      } else {
        this.readyEmail = false
      }
    }
  },

  computed: {
    readySignupWithEmail: function() {
      return this.name && this.readyEmail && this.tel && this.message && this.company && this.type ? true : false
    }
  },

  methods: {
    async setContactFormData() {
      const id = doc(collection(DB, "contacts")).id
      const data = {
        id: id,
        name: this.name,
        company: this.company,
        tel: this.tel,
        email: this.email,
        message: this.message,
        type: this.type,
        url: this.url,
        role: this.role,
        department: this.department,
        createdAt: serverTimestamp()
      }
      try{
        const docRef = await setDoc(
          doc(DB, "contacts", id),
          data
        );
      } catch {
        alert('送信できませんでした。ページを読み込み直してください。')
      } finally {
        alert('お問い合わせありがとうございます。メッセージを送信しました。')
        location.reload()
      }
    },

    deleteFormText() {
      this.name = ''
      this.company = ''
      this.tel = ''
      this.email = ''
      this.message = ''
      this.type = '代理店'
      this.url = ''
      this.role = ''
      this.department = ''
    }
  }
})
</script>

<style scoped>
.button {
  text-transform: none;
}
.text-grey{
  color: #6E6E6E;
}
</style>