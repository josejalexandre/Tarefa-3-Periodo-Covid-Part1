<template>
  <ul>
    <li v-for="tar in tarefas" :key="tar">
      {{tar.tarefa}}
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    tarefas: function(){
      return this.$store.state.tarefas
    }
  }
}
</script>

<style>

</style>