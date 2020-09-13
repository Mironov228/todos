import React from 'react';
import styled from 'styled-components';
import Todo from '../Todo/Todo.js';

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
function TodosList (props) {
    let todos = props.todos;
    todos = todos.map((val, key) => {
        if (!props.filter(val)) {
            return
        }
        return <Todo 
    deleteTodo={props.deleteTodo}
    performed={val.performed}
    value={val}
    key={key}
    idValue={key}
    />})
    return (
        <div id="todos" onClick={(e) => {
            if (e.target.closest('.close'))
                props.deleteTodo(e.target.closest('.todo').getAttribute('data-id'))
            else if(e.target.closest('.check')) {
                console.log(e.target.closest(".todo").getAttribute('data-id'))
                props.onCheckClick(e.target.closest(".todo").getAttribute("data-id"));
            }
        }}>
            {todos}
            <Panel>
                <PanelButton 
                    onClick={() => {props.setFilter(
                            function(val) {
                                return true
                            }
                        )}}>
                    all
                </PanelButton>
                <PanelButton onClick={() => {props.setFilter(function(val) {return !val.performed})}}>
                    Active
                </PanelButton>
                <PanelButton onClick={() => {props.setFilter(function(val) {return val.performed})}}>
                    Completed
                </PanelButton>
                {
                    props.todos.some(val => val.performed) && 
                <PanelButton onClick={props.clearCompletedTodos}>Clear completed</PanelButton> }
            </Panel>
        </div>
    )
}
export default TodosList