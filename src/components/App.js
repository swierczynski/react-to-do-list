import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask'
import TaskList from './TaskList'

class App extends Component {
  counter = 5
  state = {
    tasks: [
      {id: 0, text: 'zagrać w Cyberpunk', date: '2021-02-02', important: true, active: true, finishDate: null},
      {id: 1, text: 'zagrac w pokera', date: '2021-03-18', important: false, active: true, finishDate: null},
    ]
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
