<template>
  <div class="todo-list">
    <v-list class="todo-list__items pa-0 overflow-y-auto" max-height="85">
      <draggable handle=".handle" v-model="items">
        <transition-group>
          <TodoTask v-for="item in items" :key="item.key" :item="item" />
        </transition-group>
      </draggable>
    </v-list>
  </div>
</template>

<script>
import TodoTask from "./TodoTask.vue";
import draggable from "vuedraggable";

export default {
  name: "TodoList",
  components: {
    TodoTask,
    draggable,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  // data() {
  //   return {
  //     items: [
  //       {
  //         key: 1,
  //         text: "qweqweq",
  //         completed: false,
  //       },
  //       {
  //         key: 2,
  //         text: "rtyrty",
  //         completed: false,
  //       },
  //       {
  //         key: 3,
  //         text: "asdasd",
  //         completed: true,
  //       },
  //       {
  //         key: 4,
  //         text: "zxczxc",
  //         completed: true,
  //       },
  //     ],
  //   };
  // },
};
</script>

<style lang="scss" scoped>
.todo-list {
  &__items {
    @include small-scrollbar;
  }
}
</style>
