import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, useRouteMatch} from 'react-router-dom'
import { Home } from './Home/Home'
import { NewTask } from './NewTask/NewTask.jsx'


function App() {
const [tasks, setTasks] = useState([])
const [alert, setAlert] = useState(false)
const [position, setPosition] = useState(0)


const addNewTask = (task) => {
  const newTask = {
    id: new Date().getTime().toString(),
    title: task
  }
  setTasks([...tasks, newTask])
}

const showAlertMsg = () => {
  setAlert(true)
  const timer = setTimeout(() => {
    setAlert(false)
  }, 3000);
}

console.log(tasks)

  return (
    <Router>
        <div className="App">
          <Route exact path="/">
            <Home tasks={tasks} />
          </Route>
          <Route path="/newtask">
            <NewTask 
              addNewTask={addNewTask} 
              showAlertMsg={showAlertMsg} 
              alert={alert}
             />
          </Route>
        </div>
    </Router>
  );
}

export default App;
