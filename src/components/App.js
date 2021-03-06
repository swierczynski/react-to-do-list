import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask'
import TaskList from './TaskList'

class App extends Component {
  counter = 0
  state = {
    tasks: []
  }
  deleteTask=(id)=> {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks
    })
  }
  doneTask =(id)=> {
    let tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if(task.id === id) {
      task.active = false;
      task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }
  addTask = (text, date, important) => {
    this.counter++;
    const task = {
      id: this.counter, 
      text, 
      date, 
      important, 
      active: true, 
      finishDate: null
    };
    this.setState((prevState)=> ({
      tasks: prevState.tasks.concat(task).reverse()
    }))

    return true
  }

  render() {
    return (
      <>
        <h1>To Do List</h1>
        <AddTask add={this.addTask}/>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} done={this.doneTask}/>
      </>
    );
  }
}

export default App;
