import { useState } from 'react';
import './App.css';
import MainSection from './components/main-section/MainSection';
import Sidebar from './components/Sidebar';
import { TaskContext } from './context';
import AllToDos from '../public/todo.json';
function App() {
  const [allTodos, setAllTodos] = useState(AllToDos);
  const [updateData, setUpdateData] = useState();
  const [updateModal, setUpdateModal] = useState(false);
  console.log(updateModal);
  const addTodo = todo => {
    setAllTodos(prevTodos => [
      ...prevTodos,
      { ...todo, id: crypto.randomUUID() },
    ]);
  };

  const deleteTodo = id => {
    setAllTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };
  const updateTodo = id => {
    setUpdateData(prevTodos => prevTodos.find(todo => todo.id == id));
  };

  console.log('This is update data', updateData);
  return (
    <div className="flex h-screen">
      <TaskContext.Provider
        value={{
          allTodos,
          addTodo,
          deleteTodo,
          updateTodo,
          updateModal,
          setUpdateModal,
        }}
      >
        <Sidebar />
        <MainSection updateModal={updateModal} />
      </TaskContext.Provider>
    </div>
  );
}

export default App;
