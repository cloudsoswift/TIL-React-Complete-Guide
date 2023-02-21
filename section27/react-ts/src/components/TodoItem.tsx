import classes from './TodoItem.module.css';

const TodoItem: React.FC<{id: string; text: string; onDeleteTodo: (id: string)=>void}> = (props) => {
  const handleClick = () => {
    props.onDeleteTodo(props.id);
  }
  return <li className={classes.item} onClick={handleClick}>{props.text}</li>
}

export default TodoItem;