import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Vehicles from './components/Vehicles';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Vehicles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
