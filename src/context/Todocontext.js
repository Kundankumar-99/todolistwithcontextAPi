import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todotile: "Todo Msg ",
      completed: false,
    },
  ],
  addTodo : (todotile) => {},
  updateTodo : (id,todotile) => {},
  deleteTodo : (id) => {},
  togglecompleted : (id) => {}

});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
