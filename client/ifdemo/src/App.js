import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Current from './Component/Pages/Current';
import Main from './Component/Main/Main';

function App() {
  return (
    <Router className=''>
      <Navbar />
      <Main />
      <Routes>
        <Route exact path='/current' element={<Current />} />
      </Routes>
    </Router>
  );
}

export default App;
