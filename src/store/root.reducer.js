import {combineReducers} from 'redux';
import {mainReducer} from "./main/main.reducer.js";

export const rootReducer = combineReducers(
	{
		main: mainReducer
	}
)