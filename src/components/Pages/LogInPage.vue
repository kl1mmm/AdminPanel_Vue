<template>
  <title>Авторизация</title>
  <div class="block">
    <img class="logo" src='@/components/UI/Logo.svg'>
    <div class="LogInForm">
      <div class="inFormText">Логин</div>
      <MyInput type="text" placeholder="Введите свой логин" v-bind:value="login" @input="login = $event.target.value"></MyInput>
      <div class="inFormText">Пароль</div>
      <MyInput type="text" placeholder="Введите свой пароль" v-bind:value="password" @input="password = $event.target.value"></MyInput>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Запомнить меня
        </label>
      </div>
      <MyButton class="btnLogIn" @click="isLogin">Войти</MyButton>
  </div>
  </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput";
import MyButton from "@/components/UI/MyButton";
import router from "@/components/router/router";
export default {
  components: {MyButton, MyInput},
  data () {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    isLogin() {
      if (this.login === 'admin' && this.password === 'admin') {
        router.push('/MainMenu')
      }
    }
    }
  }
</script>

<style scoped>
* {
  padding: 5px;
}

.block {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 30%;
  height: 50%;
  font-family: "Arial";
  font-color: black;
}

.LogInForm {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.btnLogIn {
  margin-top: 15px;
  width: 100%;
}

.form-check {
  height: 10px;
  line-height: 15px;
  margin-top: 5px;
  margin-left: 20px;
}
</style>