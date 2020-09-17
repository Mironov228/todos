import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './core/App';
import {store} from "./store/";
import {Provider, connect} from "react-redux";
import {todoAdd, todoDelete, todoToggle, filterSwitch} from "./store/main/actions.js";
function mapStateToProps(state) {
	let returnState = {...state.main};
	return returnState;
}
function mapDispatchToProps(dispatch) {
	return {
		todoAdd: function(value) {
			dispatch(todoAdd(value));
		},
		todoDelete: function(key) {
			dispatch(todoDelete(key));
		},
		todoToggle: function(key, isCompleted) {
			dispatch(todoToggle(key, isCompleted));
		},
		filterSwitch: function(filter) {
			dispatch(filterSwitch(filter));
		},
	}
}
let Container = connect(mapStateToProps, mapDispatchToProps)(App);
class FullApp extends React.Component {
	render() {
		return (			
			<Provider store={store}>
				<Container/>
			</Provider>
		)
	}
}
ReactDOM.render(<FullApp/>, document.getElementById("root"));