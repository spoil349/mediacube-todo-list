import localStorageMethods from "../../utils/localStorageMethods";

export default {
  state: {
    todos: [],
  },
  mutations: {
    updateTodos(state, todos) {
      state.todos = todos;
    },
  },
  actions: {
    fetchTodos({ commit }) {
      const todos = localStorageMethods.GET_LOCALSTORAGE_DATA("todos");

      commit("updateTodos", todos);
    },
    addTodo({ commit }, todo) {
      const todos = localStorageMethods.ADD_ITEM_LOCALSTORAGE_DATA(
        "todos",
        todo
      );
      commit("updateTodos", todos);
    },
    rewriteTodoList({ commit }, todoList) {
      const todos = localStorageMethods.REWRITE_LOCALSTORAGE_DATA(
        "todos",
        todoList
      );
      commit("updateTodos", todos);
    },
  },
  getters: {
    allTodos(state) {
      return state.todos;
    },
  },
};
