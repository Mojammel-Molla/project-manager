import TodoCard from './TodoCard';
import FilterIcon from '../../assets/filter.svg';
const TodoProjects = () => {
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-indigo-600 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">To-Do (45)</h3>
          <img src={FilterIcon} alt="" />
        </div>
        <div>
          <TodoCard />
        </div>

        {/* <!-- Add more task cards here --> */}
      </div>
    </div>
  );
};

export default TodoProjects;
