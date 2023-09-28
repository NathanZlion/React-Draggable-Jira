import { Todo } from "../../model/Todo";
import { TiTick } from "react-icons/ti";


interface Props {
  handleCompleteTodo: (todo: Todo) => void;
  todo: Todo;
}

const CompleteIcon = ({ handleCompleteTodo: CompleteTodo, todo}: Props) => {
  return (
    <button type="button" className="btn btn-success" 
      onClick={() => {CompleteTodo(todo)}} >
        <TiTick />
    </button>
  );
};

export default CompleteIcon;