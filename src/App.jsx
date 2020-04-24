import React from 'react';
import Header from './components/Header.jsx';
import NewTask from './components/NewTask.jsx';
import Tasks from './components/Tasks.jsx';

function App() {
  return (
    <div className="app">
      <Header/>

      <Tasks/>

      <NewTask/>
    </div>
  );
}

export default App;
