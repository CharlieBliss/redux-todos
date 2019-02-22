import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { sortTodos, getVisibleTodos } from '../logic/filters'
import TodoList from '../components/TodoList'


const mapStateToProps = (state, props) => ({
	todos: sortTodos(getVisibleTodos(state.todos, props.filter), state.visibilityFilter.sortBy),
	showCompleted: state.visibilityFilter.showCompleted,
})

const mapDispatchToProps = dispatch => ({
	toggleTodo: id => dispatch(toggleTodo(id)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(TodoList)
