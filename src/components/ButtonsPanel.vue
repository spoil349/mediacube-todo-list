<template>
  <v-row class="buttons-block flex-nowrap no-gutters" justify="space-between">
    <v-btn
      v-for="button in buttonsList"
      :key="button.id"
      text
      depressed
      :class="[
        { primary: button.isActive },
        'buttons-block__btn',
        'px-3',
        'py-2',
        'rounded-lg',
      ]"
    >
      {{ button.name }}
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: "ButtonsPanel",
  props: {
    buttonsList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.buttons-block {
  &__btn {
    &.v-btn {
      min-width: unset;
      min-height: unset;
      height: fit-content;
    }
  }
}
</style>
