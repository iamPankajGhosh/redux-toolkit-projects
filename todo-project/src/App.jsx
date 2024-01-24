import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./features/todo/todoSlice";
import TodoList from "./components/TodoList";

const App = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo({ id: Date.now(), text: newTodo }));
      setNewTodo("");
    }
  };

  return (
    <div>
      <h1>Redux Toolkit To-Do App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <TodoList />
    </div>
  );
};

export default App;
