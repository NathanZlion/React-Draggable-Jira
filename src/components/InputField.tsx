import plusIcon from "../assets/plus-icon.svg";
import { useRef, useState } from "react";

interface InputFieldProps {
  handleAddTodo: (
    e: React.FormEvent<HTMLFormElement>,
    TodoTitle: string
  ) => void;
}

const InputField = ({ handleAddTodo}: InputFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todoInputval, setTodoInputval] = useState<string>("");


  return (
    <form
      className="input-group my-3 p-0 input-group-lg"
      onSubmit={(e) => {
        handleAddTodo(e, todoInputval);
        inputRef.current?.blur();
        setTodoInputval("");
      }}
    >
      <input
        type="text"
        className="form-control"
        value={todoInputval}
        placeholder="Add a task"
        ref={inputRef}
        onChange={(e) =>{setTodoInputval(e.target.value)}}
      />
      <button
        className="btn btn-outline-success bg-success d-flex justify-content-center align-items-center"
        type="submit"
      >
        <img src={plusIcon} alt="Add" height={"100%"} />
      </button>
    </form>
  );
};

export default InputField;
