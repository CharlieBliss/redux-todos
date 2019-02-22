import orderBy from 'lodash.orderby'
import moment from 'moment'
import { VisibilityFilters, Sorts } from '../constants/filters'
import dateFormat from '../constants/date'

export const getVisibleTodos = (todos, filter) => {
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

export const sortTodos = (todos, sort) => {
	if(!todos.length) {
		return []
	}
	if (sort.includes(Sorts[2].value)) {
		return orderBy(todos, (todo) => todo.text, (sort === Sorts[2].value ? 'asc' : 'desc'))
	}
	if (sort.includes(Sorts[0].value)) {
		return orderBy(todos, (todo) => moment(todo.date, dateFormat).toDate(), (sort === Sorts[0].value ? 'asc' : 'desc'))
	}
	return todos
}
