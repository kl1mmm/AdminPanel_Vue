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
        <th scope="col">№</th>
        <th scope="col">Дата подписания</th>
        <th scope="col">Юр.лицо</th>
        <th scope="col">ИНН</th>
        <th scope="col">ОГРН</th>
        <th scope="col">Дата окончания</th>
      </tr>
      </thead>
      <tbody class="contract" v-for="contract in contracts" :key="contract.id">
      <tr>
        <th scope="row">{{ contract.id }}</th>
        <td>{{ contract.DateSign }}</td>
        <td>{{ contract.entit_cl }}</td>
        <td>{{ contract.INN_cl }}</td>
        <td>{{ contract.OGRN_cl }}</td>
        <td>{{ contract.DateExpir }}</td>
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
      contracts: [
        {id: '1', DateSign: '01.01.2022', entit_cl: 'Нет', INN_cl:'-', OGRN_cl: '777666555', DateExpir:'01.01.2023'}
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