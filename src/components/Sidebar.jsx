import Logo from '../assets/logo.svg';
import DashboardIcon from '../assets/dashboard.svg';
import ProjectIcon from '../assets/project.svg';
import ContactIcon from '../assets/contact.svg';
import KanbanIcon from '../assets/kanban.svg';
import CalendarIcon from '../assets/calender.svg';
import MessageIcon from '../assets/message.svg';
import SettingIcon from '../assets/setting.svg';

const Sidebar = () => {
  return (
    <aside className="hidden w-64 bg-gray-800 p-6 lg:block text-white">
      <div className="mb-8 flex items-center">
        <div className="flex items-center justify-center rounded-full text-xl font-bold">
          <img src={Logo} className="mx-auto h-10 text-center" />
        </div>
      </div>
      <button className="mb-8 w-full rounded-md bg-green-500 py-2 text-white">
        + New Project
      </button>
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center">
              <img src={DashboardIcon} alt="" />
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <img src={ProjectIcon} alt="" />
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <img src={ContactIcon} alt="" />
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <img src={KanbanIcon} alt="" />
              Kanban
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <img src={CalendarIcon} alt="" />
              Calendar
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <img src={MessageIcon} alt="" />
              Messages
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <img src={SettingIcon} alt="" />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
