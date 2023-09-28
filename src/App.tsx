import "./App.css";
import InputField from "./components/InputField";
import { useState } from "react";
import { Todo } from "./model/Todo";
import {
  DragDropContext,
  DraggableLocation,
  DropResult,
} from "react-beautiful-dnd";
import TodoList from "./components/TodoList";
import InProgressTodos from "./components/InProgressTodoList";
import CompletedTodos from "./components/CompletedTodoList";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inprogressTodos, setInProgressTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAddNewTodo = (
    e: React.FormEvent<HTMLFormElement>,
    TodoTitle: string
  ) => {
    e.preventDefault();
    if (!TodoTitle) return;
    setTodos([{ id: Date.now(), title: TodoTitle }, ...todos]);
  };

  const handleToTodo = (todo: Todo) => {
    setInProgressTodos(inprogressTodos?.filter((t) => t.id !== todo.id));
    setCompletedTodos(completedTodos?.filter((t) => t.id !== todo.id));
    setTodos([todo, ...todos!]);
  };

  const handleDeleteTodo = (todo: Todo) => {
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
    setInProgressTodos([todo, ...inprogressTodos!]);
  };

  const editTodo = (todo: Todo) => {
    setTodos(
      todos.map((t) => (t.id === todo.id ? { ...todo, title: todo.title } : t))
    );
    setInProgressTodos(
      inprogressTodos.map((t) =>
        t.id === todo.id ? { ...todo, title: todo.title } : t
      )
    );
    setCompletedTodos(
      completedTodos.map((t) =>
        t.id === todo.id ? { ...todo, title: todo.title } : t
      )
    );
  };

  const classNames = `card col-lg-4 col-md-12 col-sm-6 h-100 px-3`;

  const droppableIdToState: { [key: string]: Todo[] } = {
    TodoList: todos,
    InProgressTodoList: inprogressTodos,
    CompletedTodoList: completedTodos,
  };

  const droppableIdToSetState: {
    [key: string]: React.Dispatch<React.SetStateAction<Todo[]>>;
  } = {
    ToDoList: setTodos,
    InProgressTodoList: setInProgressTodos,
    CompletedTodoList: setCompletedTodos,
  };

  const handleSameDroppable = (
    source: DraggableLocation,
    destination: DraggableLocation
  ) => {
    const state = droppableIdToState[source.droppableId];
    const setState = droppableIdToSetState[source.droppableId];
    const [removed] = state.splice(source.index, 1);
    state.splice(destination.index, 0, removed);
    setState([...state]);
  };

  const handleDifferentDroppable = (
    source: DraggableLocation,
    destination: DraggableLocation
  ) => {
    const sourceState = droppableIdToState[source.droppableId];
    const sourceSetState: React.Dispatch<React.SetStateAction<Todo[]>> =
      droppableIdToSetState[source.droppableId];
    const destinationState = droppableIdToState[destination.droppableId];
    const destinationSetState: React.Dispatch<React.SetStateAction<Todo[]>> =
      droppableIdToSetState[destination.droppableId];
    const [removed] = sourceState.splice(source.index, 1);
    destinationState.splice(destination.index, 0, removed);
    sourceSetState([...sourceState]);
    destinationSetState([...destinationState]);
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    console.log(source);
    console.log(destination);

    if (!destination) return;

    if (destination.droppableId === source.droppableId) {
      if (source.index === destination.index) return;
      else handleSameDroppable(source, destination);
    } else handleDifferentDroppable(source, destination);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="bg-dark container-fluid h-100 w-100 text-light p-5 ">
        <div className="container-lg shadow-md">
          <h1 className="display-4">Taskify App</h1>
          <InputField handleAddTodo={handleAddNewTodo}></InputField>
          <div className="row">
            <div className={classNames + " bg-secondary"}>
              Todos
              <TodoList
                todos={todos}
                editTodo={editTodo}
                handleDeleteTodo={handleDeleteTodo}
                handleInProgressTodo={handleInProgressTodo}
              />
            </div>

            <div className={classNames + " bg-primary"}>
              InProgress
              <InProgressTodos
                todos={inprogressTodos}
                editTodo={editTodo}
                handleDeleteTodo={handleDeleteTodo}
                handleCompleteTodo={handleCompleteTodo}
                handleToTodo={handleToTodo}
              />
            </div>
            <div className={classNames + " bg-success"}>
              Completed
              <CompletedTodos
                todos={completedTodos}
                handleDeleteTodo={handleDeleteTodo}
                editTodo={editTodo}
                handleInProgressTodo={handleInProgressTodo}
              />
            </div>
          </div>
        </div>
      </div>
    </DragDropContext>
  );
};

export default App;
