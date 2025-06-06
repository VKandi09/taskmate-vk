import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';

import { useEffect, useState } from 'react';

function App() {
  const [ tasklist, setTasklist ] = useState(JSON.parse(localStorage.getItem("Tasklist")) || []);
  const [ task, setTask ] = useState({});

  useEffect(() => {
    localStorage.setItem("Tasklist", JSON.stringify(tasklist));
  }, [tasklist])
  
  return (
    <div className="App">
      <Header/>
      <AddTask 
        tasklist={tasklist} 
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <ShowTask 
        tasklist={tasklist} 
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
