import React from 'react';
import styled from 'styled-components';
import {CloseOutlined, CheckOutlined} from "@ant-design/icons";
import classNames from 'classnames';
let StyleTodo = styled.div`
    width: 100%;
    font-size: 20px;
    padding: 10px 10px;
    border: 1px solid grey;
    border-top: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
`
let Close = styled.div`
    font-size: 16px;
    cursor: pointer;
`
let Check = styled.input`
    -moz-appearance: none;
    -webkit-appearance: none;

`;
export function Todo({idValue, value}) {
    const {isCompleted} = value;
    return (
        <StyleTodo data-id={idValue} className="todo">
            <label className="todo__label">
                <input className="todo__state" onClick={e => e.preventDefault()}type="checkbox" checked={isCompleted}/>
                
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" className="todo__icon">
                  <use xlinkHref="#todo__line" className="todo__line"></use>
                  <use xlinkHref="#todo__box" className="todo__box"></use>
                  <use xlinkHref="#todo__check" className="todo__check"></use>
                  <use xlinkHref="#todo__circle" className="todo__circle"></use>
                </svg>

                <div className="todo__text" style={{fontSize: "30px"}}>{value.value}</div>
            </label>
            <Close><CloseOutlined className="close"/></Close>
        </StyleTodo>
    )
}
