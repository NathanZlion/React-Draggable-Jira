import { Todo } from "../../model/Todo";
import { AiTwotoneDelete } from "react-icons/ai";

interface Props {
  todo: Todo;
  handleDeleteTodo: (todo: Todo) => void;
}

const DeleteIcon = ({ handleDeleteTodo, todo }: Props) => {
  return (
    <button type="button" className="btn btn-danger"
      onClick={() => {
        handleDeleteTodo(todo);
      }} >
      <AiTwotoneDelete />
    </button>
  );
};

export default DeleteIcon;
