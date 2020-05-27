import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tarefas: []
    },
    mutations: {
        adicionar: function(state, tarefa) {
            state.tarefas.push(tarefa)
        }
    },
    actions: {

    },
    modules: {

    }
})