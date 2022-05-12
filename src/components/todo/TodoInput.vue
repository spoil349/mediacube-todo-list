<template>
  <v-form class="todo-input" @submit.prevent="submit">
    <input
      class="todo-input__input rounded-lg pa-3"
      type="text"
      placeholder="Type something..."
      v-model="todoText"
    />
    <v-btn
      class="todo-input__btn primary rounded-lg"
      elevation="0"
      height="100%"
      type="submit"
    >
      Submit
    </v-btn>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";
import { v1 as uuidV1 } from "uuid";
export default {
  name: "TodoInput",
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    submit() {
      if (this.todoText !== "") {
        const todo = {
          key: uuidV1(),
          text: this.todoText.trim(),
          completed: false,
        };
        this.addTodo(todo);
        this.todoText = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-input {
  display: grid;
  grid-template-columns: 1fr 77px;
  gap: 16px;

  &__input {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    outline: 1px solid $light-gray;

    &::placeholder {
      color: $muted;
    }
  }
}
</style>
