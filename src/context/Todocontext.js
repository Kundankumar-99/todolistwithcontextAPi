import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todotile: "Todo Msg ",
      completed: false,
    },
  ],
  addTodo : (todo) => {},
  updateTodo : (id,todo) => {},
  deleteTodo : (id) => {},
  togglecompleted : (id) => {}

});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
