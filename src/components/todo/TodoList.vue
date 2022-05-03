<template>
  <div class="todo-list">
    <v-list class="todo-list__items pa-0 overflow-y-auto" max-height="85">
      <TodoTask v-for="task in tasks" :key="task.id" :item="task" />
    </v-list>
  </div>
</template>

<script>
import TodoTask from "./TodoTask.vue";

export default {
  name: "TodoList",
  components: {
    TodoTask,
  },
  data() {
    return {
      tasks: [
        {
          key: 1,
          text: "qweqweq",
          completed: false,
        },
        {
          key: 2,
          text: "rtyrty",
          completed: false,
        },
        {
          key: 3,
          text: "asdasd",
          completed: true,
        },
        {
          key: 4,
          text: "zxczxc",
          completed: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.todo-list {
  &__items {
    @include small-scrollbar;
  }
}
</style>
