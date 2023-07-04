import { useState, useEffect } from 'react';

import { Header } from './components/Header';
import { ShowTask } from './components/ShowTask';
import { AddTask } from './components/AddTask';

import './App.css';

function App() {
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem('tasklist'))|| []);
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem('tasklist', JSON.stringify(tasklist));
    console.log('save to localstorage', JSON.stringify(tasklist));
  } , [tasklist]);

  return (
    <div className="App">
      <Header />
      <AddTask
        task={task}
        setTask={setTask}
        tasklist={tasklist}
        setTasklist={setTasklist}
      />
      <ShowTask
        task={task}
        setTask={setTask}
        tasklist={tasklist}
        setTasklist={setTasklist}
      />
    </div>
  );
}

export default App;
