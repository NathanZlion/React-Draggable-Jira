import { Todo } from "../../model/Todo";
import {IoArrowUndo} from 'react-icons/io5'

interface Props {
    todo: Todo;
    handleToTodos: (todo: Todo) => void;
}

const ToTodosIcon = ({ todo, handleToTodos }: Props) => {
  return (
    <button type="button" className="btn btn-primary" 
      onClick={() => { handleToTodos(todo) }} >
      <IoArrowUndo />
    </button>
  );
};

export default ToTodosIcon;