import React from 'react';
import styled from 'styled-components';
import {CloseOutlined, CheckOutlined} from "@ant-design/icons";
import logo from "../../logo.svg";
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
    transition: 0.4s;
    &.active {
        text-decoration: line-through;
        color: #d9d9d9;
        .check {
            color: green;
        }
    }
`
let Close = styled.div`
    font-size: 16px;
    cursor: pointer;
`
let Check = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    border: 1px solid;
    color: black;
    text-align: center;
`
export function Todo(props) {
    let value = props.value.performed;
    return (
        <StyleTodo data-id={props.idValue}className={classNames("todo", {active: value})} performed={props.performed}>
            <Check className="check">{value ? <CheckOutlined/> : ""}</Check>
            <div>{props.value.input}</div>
            <Close><CloseOutlined className="close"/></Close>
        </StyleTodo>
    )
}
