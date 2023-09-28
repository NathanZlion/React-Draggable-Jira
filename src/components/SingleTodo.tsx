import { Todo } from "../model/Todo";
import { AiOutlineSave } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import DeleteIcon from "./Icons/DeleteIcon.tsx";
import EditIcon from "./Icons/EditIcon.tsx";
import ToInprogressIcon from "./Icons/AddToInprogressIcon.tsx";
import ToTodosIcon from "./Icons/ToTodosIcon.tsx";
import CompleteIcon from "./Icons/CompleteIcon.tsx";

const SingleTodo = ({
  todo,
  editTodo,
  handleDeleteTodo,
  handleInProgressTodo,
}: {
  todo: Todo;
  editTodo: (todo: Todo) => void;
  handleDeleteTodo: (todo: Todo) => void;
  handleInProgressTodo: (todo: Todo) => void;
}) => {
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

  return isEditing ? (
    <li className="list-group-item d-flex align-items-center justify-content-center row gap-3">
      {/* editable title input */}
      <form className="col-8 d-inline-flex" onSubmit={(e) => handleEditTodo(e)}>
        <input type="text" className="form-control" defaultValue={todo.title} value={todoTitle} ref={inputRef} onChange={(e) => { setTodoTitle(e.target.value); }} />
        <div className="col-1">
          <button type="submit" className="btn btn-success">
            <AiOutlineSave />
          </button>
        </div>
      </form>
    </li>
  ) : (
    <li className="list-group-item d-flex align-items-center justify-content-center row gap-3">
      {/* todo title */}
      <div className="col-4 text-center"> {todo.title} </div>

    <div className="btn-group col-4" role="group" aria-label="Basic example">
      <ToInprogressIcon todo={todo} handleInProgressTodo={handleInProgressTodo} />
      <EditIcon setIsEditing={setIsEditing} />
      <DeleteIcon todo={todo} handleDeleteTodo={handleDeleteTodo} />
    </div>
    </li>
  );
};

const SingleInProgressTodo = ({
  todo,
  editTodo,
  handleDeleteTodo,
  handleCompleteTodo,
  handleToTodos
}: {
  todo: Todo;
  editTodo: (todo: Todo) => void;
  handleDeleteTodo: (todo: Todo) => void;
  handleCompleteTodo: (todo: Todo) => void;
  handleToTodos: (todo: Todo) => void;
}) => {
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

  return isEditing ? (
    <li className="list-group-item d-flex align-items-center justify-content-center row gap-3">
      {/* editable title input */}
      <form className="col-8 d-inline-flex" onSubmit={(e) => handleEditTodo(e)}>
        <input type="text" className="form-control" defaultValue={todo.title} value={todoTitle} ref={inputRef} onChange={(e) => { setTodoTitle(e.target.value); }} />
        <div className="col-1">
          <button type="submit" className="btn btn-success">
            <AiOutlineSave />
          </button>
        </div>
      </form>
    </li>
  ) : (
    <li className="list-group-item d-flex align-items-center justify-content-center row gap-3">
      <div className="btn-group col-1" role="group" aria-label="Basic example">
        <ToTodosIcon todo={todo} handleToTodos={handleToTodos}/>
      </div>
    
      {/* todo title */}
      <div className="col-4 text-center"> {todo.title} </div>

      <div className="btn-group col-4" role="group" aria-label="Basic example">
        <CompleteIcon todo={todo} handleCompleteTodo={handleCompleteTodo} />
        <EditIcon setIsEditing={setIsEditing} />
        <DeleteIcon todo={todo} handleDeleteTodo={handleDeleteTodo} />
      </div>
    </li>
  );
};

const SingleCompletedTodo = ({ todo, editTodo, handleDeleteTodo, handleInProgressTodo }: {
  todo: Todo;
  editTodo: (todo: Todo) => void;
  handleDeleteTodo: (todo: Todo) => void;
  handleInProgressTodo: (todo:Todo) => void;
}) => { 
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
  
  return isEditing ? (
    <li className="list-group-item d-flex align-items-center justify-content-center row gap-3">
      {/* editable title input */}
      <form className="col-8 d-inline-flex" onSubmit={(e) => handleEditTodo(e)}>
        <input type="text" className="form-control" defaultValue={todo.title} value={todoTitle} ref={inputRef} onChange={(e) => { setTodoTitle(e.target.value); }} />
        <div className="col-1">
          <button type="submit" className="btn btn-success">
            <AiOutlineSave />
          </button>
        </div>
      </form>
    </li>
  ) : (
    <li className="list-group-item d-flex align-items-center justify-content-center row gap-3">
      <div className="btn-group col-2" role="group" aria-label="Basic example">
        <ToInprogressIcon todo={todo} handleInProgressTodo={handleInProgressTodo}/>
      </div>
    
      {/* todo title */}
      <div className="col-4 text-center"> {todo.title} </div>

      <div className="btn-group col-4" role="group" aria-label="Basic example">
        <EditIcon setIsEditing={setIsEditing} />
        <DeleteIcon todo={todo} handleDeleteTodo={handleDeleteTodo} />
      </div>
    </li>
  );
};

export { SingleTodo, SingleInProgressTodo, SingleCompletedTodo };
