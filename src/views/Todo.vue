<template>
  <v-col>
    <v-card elevation="0" class="todo px-35 py-8 ma-auto rounded-xl white">
      <Logo class="mb-12" />
      <v-card-title class="todo__title mb-13 text-center">
        Today I need to
      </v-card-title>
      <TodoInput class="mb-10 px-5" />
      <TodoList class="mb-8" />
      <v-container class="todo__progress-container px-5 py-0">
        <v-row class="todo__progress-row no-gutters justify-space-between">
          <v-col class="todo__progress-col">
            <ProgressInfo :indicatorColor="'purple'" />
          </v-col>
          <v-col class="todo__progress-col">
            <ProgressInfo :indicatorColor="'pink'" />
          </v-col>
        </v-row>
      </v-container>
      <TodoButtons />
    </v-card>
  </v-col>
</template>

<script>
import Logo from "@/components/Logo";
import TodoInput from "@/components/todo/TodoInput";
import TodoList from "@/components/todo/TodoList";
import ProgressInfo from "@/components/ProgressInfo";
import TodoButtons from "@/components/todo/TodoButtons";

export default {
  name: "Todo",
  components: {
    Logo,
    TodoInput,
    TodoList,
    ProgressInfo,
    TodoButtons,
  },
};
</script>

<style lang="scss" scoped>
.todo {
  width: 730px;

  &__title {
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: -0.02em;
  }

  &__progress-col {
    flex: 0 1 calc(50% - 15px);
  }
}
</style>
