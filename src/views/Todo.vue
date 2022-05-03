<template>
  <v-col>
    <v-card elevation="0" class="todo px-35 py-8 ma-auto rounded-xl white">
      <Logo class="mb-12" />
      <div class="todo-title mb-13 text-center">
        <h3>Today I need to</h3>
      </div>
      <TodoInput class="mb-10 px-5" />
      <TodoList class="mb-8" />
      <TodoProgressBars class="px-5" />
      <TodoButtons />
    </v-card>
  </v-col>
</template>

<script>
import Logo from "@/components/Logo";
import TodoInput from "@/components/todo/TodoInput";
import TodoList from "@/components/todo/TodoList";
import TodoProgressBars from "@/components/todo/TodoProgressBars";
import TodoButtons from "@/components/todo/TodoButtons";

export default {
  name: "Todo",
  components: {
    Logo,
    TodoInput,
    TodoList,
    TodoProgressBars,
    TodoButtons,
  },
};
</script>

<style lang="scss" scoped>
.todo {
  width: 730px;
}

.todo-title {
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: -0.02em;
}
</style>
