import { useContext, useState } from 'react';
import FilterIcon from '../../assets/filter.svg';
import { TaskContext } from '../../context';
import TodoCard from './TodoCard';
const RevisedProjects = () => {
  const { allTodos } = useContext(TaskContext);
  const initialTodos = allTodos.filter(todo => todo.category === 'revised');
  const [revisedTodos, setRevisedTodos] = useState(initialTodos);

  const handleSort = () => {
    const sortedTodos = [...revisedTodos].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setRevisedTodos(sortedTodos);
  };
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-rose-500 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            Revise ({revisedTodos.length})
          </h3>
          <button onClick={() => handleSort()}>
            <img src={FilterIcon} alt="" />
          </button>
        </div>
        {revisedTodos.map(todo => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default RevisedProjects;
