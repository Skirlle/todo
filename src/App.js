import React from 'react';
import Task from './components/Task'
import AddTask from './components/AddTask'


class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        {id: 0, title: 'Первая задача'},
        {id: 1, title: 'Вторая задача'},
        {id: 2, title: 'Третья задача'},
      ]
    }
  }

  addTask = task => {
    this.setState(state => {
      let { tasks } = state
      tasks.push({
        id: tasks.length !== 0 ? task.length : 0,
        title: task, 
      })
      return task
    })
  }
  render() {
    const { tasks } = this.state
    return(
      <div>
      <ul>
        {tasks.map( task =>(
          <Task task={task} key={task.id}></Task>
        ))}
      </ul>
      <AddTask addTask={this.addTask}></AddTask>
      </div>
    )
  }
}

export default App;
