<template>
  <v-form class="value-form" @submit.prevent="$emit('inputSubmit')">
    <input
      class="value-form__input rounded-lg pa-3"
      type="text"
      placeholder="Type something..."
      :value="text"
      @input="$emit('input', $event.target.value)"
    />
    <v-btn
      class="value-form__btn primary rounded-lg"
      elevation="0"
      height="100%"
      type="submit"
    >
      Submit
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: "ValueForm",
  props: {
    text: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style lang="scss" scoped>
.value-form {
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
