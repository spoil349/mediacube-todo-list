<template>
  <div class="todo-input">
    <input
      class="todo-input__input rounded-lg pa-3"
      type="text"
      placeholder="Type something..."
    />
    <v-btn
      class="todo-input__btn primary rounded-lg"
      elevation="0"
      height="100%"
    >
      Submit
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "TodoInput",
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
