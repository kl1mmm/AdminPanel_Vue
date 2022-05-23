<template>
  <div>
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
export default {
  components: {MyTable},
  data() {
    return {
      contracts: [
        {id: '1', DateSign: '01.01.2022', entit_cl: 'Нет', INN_cl:'', OGRN_cl: '777666555', DateExpir:'01.01.2023'}
      ]
    }
  }
}
</script>

<style scoped>

</style>