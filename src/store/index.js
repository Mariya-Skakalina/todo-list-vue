import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id:3,
    filter: 'all',
    items: []
  },
  getters: {
    donet({items, filter}){
      if(filter == 'compl'){
        return items.filter(item=>item.completed)
      } else if ( filter == 'not-compl') {
        return items.filter(item=>!item.completed)
      } else {
        return items
      }
    }
  },
  mutations: {
    donets(state, name){
      return state.filter = name
    },
    todos(state, it) {
      return state.items = it
    }
  },
  actions: {
    items({commit}) {
      fetch('http://localhost:3000/', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
      })
      .then(res => res.json())
      .then(function(data) {
        commit('todos', data)
      })
    },
    add_todo({commit}, name) {
      fetch('http://localhost:3000/', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
          'name': name
        }),
        credentials: 'same-origin'
      })
      .then(res => res.json())
      .then(function(data) {
        commit('todos', data)
      })
    },
    update_todo({commit}, id) {
      fetch('http://localhost:3000/', {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
          'id': id
        }),
        credentials: 'same-origin'
      })
      .then(res => res.json())
      .then(function(data) {
        commit('todos', data)
      })
    },
    delete_todo({commit}, id) {
      fetch('http://localhost:3000/', {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
          'id': id
        }),
        credentials: 'same-origin'
      })
      .then(res => res.json())
      .then(function(data) {
        commit('todos', data)
      })
    }
    
  },
  modules: {
  }
})
