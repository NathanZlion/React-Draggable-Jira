import { Todo } from "../model/Todo";
import { SingleTodo } from "./SingleTodo";

interface TodoListProps {
  todos: Todo[];
  handleDeleteTodo: (todo: Todo) => void;
  editTodo: (todo: Todo) => void;
  handleInProgressTodo: (todo: Todo) => void;
}

const TodoList = ({ todos, handleDeleteTodo, editTodo, handleInProgressTodo}: TodoListProps) => {
  const classNames = `card col-lg-4 col-md-12 col-sm-6 bg-secondary h-100 px-3`;
  return (
    <div className={classNames}>
      <div className="card-header">Todos</div>
      <ul className="list-group">
        {todos.map((todo) => {
          return (
            <SingleTodo
              key={todo.id}
              todo={todo}
              handleDeleteTodo={handleDeleteTodo}
              editTodo={editTodo}
              handleInProgressTodo={handleInProgressTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
