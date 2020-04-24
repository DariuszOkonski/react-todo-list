import React from 'react';
import Header from './components/Header.jsx';
import NewTask from './components/NewTask.jsx';
import Tasks from './components/Tasks.jsx';
import ToDoContextProvider from './contexts/ToDoContext.jsx';

function App() {
  return (
    <div className="app">
      <Header/>

      <ToDoContextProvider>
        <Tasks/>
        <NewTask/>
      </ToDoContextProvider>
    </div>
  );
}

export default App;
