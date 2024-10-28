import { useState } from 'react';
import './App.css';
import MainSection from './components/main-section/MainSection';
import Sidebar from './components/Sidebar';
import { TaskContext } from './context';
import AllToDos from '../public/todo.json';
function App() {
  const [allTodos, setAllTodos] = useState(AllToDos);
  const addTodo = todo => {
    setAllTodos(prevTodos => [...prevTodos, todo]);
  };
  return (
    <div className="flex h-screen">
      <TaskContext.Provider value={{ allTodos, addTodo }}>
        <Sidebar />
        <MainSection />
      </TaskContext.Provider>
    </div>
  );
}

export default App;
