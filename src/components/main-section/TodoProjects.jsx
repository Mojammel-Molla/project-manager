import TodoCard from './TodoCard';
import FilterIcon from '../../assets/filter.svg';
import { useContext, useState } from 'react';
import { TaskContext } from '../../context';
const TodoProjects = () => {
  const { allTodos } = useContext(TaskContext);
  const initialTodos = allTodos.filter(todo => todo.category === 'todo');
  const [todos, setTodos] = useState(initialTodos);

  const handleSort = () => {
    const sortedTodos = [...todos].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setTodos(sortedTodos);
  };

  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-indigo-600 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">To-Do ({todos?.length})</h3>
          <button onClick={() => handleSort()}>
            <img src={FilterIcon} alt="" />
          </button>
        </div>
        <div>
          {todos.map(todo => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoProjects;
