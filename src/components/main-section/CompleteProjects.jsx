import { useContext, useState } from 'react';
import FilterIcon from '../../assets/filter.svg';
import TodoCard from './TodoCard';
import { TaskContext } from '../../context';
const CompleteProjects = () => {
  const { allTodos } = useContext(TaskContext);
  const completeTodos = allTodos.filter(todo => todo.category === 'complete');

  const handleSort = () => {
    const sortedTodos = [...completeTodos].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  };
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-teal-500 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            Done ({completeTodos.length})
          </h3>
          <button onClick={() => handleSort()}>
            <img src={FilterIcon} alt="" />
          </button>
        </div>

        <div>
          {completeTodos.map(todo => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
        {/* 
                <!-- Add more task cards here --> */}
      </div>
    </div>
  );
};

export default CompleteProjects;
