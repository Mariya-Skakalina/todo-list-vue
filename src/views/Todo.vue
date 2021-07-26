<template>
  <div class="home">
    <TodoList msg="Список задач"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'Home',
  components: {
    TodoList
  }
}
</script>