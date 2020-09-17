import React from 'react';
import {Header} from '../components/Header/Header.js';
import {MainContent} from '../components/MainContent/MainContent.js';
import {SvgForCheck} from "../components/SvgForCheck/SvgForCheck.js";
import './style.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    }
  }
  onInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }
  todoAdd = () => {
    this.props.todoAdd(this.state.inputValue);
    this.setState({
      inputValue: ""
    })
  }
  render() {
    return (
      <React.Fragment>
        <SvgForCheck/>
        <Header headerText="todos"/>
        <MainContent 
        inputValue={this.state.inputValue}
        todoAdd={this.todoAdd}
        onInputChange={this.onInputChange}
        todos={this.props.todos}
        todoToggle={this.props.todoToggle}
        filter={this.props.filter}
        filterSwitch={this.props.filterSwitch}
        deleteTodo={this.props.todoDelete}
        clearCompletedTodos={() => {}}
        />
      </React.Fragment>
    )
  }
}
