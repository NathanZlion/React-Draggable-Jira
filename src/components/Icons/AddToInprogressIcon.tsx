
import { Todo } from "../../model/Todo";
import { GrPowerCycle } from "react-icons/gr";

interface Props {
  handleInProgressTodo: (todo: Todo) => void;
  todo: Todo;
}

const ToInprogressIcon = ({ handleInProgressTodo, todo }: Props) => {
  return (
    <button type="button" className="btn btn-warning"
      onClick={() => { handleInProgressTodo(todo); }} >
      <GrPowerCycle/>
    </button>
  );
};

export default ToInprogressIcon;
