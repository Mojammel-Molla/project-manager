import TodoCard from './TodoCard';
import FilterIcon from '../../assets/filter.svg';
const OnGoingProjects = () => {
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-yellow-500 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">On Progress (45)</h3>

          <button>
            {' '}
            <img className="cursor-pointer" src={FilterIcon} />
          </button>
        </div>

        <TodoCard />
        {/* <!-- Add more task cards here --> */}
      </div>
    </div>
  );
};

export default OnGoingProjects;
