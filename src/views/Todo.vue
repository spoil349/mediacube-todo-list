<template>
  <v-col>
    <v-card elevation="0" class="todo px-35 py-8 ma-auto rounded-xl white">
      <Logo class="mb-12" />
      <v-card-title class="todo__title mb-13 pa-0 justify-center">
        Today I need to
      </v-card-title>
      <v-container class="todo__input-container mb-10 px-5 py-0">
        <ValueForm
          v-model="newTodoText"
          @inputSubmit="addNewTodo()"
          :label="todoInputLabel"
        />
      </v-container>
      <v-container class="todo__list-container mb-8 pa-0">
        <DraggableList
          :listHeight="'85'"
          :items="allTodos"
          @dragEvent="rewriteTodoList"
        />
      </v-container>
      <v-container class="todo__progress-container px-5 py-0 mb-8">
        <v-row class="todo__progress-row no-gutters justify-space-between">
          <v-col class="todo__progress-col">
            <ProgressInfo :indicatorColor="'purple'" />
          </v-col>
          <v-col class="todo__progress-col">
            <ProgressInfo :indicatorColor="'pink'" />
          </v-col>
        </v-row>
      </v-container>
      <v-container class="todo__buttons-container px-5 py-0">
        <ButtonsPanel :buttonsList="buttonsList" />
      </v-container>
    </v-card>
  </v-col>
</template>

<script>
import Logo from "@/components/Logo";
import ValueForm from "@/components/ValueForm";
import DraggableList from "@/components/draggable-list/DraggableList";
import ProgressInfo from "@/components/ProgressInfo";
import ButtonsPanel from "@/components/ButtonsPanel";
import { mapActions, mapGetters } from "vuex";

import { v1 as uuidV1 } from "uuid";

export default {
  name: "Todo",
  components: {
    Logo,
    ValueForm,
    DraggableList,
    ProgressInfo,
    ButtonsPanel,
  },
  data() {
    return {
      todoInputLabel: "Todo text",
      newTodoText: "",
      buttonsList: [
        {
          id: 1,
          name: "Check all",
          isActive: false,
        },
        {
          id: 2,
          name: "All",
          isActive: true,
        },
        // {
        //   id: 3,
        //   name: "Active",
        //   isActive: false,
        // },
        // {
        //   id: 4,
        //   name: "Completed",
        //   isActive: false,
        // },
        {
          id: 5,
          name: "Clear completed",
          isActive: false,
        },
      ],
    };
  },
  methods: {
    ...mapActions(["fetchTodos", "addTodo", "rewriteTodoList"]),
    addNewTodo() {
      if (this.newTodoText) {
        const todoText = this.newTodoText.trim();
        if (todoText) {
          const todo = {
            key: uuidV1(),
            text: todoText,
            completed: false,
          };
          this.addTodo(todo);
          this.newTodoText = "";
        }
      }
    },
  },
  mounted() {
    this.fetchTodos();
  },
  computed: {
    ...mapGetters(["allTodos"]),
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
