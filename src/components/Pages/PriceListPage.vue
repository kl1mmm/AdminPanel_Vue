<template>
  <div class="leftBlock">
    <div class="CRM" style="color: #168FFF; font-size: 18px; text-align: left; margin-left: 15px; margin-top: -30px;"><strong>CRM</strong> <ins>Рекламное агентство "Вектор"</ins></div>
    <MyDropTables v-bind:value="TableValue" @input="TableValue = $event.target.value"></MyDropTables>
    <MyButton class="btn" @click="referToTheTable">Применить поиск</MyButton>
    <MyButton class="btn">Добавить запись</MyButton>
    <img class="logo" src='@/components/UI/LogoMain.png'>
  </div>
  <div class="Table">
    <MyTable>
      <thead>
      <tr>
        <th scope="col">ID услуги</th>
        <th scope="col">Название</th>
        <th scope="col">Цена</th>
      </tr>
      </thead>
      <tbody class="service" v-for="service in priceList" :key="service.ID">
      <tr>
        <th scope="row">{{ service.ID }}</th>
        <td>{{ service.naming }}</td>
        <td>{{ service.price }}</td>
      </tr>
      </tbody>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "@/components/UI/MyTable";
import MyDropTables from "@/components/UI/MyDropTables";
import MyButton from "@/components/UI/MyButton";
import router from "@/components/router/router";
export default {
  components: {MyButton, MyDropTables, MyTable},
  data() {
    return {
      TableValue: '',
      priceList: [
        {ID: 1, naming: 'Баннер 2.5x2', price: '5860'}
      ]
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
.Table {
  width: 75%;
  margin-left: 25%;
  margin-top: -12%;
}

.leftBlock {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: 350px;
}

.logo {
  position: absolute;
  align-self: center;
  width: 23.5%;
  margin-top: 42.25%;
}

.btn {
  width: 15em;
  margin: 0.25em 6em;
}
</style>