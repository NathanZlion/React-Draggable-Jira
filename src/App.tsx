import "./App.css"; import { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./model/Todo";
import TodoList from "./components/TodoList";
import InProgressTodos from "./components/InProgressTodoList";
import CompletedTodos from "./components/CompletedTodoList";

const App: React.FC = () => {

  // dummy data
  const [todos, setTodos] = useState<Todo[]>([
    { title: "Learn React", id: 1 },
    { title: "Learn TypeScript", id: 2 },
    { title: "Learn Redux", id: 3 },
  ]);

  const [inprogressTodos, setInProgressTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAddNewTodo = (
    e: React.FormEvent<HTMLFormElement>,
    TodoTitle: string
  ) => {
    e.preventDefault();

    if (!TodoTitle) return;
    setTodos([
      { id: Date.now(), title: TodoTitle },
      ...todos,
    ]);
  };

  const handleToTodos = (todo: Todo) => {
    setInProgressTodos(inprogressTodos?.filter((t) => t.id !== todo.id));
    setCompletedTodos(completedTodos?.filter((t) => t.id !== todo.id));
    setTodos([todo, ...todos!]);
  }

  const handleDeleteTodo = (todo: Todo) => {
    console.log(todo.title);
    setInProgressTodos(inprogressTodos?.filter((t) => t.id !== todo.id));
    setCompletedTodos(completedTodos?.filter((t) => t.id !== todo.id));
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const handleCompleteTodo = (todo: Todo) => {
    setInProgressTodos(inprogressTodos?.filter((t) => t.id !== todo.id));
    setTodos(todos.filter((t) => t.id !== todo.id));
    setCompletedTodos([todo, ...completedTodos!]);
  };

  const handleInProgressTodo = (todo: Todo) => {
    setCompletedTodos(completedTodos?.filter((t) => t.id !== todo.id));
    setTodos(todos.filter((t) => t.id !== todo.id));
    setInProgressTodos([todo,...inprogressTodos!]);
  }

  const editTodo = (todo: Todo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, title: todo.title }:t)));
    setInProgressTodos(inprogressTodos.map((t) => (t.id === todo.id ? { ...todo, title: todo.title }:t)));
    setCompletedTodos(completedTodos.map((t) => (t.id === todo.id ? { ...todo, title: todo.title }:t)));
  };

  return (
    <div className="bg-dark container-fluid h-100 w-100 text-light p-5 ">
      <div className="container-lg shadow-md">
        <h1 className="display-4">Taskify App</h1>
        <InputField handleAddTodo={handleAddNewTodo}></InputField>

        <div className="row">
          <TodoList todos={todos} editTodo={editTodo} handleDeleteTodo={handleDeleteTodo} handleInProgressTodo={handleInProgressTodo} />

          <InProgressTodos todos={inprogressTodos} editTodo={editTodo} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} handleAddNewTodo={handleToTodos} />

          <CompletedTodos todos={completedTodos} handleDeleteTodo={handleDeleteTodo} editTodo={editTodo} handleInProgressTodo={handleInProgressTodo}/>
        </div>
      </div>
    </div>
  );
};

export default App;
