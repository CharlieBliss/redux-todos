import React from 'react'
import PropTypes from 'prop-types'
import conf from '../constants/css'
import withStyles from 'react-jss'
import Todo from './Todo'
import SetSort from '../containers/SetSort'


const styles = {
	listWrapper: {
		width: '40%'
	},
	sort: {
		width: '50%',
	},
	title: {
		color: conf.purple,
		fontWeight: 'bold',
	}
}
const TodoList = ({ classes, todos, toggleTodo, sortable, hidden, title, showCompleted, completable }) => {
	const renderTodos = () =>
		todos.map(todo => (
			<Todo
				key={todo.id}
				{...todo}
				completable={completable}
				onClick={() => completable ? toggleTodo(todo.id) : {}}
			/>
		))
	const renderSort = () => {
		if (sortable) {
			return <SetSort />
		}
		return null
	}

	return (
		((hidden && !showCompleted) || !todos.length) ? null : (
			<div className={classes.listWrapper}>
				<div className={classes.title} data-layout="row" data-layout-align="space-around center">
					{title}
					<div data-layout="row" data-layout-align="end" className={classes.sort}>
						{renderSort()}
					</div>
				</div>
				{renderTodos()}
			</div>
		)
	)
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default withStyles(styles)(TodoList)
