import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<React.PropsWithChildren> = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem key={item.id} text={item.text} id={item.id} onDeleteTodo={todosCtx.deleteTodo.bind(null, item.id)}/>
      ))}
    </ul>
  );
};

export default Todos;
