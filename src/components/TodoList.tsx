import { Draggable, Droppable } from "react-beautiful-dnd";
import { Todo } from "../model/Todo";
import SingleTodo from "./SingleTodo";


interface TodoListProps {
  todos: Todo[];
  handleDeleteTodo: (todo: Todo) => void;
  editTodo: (todo: Todo) => void;
  handleInProgressTodo: (todo: Todo) => void;
}


const TodoList = ({
  todos,
  handleDeleteTodo,
  editTodo,
  handleInProgressTodo,
}: TodoListProps) => {
  return (
    <Droppable droppableId="TodoList">
      {(provided) => (
        <ul className="list-group" ref={provided.innerRef} {...provided.droppableProps} >
          {todos.map((todo, index) => {
            return (
              <Draggable key={todo.id} draggableId={todo.id.toString()} index={index} >
                {(provided, snapshot) => (
                  <SingleTodo
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

export default TodoList;
