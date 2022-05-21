<template>
  <title>Авторизация</title>
  <div class="block">
    <img class="logo" src='@/components/UI/Logo.svg'>
    <div class="LogInForm">
      <div class="inFormText">Логин</div>
      <MyInput type="text" placeholder="Введите свой логин"></MyInput>
      <div class="inFormText">Пароль</div>
      <MyInput type="text" placeholder="Введите свой пароль"></MyInput>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Запомнить меня
        </label>
      </div>
      <MyButton class="btnLogIn">Войти</MyButton>
  </div>
  </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput";
import MyButton from "@/components/UI/MyButton";
export default {
  components: {MyButton, MyInput}
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
  height: 500px;
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
}
</style>