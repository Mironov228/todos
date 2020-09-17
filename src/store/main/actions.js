export const TODO_ADD = "TODO_ADD";
export const TODO_DELETE = "TODO_DELETE";
export const TODO_TOGGLE = "TODO_TOGGLE";
export const FILTER_SWITCH = "FILTER_SWITCH";

export const todoAdd = value => ({
		type: TODO_ADD,
		value
});
export const todoDelete = key => ({
	type: TODO_DELETE,
	key
})
export const todoToggle = (key, isCompleted) => ({
	type: TODO_TOGGLE,
	key,
	isCompleted
})
export const filterSwitch = filter => ({
	type: FILTER_SWITCH,
	filter
});