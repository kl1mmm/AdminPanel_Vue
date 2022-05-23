<template>
    <div class="leftBlock">
      <div class="CRM" style="color: #168FFF; font-size: 18px; text-align: left; margin-left: 15px; margin-top: -30px;"><strong>CRM</strong> <ins>Рекламное агентство "Вектор"</ins></div>
      <MyDropTables v-bind:value="TableValue" @input="TableValue = $event.target.value"></MyDropTables>
      <MyButton class="btn" @click="referToTheTable">Применить поиск</MyButton>
    </div>
    <div class="tableBlock">
      <div class="contentblock">
      <div style="font-size: 2em;">Добро пожаловать!</div>
      <div style="font-size: 1.25em;">Выберите таблицу для работы</div>
      <div style="font-size: 1.15em; margin-top: 0.25%">И продуктивного дня.</div>
      <img class="logo" src='@/components/UI/LogoMain.png'>
    </div>
    </div>
</template>

<script>
import MyDropTables from "@/components/UI/MyDropTables";
import MyButton from "@/components/UI/MyButton";
import router from "@/components/router/router";
export default {
  components: {MyButton, MyDropTables},
  data() {
    return {
      TableValue: ''
    }
  },
  methods: {
    referToTheTable() {
      if (this.TableValue === '1') {
        router.push('/Contracts')
      }
      else if (this.TableValue === '2') {
        router.push('/Clients-Entities')
      }
      else if (this.TableValue === '3') {
        router.push('/Clients-Individual')
      }
      else if (this.TableValue === '4') {
        router.push('/Staff')
      }
      else if (this.TableValue === '5') {
        router.push('/Orders')
      }
      else if (this.TableValue === '6') {
        router.push('/Price-List')
      }
    }
  }
}
</script>

<style scoped>
.leftBlock {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: 350px;
}

.btn {
  width: 15em;
  margin: 0.25em 6em;
}

.logo {
  margin-left: -7.5em;
  margin-top: -3em;
}
</style>