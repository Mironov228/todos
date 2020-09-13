import React from 'react';
import styled from 'styled-components';
import {Todo} from '../Todo/Todo.js';

const Panel = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    @media(max-width: 360px) {
        flex-direction: column;
        align-items: center;
    }
`;
const PanelButton = styled.div`
    cursor: pointer;
`
export function TodosList ({todos, deleteTodo, onCheckClick, filter, setFilter, clearCompletedTodos}) {
    let haveCompletedTodos = todos.some(val => val.performed);
    let clearCompletedButton =  haveCompletedTodos ?
        <PanelButton onClick={clearCompletedTodos}>Clear completed</PanelButton> :
        "";
    todos = todos.map((val, key) => {
        if (!filter(val)) {
            return
        }
        return <Todo 
                    deleteTodo={deleteTodo}
                    performed={val.performed}
                    value={val}
                    key={key}
                    idValue={key}
                />
            });
    function filterAll(val) {
        setFilter(
            function(val) {
                return true
            }
        )
    }
    function filterActive(val) {
        setFilter(
            function(val) {
                return !val.performed;
            }
        )
    }
    function filterCompleted(val) {
        setFilter(
            function(val) {
                return val.performed;
            }
        )
    }
    function onTodosClick(e) {
        if (e.target.closest('.close')) {
            let todo = e.target.closest('.todo');
            let indexTodo = todo.getAttribute('data-id')
            deleteTodo(indexTodo);
        }
        else if(e.target.closest('.check')) {
            let todo = e.target.closest(".todo");
            let indexTodo = todo.getAttribute("data-id");
            onCheckClick(indexTodo);
        }
    }
    return (
        <div id="todos" onClick={onTodosClick}>
            {todos}
            <Panel>
                <PanelButton onClick={filterAll}>
                    all
                </PanelButton>
                <PanelButton onClick={filterActive}>
                    Active
                </PanelButton>
                <PanelButton onClick={filterCompleted}>
                        Completed
                </PanelButton>
                {clearCompletedButton}
            </Panel>
        </div>
    )
}
