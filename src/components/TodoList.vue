
<template>
    <div>
      <h1>{{ msg }}</h1>
      <div>
        <input type="text" id="add-tado">
        <p v-on:click="add">Отправить</p>
      </div>

      <div>
      <div>
        <p  v-on:click="filter('all')">Все</p>
        <p v-on:click="filter('compl')">Выполненные</p>
        <p v-on:click="filter('not-compl')">Не завершенные</p>
      </div>

      <Todo v-bind:items="items"></Todo>

    </div>
    </div>
</template>

<script>

import Todo from '@/components/Todo.vue'
// import Todo from '../views/Todo.vue'

export default {
  name: 'TodoList',
  components: {
    Todo
  },
  props: {
    msg: String
  },
  computed: {
    items() {
      return this.$store.getters.donet
    },
  },
  mounted() {
    this.$store.dispatch("items");
  },
  methods: {
    add() {
      let todo = document.getElementById('add-tado')
      this.$store.dispatch('add_todo', todo.value)
      todo.value = ''
    },
    filter(n) {
      return this.$store.commit('donets',n)
      
    }
  }
}
</script>

<style scoped>
  .active {
    text-decoration: line-through;
  }
</style>