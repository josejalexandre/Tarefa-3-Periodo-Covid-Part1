<template>
  <div id="app">
    <div class="componentes">
    <input type="text" placeholder="Nova Tarefa" v-model="tarefa">
    <button @click="adicionarTarefa">Adicionar</button>
  </div>
  <div class="listar">
    <h4>Tarefas Pendentes</h4>
    <Listar> </Listar>
  </div>
  </div>
</template>

<script>
import Listar from "./components/Listar"
export default {
  name: 'App',
  components: {
    Listar
  },
  methods: {
    adicionarTarefa: function(){
      this.$store.commit('adicionar', {
        tarefa: this.tarefa
      })
    },
    data: function(){
      return{
        tarefa: ""
      }
    }
  }
}
</script>

<style>
.componentes{
  width: 250px;
  height: 20px;
  border: 1px;
  margin: 50px auto 0 auto; 
}

.componentes button {
  color: darkred;
  cursor: pointer;
}

.listar {
  width: 250px;
  height: auto;
  display: block;
  margin: 10px auto;
}

.listar h4 {
  color: darkred;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 0 0 17px;
}

</style>
