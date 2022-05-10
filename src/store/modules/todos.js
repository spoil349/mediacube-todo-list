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
    setTodos({ commit }, todos) {
      localStorageMethods.SET_LOCALSTORAGE_DATA("todos", todos);

      commit("updateTodos", todos);
    },
  },
  getters: {
    allTodos(state) {
      return state.todos;
    },
  },
};
