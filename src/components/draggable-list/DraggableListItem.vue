<template>
  <v-hover v-if="!editingMode" v-slot="{ hover }">
    <v-list-item>
      <v-btn :ripple="false" class="drag-btn" icon v-if="hover">
        <v-icon :ripple="false">mdi-drag-vertical</v-icon>
      </v-btn>
      <v-list-item-action class="my-0 mr-2">
        <v-checkbox :ripple="false" :input-value="item.completed"></v-checkbox>
      </v-list-item-action>
      <v-list-item-content class="py-2">
        <v-list-item-title>
          {{ item.text }}
        </v-list-item-title>
      </v-list-item-content>
      <v-list-item-action @click="toggleEditingMode" class="my-0">
        <v-btn icon>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-list-item-action>
      <v-list-item-action class="my-0">
        <v-btn icon>
          <v-icon color="red">mdi-trash-can</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-hover>

  <v-list-item v-else>
    <v-list-item-content class="pa-0">
      <v-text-field
        class="pa-0 ma-0 pl-8"
        hide-details
        :value="item.text"
        ref="input"
      ></v-text-field>
    </v-list-item-content>
    <v-list-item-action @click="toggleEditingMode" class="my-0 pr-13">
      <v-btn icon>
        <v-icon color="green">mdi-check</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  name: "DraggableListItem",
  data() {
    return {
      editingMode: false,
    };
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    toggleEditingMode() {
      this.editingMode = !this.editingMode;
      setTimeout(() => {
        if (this.$refs.input) {
          this.$refs.input.focus();
        }
      }, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.drag-btn {
  @include side-absolute-btn;
}
</style>
