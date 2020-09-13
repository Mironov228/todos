import React from 'react';
import {Header} from './components/Header/Header.js';
import {MainContent} from './components/MainContent/MainContent.js';
import './style.css'

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      todos: JSON.parse(localStorage.getItem("todos")) || [],
      filter: () => true
    }
  }
  setToLocalstorage = () => {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }
  onInputChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }
  createNewTodo = () => {
    const inputValue = this.state.input;
    const newTodo = {input: inputValue, performed:false};
    if (inputValue === '') {
      return
    }
    this.setState(state => ({
      input: '',
      todos: [...state.todos, newTodo]
    }), this.setToLocalstorage)
  }
  onCheckClick = (index) => {
    const {todos} = this.state;
    // Switch the "performed" property on the opposite  
    todos[index].performed = !todos[index].performed
    this.setState(state => ({
      todos
    }), this.setToLocalstorage);
  }
  clearCompletedTodos = () => {
    const {todos} = this.state;
    // Clear todos list from completed todos
    let result = todos.filter(val => !val.performed);
    this.setState(
        {
          todos: result
        },
        this.setToLocalstorage
    )
  }
  setFilter = (filter) => { 
    this.setState({
      filter
    })
  }
  deleteTodo = (key) => {
    const {todos} = this.state;
    // delete todo
    todos.splice(key, 1);
    this.setState(state => ({
      todos
    }), this.setToLocalstorage)
  }
  render() {
    return (
      <React.Fragment>
        <Header headerText="todos"/>
        <MainContent 
        value={this.state.input}
        createNewTodo={this.createNewTodo}
        onInputChange={this.onInputChange}
        todos={this.state.todos}
        onCheckClick={this.onCheckClick}
        filter={this.state.filter}
        setFilter={this.setFilter}
        deleteTodo={this.deleteTodo}
        clearCompletedTodos={this.clearCompletedTodos}
        />
      </React.Fragment>
    )
  }
}
