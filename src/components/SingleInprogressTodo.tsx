import { AiOutlineSave } from "react-icons/ai";
import { Todo } from "../model/Todo";
import { useEffect, useRef, useState } from "react";
import ToTodosIcon from "./Icons/ToTodosIcon";
import CompleteIcon from "./Icons/CompleteIcon";
import EditIcon from "./Icons/EditIcon";
import DeleteIcon from "./Icons/DeleteIcon";
import { DraggableProvided } from "react-beautiful-dnd";

interface Props {
  provided: DraggableProvided;
  index: number;
  todo: Todo;
  editTodo: (todo: Todo) => void;
  handleDeleteTodo: (todo: Todo) => void;
  handleCompleteTodo: (todo: Todo) => void;
  handleToTodos: (todo: Todo) => void;
}

const SingleInProgressTodo = ({
  provided,
  todo,
  editTodo,
  handleDeleteTodo,
  handleCompleteTodo,
  handleToTodos,
}: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [todoTitle, setTodoTitle] = useState<string>(todo.title);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEditing]);

  const handleEditTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editTodo({ ...todo, title: todoTitle });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <li
        className="list-group-item d-flex align-items-center justify-content-center row gap-3"
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        {/* editable title input */}
        <form className="col-8 d-inline-flex" onSubmit={(e) => handleEditTodo(e)} >
          <input
            type="text"
            className="form-control"
            defaultValue={todo.title}
            value={todoTitle}
            ref={inputRef}
            onChange={(e) => {
              setTodoTitle(e.target.value);
            }}
          />
          <div className="col-1">
            <button type="submit" className="btn btn-success">
              <AiOutlineSave />
            </button>
          </div>
        </form>
      </li>
    );
  } else {
    return (
      <li
        className="list-group-item d-flex align-items-center justify-content-center row gap-3"
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <div className="btn-group col-1" role="group" aria-label="Basic example" >
          <ToTodosIcon todo={todo} handleToTodos={handleToTodos} />
        </div>

        {/* todo title */}
        <div className="col-4 text-center"> {todo.title} </div>

        <div
          className="btn-group col-4"
          role="group"
          aria-label="Basic example"
        >
          <CompleteIcon todo={todo} handleCompleteTodo={handleCompleteTodo} />
          <EditIcon setIsEditing={setIsEditing} />
          <DeleteIcon todo={todo} handleDeleteTodo={handleDeleteTodo} />
        </div>
      </li>
    );
  }
};

export default SingleInProgressTodo;
