import { useState } from 'react';
import CompleteProjects from './CompleteProjects';
import Header from './Header';
import OnGoingProjects from './OnGoingProjects';
import RevisedProjects from './RevisedProjects';
import TodoProjects from './TodoProjects';
import AddTodoModal from './AddTodoModal';
import PlusIcon from '../../assets/plus.svg';
import UpdateTodoModal from './UpdateTodoModal';

const MainSection = ({ updateModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-900 text-white relative">
      {/* <!-- Top Bar --> */}
      <Header />

      {/* <!-- Project Content --> */}
      <div className="mx-auto max-w-7xl p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Projectify</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
            >
              <img src={PlusIcon} alt="" />
              Add
            </button>
          </div>
        </div>

        <div className="-mx-2 mb-6 flex flex-wrap">
          {/* <!-- Todo --> */}
          <TodoProjects />
          {/* <!-- On Progress --> */}
          <OnGoingProjects />
          {/* <!-- Done --> */}
          <CompleteProjects />

          {/* <!-- Revised --> */}
          <RevisedProjects />
        </div>
      </div>
      {isOpen && <AddTodoModal setIsOpen={setIsOpen} />}
      {updateModal && <UpdateTodoModal />}
    </div>
  );
};

export default MainSection;
