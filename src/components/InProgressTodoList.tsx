import { Draggable, Droppable } from "react-beautiful-dnd";
import { Todo } from "../model/Todo";
import SingleInProgressTodo from "./SingleInprogressTodo";

interface Props {
  todos: Todo[];
  handleToTodo: (todo: Todo) => void;
  handleCompleteTodo: (todo: Todo) => void;
  handleDeleteTodo: (todo: Todo) => void;
  editTodo: (todo: Todo) => void;
}

const InProgressTodos = ({
  todos,
  handleCompleteTodo,
  editTodo,
  handleDeleteTodo: handleDeleteTodo,
  handleToTodo,
}: Props) => {
  return (
    <Droppable droppableId="InProgressTodoList">
      {(provided) => (
        <ul className="list-group" ref={provided.innerRef} {...provided.droppableProps} >
          {todos.map((todo, index) => {
            return (
              <Draggable key={todo.id} draggableId={todo.id.toString()} index={index} >
                {( provided ) => (
                  <SingleInProgressTodo
                    index={index}
                    provided={provided}
                    todo={todo}
                    handleDeleteTodo={handleDeleteTodo}
                    editTodo={editTodo}
                    handleCompleteTodo={handleCompleteTodo}
                    handleToTodos={handleToTodo}
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

export default InProgressTodos;
