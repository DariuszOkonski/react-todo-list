import React from 'react';
import Header from './components/Header';
import SingleTask from './components/SingleTask';

function App() {
  return (
    <div className="app">
      <Header/>

      <ul>
        <SingleTask/>
        <SingleTask/>
        <SingleTask/>
      </ul>
    </div>
  );
}

export default App;
