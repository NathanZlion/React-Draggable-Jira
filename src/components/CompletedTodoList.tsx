import { Draggable, Droppable } from "react-beautiful-dnd";
import { Todo } from "../model/Todo";
import SingleCompletedTodo from "./SingleCompletedTodo";

interface Props {
  todos: Todo[];
  handleDeleteTodo: (todo: Todo) => void;
  editTodo: (todo: Todo) => void;
  handleInProgressTodo: (todo: Todo) => void;
}

const CompletedTodos = ({
  todos,
  handleDeleteTodo,
  handleInProgressTodo,
  editTodo,
}: Props) => {
  return (
    <Droppable droppableId="CompletedTodoList">
      {(provided) => (
        <ul className="list-group" ref={provided.innerRef} {...provided.droppableProps} >
          {todos.map((todo, index) => {
            return (
              <Draggable key={todo.id} draggableId={todo.id.toString()} index={index} >
                {(provided, snapshot) => (
                  <SingleCompletedTodo
                    provided={provided}
                    todo={todo}
                    handleDeleteTodo={handleDeleteTodo}
                    editTodo={editTodo}
                    handleInProgressTodo={handleInProgressTodo}
                  />
                )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

export default CompletedTodos;
