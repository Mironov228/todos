import React from 'react';
import styled from 'styled-components';
import {TodosList} from '../TodosList/TodosList.js';
let Input = styled.input`
    color: black;
    font-size: 20px;
    padding: 10px 5px;
    width: 100%;
    text-align: center;
    &:focus {
        outline: none;
    }
`;
let Main = styled.main`
    width: 400px;
    margin: 0 auto;
    box-shadow: 0 3px 10px 1px grey;
    max-width: 100%;
`
export const MainContent = ({inputValue, onInputChange, filter, todoToggle, todos, filterSwitch, deleteTodo, clearCompletedTodos, todoAdd}) =>
    <Main id="main">
        <Input 
        placeholder="What need to be done?"
        onKeyDown={(e) => e.keyCode === 13? todoAdd() : ''}
        value={inputValue}
        onChange={onInputChange}/>
        <TodosList 
        filter={filter}
        todoToggle={todoToggle}
        todos={todos}
        filterSwitch={filterSwitch}
        deleteTodo={deleteTodo}
        clearCompletedTodos={clearCompletedTodos}
        />
    </Main>