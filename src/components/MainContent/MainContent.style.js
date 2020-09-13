import React from 'react';
import styled from 'styled-components';
import TodosList from '../TodosList/TodosList.style.js';
let Input = styled.input`
    color: black;
    font-size: 20px;
    padding: 10px 5px;
    width: 100%;
    text-align: center;
`;
let Main = styled.main`
    width: 400px;
    margin: 0 auto;
    box-shadow: 0 3px 10px 1px grey;
`
function MainContent(props) {
    return (
        <Main>
            <Input placeholder="What need to be done?" onKeyDown={(e) => e.keyCode == 13? props.handleSubmit() : ''} value={props.value}onChange={props.handleChange}/>
            <TodosList 
            filter={props.filter}
            todoClick={props.todoClick}
            todos={props.todos}
            setFilter={props.setFilter}
            deleteTodo={props.deleteTodo}
            clearCompletedTodos={props.clearCompletedTodos}
            />
        </Main>
    )
}
export default MainContent;