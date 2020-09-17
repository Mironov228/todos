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
export function TodosList ({todos, deleteTodo, todoToggle, filter, filterSwitch, clearCompletedTodos}) {
    todos = todos.map((val, key) => {
        if (!filter(val)) {
            return
        }
        return <Todo 
                    deleteTodo={deleteTodo}
                    isCompleted={val.isCompleted}
                    value={val}
                    key={val.key}
                    idValue={val.key}
                />
            });
    function filterAll(val) {
        filterSwitch("all");
    }
    function filterActive(val) {
        filterSwitch("active");
    }
    function filterCompleted(val) {
        filterSwitch("completed");
    }
    function onTodosClick(e) {
        if (e.target.classList.contains('todo__state'))
            return
        if (e.target.closest('.close')) {
            let todo = e.target.closest('.todo');
            let todoKey = todo.getAttribute('data-id')
            deleteTodo(todoKey);
        }
        else if(e.target.closest('.todo__label')) {
            let todo = e.target.closest('.todo');
            let todoKey = todo.getAttribute('data-id')
            todoToggle(todoKey);        }
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
            </Panel>
        </div>
    )
}
