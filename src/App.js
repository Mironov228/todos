import React from 'react';
import Header from './components/Header/Header.style.js';
import MainContent from './components/MainContent/MainContent.style.js';
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
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }
  handleSubmit = () => {
    let input = this.state.input;
    let newTodo = {input, performed:false};
    this.setState(state => ({
      input: '',
      todos: [...state.todos, newTodo]
    }))
  }
  todoClick = (key) => {
    console.log(key);
    let value = this.state.todos.slice();
    value[key].performed = !value[key].performed
    console.log(value[key], key)
    console.log(value)
    this.setState(state => ({
      todos: value
    }))
  }
  clearCompletedTodos = () => {
    let todos = this.state.todos;
    todos = todos.filter(val => !val.performed);
    this.setState(
        {
          todos
        }
    )
  }
  setFilter = (filter) => {
    this.setState({
      filter
    })
  }
  deleteTodo = (key) => {
    let todos = this.state.todos.slice();
    todos.splice(key, 1);
    this.setState(state => ({
      todos
    }))
  }
  render() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
    return (
      <React.Fragment>
        <Header headerText="todos"/>
        <MainContent 
        value={this.state.input}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        todos={this.state.todos}
        todoClick={this.todoClick}
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
