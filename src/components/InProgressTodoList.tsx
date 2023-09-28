import { Todo } from "../model/Todo";
import { SingleInProgressTodo } from "./SingleTodo";

interface Props {
  todos: Todo[];
  handleAddNewTodo: (todo:Todo) => void;
  handleCompleteTodo: (todo: Todo) => void;
  handleDeleteTodo: (todo: Todo) => void
  editTodo: (todo: Todo) => void
}

const InProgressTodos = ({ todos, handleCompleteTodo, editTodo, handleDeleteTodo: handleDeleteTodo, handleAddNewTodo}: Props) => {
  const classNames = `card col-lg-4 col-md-12 col-sm-6 bg-primary h-100 px-3`;
  return (
    <div className={classNames}>
      <div className="card-header">InProgress</div>
      <ul className="list-group">
        {todos.map((todo) => {
          return (
            <SingleInProgressTodo
              key={todo.id}
              todo={todo}
              handleCompleteTodo={handleCompleteTodo}
              handleToTodos={handleAddNewTodo}
              handleDeleteTodo={handleDeleteTodo}
              editTodo={editTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default InProgressTodos;
