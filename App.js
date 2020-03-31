import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoItem from './components/ToDoItem/ToDoItem.js';
import todosData from './todosData.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todoItems : todosData
    }
  }
  handleChange = id => {
    let index = this.state.todoItems.map(item => item.id).indexOf(id);
    if (this.state.todoItems[index].completed === false) {
      this.setState( state => {
        let {todoItems} = state;
        todoItems[index].completed = true;
        return todoItems;
      });
    } else {
      this.setState( state => {
        let {todoItems} = state;
        todoItems[index].completed = false;
        return todoItems;
      });
    }
  }
  deleteTask = id => {
    let index = this.state.todoItems.map(item => item.id).indexOf(id);
    const todoItems = this.state.todoItems;
    todoItems.splice(index, 1);
    this.setState( state => {
      let {todoItems} = state;
      return todoItems;
    });
  }
  addTask = () => {
    const val = document.getElementById('newTask').value;
    document.getElementById('newTask').value = "";
    const todoItems = this.state.todoItems;
    let newTask = {
      id : todoItems.length,
      description : val,
      completed : false
    }
    todoItems.push(newTask);
    this.setState( state => {
      let {todoItems} = state;
      return todoItems;
    });
  }
  render(){
    const {todoItems} = this.state;
    const activeTasks = todoItems.filter(task => task.completed === false);
    const completedTasks = todoItems.filter(task => task.completed === true);
    const finalTasks = [...activeTasks,...completedTasks].map(item => {
      return (
        <ToDoItem
          key={item.id}
          description={item.description}
          completed={item.completed}
          handleChange={() => { this.handleChange(item.id) }}
          deleteTask={() => { this.deleteTask(item.id) }}
        />
      )
    }) 

    return (
      <div className="App">
        <h1 className="title">Планы на день</h1>
        {finalTasks}
        <input type="text" id="newTask"/>
        <button onClick={this.addTask}>Добавить задачу</button>
      </div>
    );
  }
}

export default App;
