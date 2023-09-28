import { Todo } from "../model/Todo";
import { SingleCompletedTodo } from "./SingleTodo";

interface Props {
  todos: Todo[];
  handleDeleteTodo: (todo: Todo) => void;
  editTodo: (todo: Todo) => void;
  handleInProgressTodo: (todo: Todo) => void;
}

// <CompletedTodos todos={completedTodos} deleteTodo={handleDeleteTodo} editTodo={editTodo} handleInProgressTodo={handleInProgressTodo}></CompletedTodos>
const CompletedTodos = ({ todos, handleDeleteTodo, handleInProgressTodo, editTodo }: Props) => {
  return (
      <div className="card col-lg-4 col-md-12 col-sm-6 bg-success h-100 px-3">
          <div className="card-header">Completed</div>
          <ul className="list-group">
          {todos.map((todo) => {
            return (
              <SingleCompletedTodo todo={todo} handleDeleteTodo={handleDeleteTodo} handleInProgressTodo={handleInProgressTodo} editTodo={editTodo} key={todo.id}
              />
            );
          })}
        </ul>
      </div>
    );
};

export default CompletedTodos;
