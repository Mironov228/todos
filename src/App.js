import React from 'react';
import Header from './components/Header/Header.js';
import MainContent from './components/MainContent/MainContent.js';
import './style.css'

class App extends React.Component {
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
    let inputValue = this.state.input;
    let newTodo = {input: inputValue, performed:false};
    if (inputValue == '') {
      return
    }
    this.setState(state => ({
      input: '',
      todos: [...state.todos, newTodo]
    }), this.setToLocalstorage)
  }
  onCheckClick = (index) => {
    let todos = this.state.todos.slice();
    // Switch the "performed" property on the opposite  
    todos[index].performed = !todos[index].performed
    this.setState(state => ({
      todos
    }), this.setToLocalstorage);
  }
  clearCompletedTodos = () => {
    let todos = this.state.todos;
    // Clear todos list from completed todos
    todos = todos.filter(val => !val.performed);
    this.setState(
        {
          todos
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
    let todos = this.state.todos.slice();
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
export default App;
