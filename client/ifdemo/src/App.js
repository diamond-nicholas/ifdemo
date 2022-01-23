import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Current from './Component/Pages/Current';

function App() {
  return (
    <Router className=''>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Current />} />
      </Routes>
    </Router>
  );
}

export default App;
