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
        <th scope="col">ИНН</th>
        <th scope="col">Фамилия</th>
        <th scope="col">Имя</th>
        <th scope="col">Отчество</th>
        <th scope="col">Телефон</th>
        <th scope="col">Эл.Почта</th>
        <th scope="col">Адрес</th>
      </tr>
      </thead>
      <tbody class="client" v-for="client in clientsData" :key="client.INN">
      <tr>
        <th scope="row">{{ client.INN }}</th>
        <td>{{ client.FamilyName }}</td>
        <td>{{ client.Name }}</td>
        <td>{{ client.Patronymic }}</td>
        <td>{{ client.Phone }}</td>
        <td>{{ client.Email }}</td>
        <td>{{ client.Address }}</td>
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
      clientsData: [
        {INN: '777555', FamilyName: 'Наталья', Name: 'Савкина', Patronymic:'Петровна', Phone: '+7(924)575-01-00', Email:'n.p.savkina@chita.etagi.com', Address: 'г.Чита, ул.Кабанская, д.1а, кв.99'}
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