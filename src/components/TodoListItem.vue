<template>
  <v-container v-if="!editingMode" class="pa-0 ma-0">
    <v-row class="pa-0 ma-0">
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
    </v-row>
  </v-container>

  <v-container v-else>
    <v-row>
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
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TodoListItem",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      editingMode: false,
    };
  },
  methods: {
    toggleEditingMode() {
      this.editingMode = !this.editingMode;
      this.$nextTick().then(this.$refs.input.focus());
    },
  },
};
</script>
