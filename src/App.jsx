import React from 'react';
import Header from './components/Header.jsx';
import SingleTask from './components/SingleTask.jsx';
import SingleTaskEdit from './components/SingleTaskEdit.jsx';

function App() {
  return (
    <div className="app">
      <Header/>

      <ul>
        <SingleTask/>  
        <SingleTask/>  
        <SingleTaskEdit/>  
      </ul>  
    </div>
  );
}

export default App;
