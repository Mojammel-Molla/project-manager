import TodoCard from './TodoCard';
import FilterIcon from '../../assets/filter.svg';
import { useContext, useState } from 'react';
import { TaskContext } from '../../context';
const OnGoingProjects = () => {
  const { allTodos } = useContext(TaskContext);
  const initialTodos = allTodos.filter(todo => todo.category === 'ongoing');
  const [onGoings, setOnGoings] = useState(initialTodos);
  const handleSort = () => {
    const sortedTodos = [...onGoings].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setOnGoings(sortedTodos);
  };
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-yellow-500 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            On Progress ({onGoings.length})
          </h3>

          <button onClick={() => handleSort()}>
            <img className="cursor-pointer" src={FilterIcon} />
          </button>
        </div>

        {onGoings.map(todo => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
        {/* <!-- Add more task cards here --> */}
      </div>
    </div>
  );
};

export default OnGoingProjects;
