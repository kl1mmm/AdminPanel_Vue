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
        <th scope="col">ID</th>
        <th scope="col">№ договора</th>
        <th scope="col">ID услуги</th>
        <th scope="col">Плановая дата</th>
        <th scope="col">Комментарий</th>
        <th scope="col">ID ответсвенного сотрудника</th>
      </tr>
      </thead>
      <tbody class="order" v-for="order in ordersList" :key="order.ID">
      <tr>
        <th scope="row">{{ order.ID }}</th>
        <td>{{ order.contractNumb }}</td>
        <td>{{ order.serviceID }}</td>
        <td>{{ order.planeDate }}</td>
        <td>{{ order.orderComment }}</td>
        <td>{{ order.staffID }}</td>
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
      ordersList: [
        {ID: 1, contractNumb: '1', serviceID: '1', planeDate:'10.02.2022', orderComment: 'Баннер "Продам" с номером телефона клиента.', staffID:'1'}
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