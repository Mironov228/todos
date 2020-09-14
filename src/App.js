import React from 'react';
import {Header} from './components/Header/Header.js';
import {MainContent} from './components/MainContent/MainContent.js';
import {SvgForCheck} from "./components/SvgForCheck/SvgForCheck.js";
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
    if (inputValue === '') {
      return
    }
    const key = Date.now();
    const newTodo = {input: inputValue, performed:false, key};
    this.setState(state => ({
      input: '',
      todos: [...state.todos, newTodo]
    }), this.setToLocalstorage)
  }
  onCheckClick = (key) => {
    const {todos} = this.state;
    // Get index target element of key
    let index = -1;
    for (let i = 0; i<todos.length;i++) {
      if (todos[i].key == key) {
        index = i;
        break;
      }
    }
    if(index===-1) {
        console.log("TI PIDORAS" + key);
        return;
    }
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
    // Get index target element of key
    let index = -1;
    for (let i = 0; i<todos.length;i++) {
      if (todos[i].key == key) {
        index = i;
        break;
      }
    }
    if(index===-1) {
        console.log("TI PIDORAS");
        return;
    }
    // delete todo
    todos.splice(index, 1);
    this.setState(state => ({
      todos
    }), this.setToLocalstorage)
  }
  render() {
    return (
      <React.Fragment>
        <SvgForCheck/>
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
