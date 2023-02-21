import { PropsWithChildren, useState } from "react";
import React from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextObj>({
  items:  [],
  addTodo: () => {},
  deleteTodo: (id: string) => {},
});

const TodosContextProvider:React.FC<PropsWithChildren> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const HandleAddTodo = (text: string) => {
    const newTodo = new Todo(text);
    // setTodos(prevTodos=>[...prevTodos, newTodo]);
    setTodos(prevTodos=>prevTodos.concat(newTodo));
  }
  const HandleDeleteTodo = (todoId: string) => {
    setTodos(prevTodos=>prevTodos.filter(todo=>todo.id !== todoId));
  }
  const contextValue:TodosContextObj = {
    items: todos,
    addTodo: HandleAddTodo,
    deleteTodo: HandleDeleteTodo,
  }
  return <TodosContext.Provider value={contextValue}>
    {props.children}
  </TodosContext.Provider>
};

export default TodosContextProvider