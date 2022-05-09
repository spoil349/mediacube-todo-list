<template>
  <v-card elevation="0" class="progress-info pa-4 black-lighten rounded-lg">
    <v-card-text class="progress-info__counter pa-0 mb-1">
      {{ allItems }} {{ itemsType }}
    </v-card-text>
    <v-card-title class="progress-info__title pa-0 mb-3">
      {{ progressTitle }}
    </v-card-title>
    <v-progress-linear
      class="progress-info__progress"
      v-model="filledItemsPercentage"
      :color="indicatorColor"
      background-color="black"
      background-opacity="0.07"
    ></v-progress-linear>
  </v-card>
</template>

<script>
export default {
  name: "ProgressInfo",
  props: {
    indicatorColor: {
      type: String,
      default: () => "primary",
    },
  },
  data() {
    return {
      itemsType: "tasks",
      allItems: 10,
      filledItems: 3,
      progressTitle: "Completed",
      filledItemsPercentage: 0,
    };
  },
  created() {
    this.filledItemsPercentage = (this.filledItems / this.allItems) * 100;
  },
};
</script>

<style lang="scss" scoped></style>
