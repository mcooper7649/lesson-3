import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const Hats = (props) => {
  console.log('Hatspage');
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

const TopicsList = (props) => {
  console.log('TopicsList');
  return (
    <div>
      <h1>TopicsList PAGE</h1>
    </div>
  );
};

const TopicsDetail = (props) => {
  console.log('TopicsDetail');
  return (
    <div>
      <h1>TopicsDetail PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/hats" element={<Hats />} />
      </Routes>
    </div>
  );
}

export default App;
