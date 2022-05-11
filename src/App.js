import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Task1 from './Pages/Task1';
import Task2 from './Pages/Task2';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
