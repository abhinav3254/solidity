import './App.css';
import Nav from './Nav/Nav'
import Home from './Home/Home'
import ResumeBuilder from './ResumeBuilder/ResumeBuilder'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <div className='nav-sep'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/build" element={<ResumeBuilder />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
