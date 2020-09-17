import {TODO_ADD, TODO_DELETE, TODO_TOGGLE, FILTER_SWITCH} from "./actions.js";

const setToLocalstorage = tasks => localStorage.setItem("todos", JSON.stringify(tasks));
const filters = {
	all: () => true,
	active: todo => !todo.isCompleted, 
	completed: todo => todo.isCompleted, 
};
function handleTodoAdd(state, action) {
	let copyState = {...state};
	if (action.value.trim() === "") {
		return state;
	}
	copyState.todos.push({value: action.value.trim(), key: Date.now(), isCompleted: false});
	copyState.filter = filters.all;
	setToLocalstorage(copyState.todos);
	return copyState;
}
function handleTodoDelete(state, action) {
	const {...copyState} = state;
	copyState.todos = copyState.todos.filter(todo => todo.key != action.key);
	setToLocalstorage(copyState.todos);
	return copyState;
}
function handleTodoToggle(state, action) {
	const {...copyState} = state;
	copyState.todos = copyState.todos.map(todo => {
		if (todo.key == action.key) {
			return Object.assign(todo,{isCompleted: !todo.isCompleted});
		}
		return todo;
	});
	setToLocalstorage(copyState.todos);
	return copyState;
}
function handleFilterSwitch(state, action) {
	const copyState = {...state};
	copyState.filter = filters[action.filter];
	return copyState;	
}
let initialTodos = JSON.parse(localStorage.getItem("todos")) || [];
let initialFilter = filters.all;	
export const mainReducer = (state={todos: initialTodos, filter: initialFilter}, action) => {
	switch(action.type) {
		case TODO_ADD:
		return handleTodoAdd(state, action);
		case TODO_DELETE:
		return handleTodoDelete(state, action);
		case TODO_TOGGLE:
		return handleTodoToggle(state, action);
		case FILTER_SWITCH:
		return handleFilterSwitch(state, action);
		default:
		return state;
	}
	return state;
}