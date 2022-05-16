<template>
  <v-hover v-slot="{ hover }">
    <v-list-item>
      <v-list-item-action class="drag-btn ma-0 pa-0" v-if="hover">
        <v-btn class="no-ripple" icon>
          <v-icon>mdi-drag-vertical</v-icon>
        </v-btn>
      </v-list-item-action>
      <slot :item="item">
        <v-list-item-content class="py-2">
          <v-list-item-title>It`s draggable list item</v-list-item-title>
        </v-list-item-content>
      </slot>
    </v-list-item>
  </v-hover>
</template>

<script>
export default {
  name: "DraggableListItem",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.drag-btn {
  @include side-absolute-btn;
}
</style>
