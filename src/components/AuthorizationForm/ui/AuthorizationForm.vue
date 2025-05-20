<script>
import '../style.scss'
import { signInAsync } from '../api/signInApi.js'

export default {
  data() {
    return {
      login: '',
      pass: '',
      remember: false,
      showRegister: false,
    }
  },
  methods: {
    Auth() {
      if (this.login == '' || this.pass == '') {
        this.error = 'Введите поле'
        return
      }

      this.error = ''
      this.users.push({
        name: this.name,
        pass: this.pass,
        mail: this.mail,
      })
    },
    toggleRegister() {
      this.showRegister = !this.showRegister
    },
    async signIn() {
      /*
        Проверяем, что this.login и this.pass - не null и не пустые.
      */
      if (!this.login || !this.pass) {
        console.error('Введите логин или пароль!')
        return
      }

      try {
        /*
         * формируем конфиг для отправки на сервер
         */
        const config = {
          endpoint: '/auth/signIn',
          data: {
            userLogin: this.login,
            userPassword: this.pass,
          },
        }

        await signInAsync(config).then((res) => {
          const token = res.data.access_token
          localStorage.setItem('access_token', token)
        })
        this.$router.push('/')
      } catch (e) {
        throw new Error('Exception', e)
      }
    },
  },
}
</script>

<template>
  <div class="login-wrapper">
    <form class="auth-form" @submit.prevent="showRegister ? null : Auth">
      <div class="form-header">
        <h2 class="login-title" v-if="!showRegister">Вход в аккаунт</h2>
        <h2 class="register-title" v-else>Регистрация</h2>
        <div class="burger" v-if="!showRegister" @click.stop="toggleRegister">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div v-if="showRegister" class="close-btn" @click.stop="toggleRegister">✕</div>
      </div>

      <template v-if="!showRegister">
        <label class="input-label">ЛОГИН</label>
        <input class="input-field" type="text" v-model="login" placeholder="" />
        <label class="input-label">ПАРОЛЬ</label>
        <input class="input-field" type="password" v-model="pass" placeholder="" />
        <div class="form-row">
          <label class="remember-label">
            <input type="checkbox" v-model="remember" /> Запомнить меня
          </label>
          <a href="#" class="forgot-link">Забыли пароль?</a>
        </div>
        <button @click="signIn" class="login-btn" type="submit">ВОЙТИ</button>
      </template>

      <template v-else>
        <label class="input-label">ЛОГИН</label>
        <input class="input-field" type="text" placeholder="" />
        <label class="input-label">E-MAIL</label>
        <input class="input-field" type="email" placeholder="" />
        <label class="input-label">ПАРОЛЬ</label>
        <input class="input-field" type="password" placeholder="" />
        <button class="register-btn" type="button">Зарегистрироваться</button>
      </template>
    </form>
  </div>
</template>
