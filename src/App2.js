import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App2.css';
import Sidebar from './components/SideBar Section/sidebar';
import Body from './components/Body Section/Body';
import Profile from './components/profile/profile';
import Achieve from './components/achievements/achieve';
import Project from './components/project2/project2';

const App2 = () => {
  return (
    <Router>
      <div className='container'>
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/achievements" element={<Achieve />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App2;