import { connect } from 'react-redux'
import moment from 'moment'
import sortBy from 'lodash.sortby'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import dateFormat from '../constants/date'
import { VisibilityFilters, Sorts } from '../constants/filters'

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter(t => t.completed)
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter(t => !t.completed && t.date)
		case VisibilityFilters.SHOW_NEW:
			return todos.filter(t => !t.date)
		default:
			throw new Error('Unknown filter: ' + filter)
	}
}

const sortTodos = (todos, sortBy) => {
	if(!todos.length) {
		return []
	}
	const sorts = Sorts
	if (Sorts[2].value.includes(sortBy)) {
		return todos.sortBy((x, y) => {
			if (x.text.toLowerCase() < y.text.toLowerCase()) {
				return (sortBy === Sorts[0].value) ? 1 : -1
			}
			if (x.text.toLowerCase() > y.text.toLowerCase()) {
				return (sortBy === Sorts[0].value) ? -1 : 1
			}
			return 0
		})
	}
	if (Sorts[0].value.includes(sortBy)) {
		return todos.sort((x, y) => {
			if (moment(x.date, dateFormat).isBefore(moment(y.date, dateFormat))) {
				return (sortBy === Sorts[2].value) ? 1 : -1
			}
			if (moment(x.date, dateFormat).isAfter(moment(y.date, dateFormat))) {
				return (sortBy === Sorts[2].value) ? -1 : 1
			}
			return 0
		})
	}
	return todos
}

const mapStateToProps = (state, props) => ({
	todos: sortTodos(getVisibleTodos(state.todos, props.filter), state.visibilityFilter.sortBy),
	showCompleted: state.visibilityFilter.showCompleted,
})

const mapDispatchToProps = dispatch => ({
	toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)
