<template>
  <v-list class="pa-0 overflow-y-auto" :max-height="listHeight">
    <draggable handle=".drag-btn" :value="items" @change="dragHandler">
      <transition-group>
        <DraggableListItem v-for="item in items" :key="item.key" :item="item" />
      </transition-group>
    </draggable>
  </v-list>
</template>

<script>
import DraggableListItem from "../draggable-list/DraggableListItem.vue";
import draggable from "vuedraggable";

export default {
  name: "DraggableList",
  components: {
    DraggableListItem,
    draggable,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    listHeight: {
      type: String,
      default: () => "unset",
    },
  },
  methods: {
    // method creating and mutate a prop items copy, to keep props immutable
    dragHandler({ moved }) {
      const { oldIndex, newIndex } = moved;
      const itemsCopy = this.items.splice(0);
      const [draggedItem] = itemsCopy.splice(oldIndex, 1);

      itemsCopy.splice(newIndex, 0, draggedItem);
      this.$emit("dragEvent", itemsCopy);
    },
  },
};
</script>
