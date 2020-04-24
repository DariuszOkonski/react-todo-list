import React from 'react';
import Header from './components/Header.jsx';
import SingleTask from './components/SingleTask.jsx';
import SingleTaskEdit from './components/SingleTaskEdit.jsx';
import NewTask from './components/NewTask.jsx';

function App() {
  return (
    <div className="app">
      <Header/>

      <ul>
        <SingleTask/>  
        <SingleTask/>  
        <SingleTaskEdit/>  
      </ul>  

      <NewTask/>
    </div>
  );
}

export default App;
