
<template>
    <div>
        <div id="example-1" v-for="(item, index) in items" :key="item.id" >
            <p v-on:click="comp(item.id)"  v-bind:class="{ active: item.completed }">{{ item.message }}</p>
            <p v-on:click="deletes(index)">Удалить</p>
        </div>
    </div>

</template>

<script>
export default {
  name: 'Todo',
  props: {
    items: Array
  },
  methods: {
    add() {
      let todo = document.getElementById('add-tado')
      this.$store.commit('addtodo', todo.value)
      todo.value = ''
    },
    comp(a) {
      this.$store.dispatch('update_todo', a)
    },
    deletes(n) {
      this.$store.commit('del',n)
    }
  }
}
</script>

<style scoped>
  .active {
    text-decoration: line-through;
  }
</style>