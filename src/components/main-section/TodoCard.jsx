/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import DeleteIcon from '../../assets/delete.svg';
import EditIcon from '../../assets/edit.svg';
import { TaskContext } from '../../context';
const TodoCard = ({ todo }) => {
  const { deleteTodo, updateModal, setUpdateModal } = useContext(TaskContext);

  return (
    <div className="mb-4 rounded-lg bg-gray-800 p-4">
      <div className="flex justify-between">
        <h4
          className={`mb-2 flex-1 font-semibold ${
            todo?.category == 'todo' ? 'first-line:text-indigo-500' : ''
          } ${todo?.category == 'ongoing' ? 'first-line:text-yellow-500' : ''}
          ${todo?.category == 'complete' ? 'first-line:text-teal-500' : ''}
            
          ${todo?.category == 'revised' ? 'first-line:text-rose-500' : ''}`}
        >
          {todo?.title}
        </h4>

        <div className="flex gap-2">
          <button onClick={() => deleteTodo(todo?.id)}>
            <img src={DeleteIcon} alt="" />
          </button>

          <button onClick={() => setUpdateModal(!updateModal)}>
            <img src={EditIcon} alt="" />
          </button>
        </div>
      </div>
      <p className="mb-2 text-sm text-zinc-200">{todo?.description}</p>

      <p className="mt-6 text-xs text-zinc-400">{todo?.date}</p>
    </div>
  );
};

export default TodoCard;
