import './App.css';
import MainSection from './components/main-section/MainSection';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainSection />
    </div>
  );
}

export default App;
