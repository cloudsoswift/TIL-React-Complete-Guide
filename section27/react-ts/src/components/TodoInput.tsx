import { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";

import classes from './TodoInput.module.css';

const TodoInput: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
    if(enteredText.trim().length === 0){
      //throw new error
      return;
    }
    todosCtx.addTodo(enteredText.trim());
  } 

  return <form onSubmit={handleSubmit} className={classes.form}>
    <label htmlFor="text"></label>
    <input type="text" name="" id="text" ref={todoTextInputRef}/>
    <button>Add Todo</button>
  </form>
};

export default TodoInput;