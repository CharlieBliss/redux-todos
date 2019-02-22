import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import conf from '../constants/css'
import Todo from './Todo'
import SetSort from '../containers/SetSort'


const styles = {
	listWrapper: {
		width: '40%',
	},
	sort: {
		width: '50%',
	},
	title: {
		color: conf.purple,
		fontWeight: 'bold',
		fontFamily: conf.fontFamily,
	},
}
const TodoList = ({
	classes,
	todos,
	toggleTodo,
	sortable,
	hidden,
	title,
	showCompleted,
	completable,
}) => {
	const renderTodos = () => todos.map(todo => (
		<Todo
			key={todo.id}
			{...todo}
			completable={completable}
			onClick={() => (completable ? toggleTodo(todo.id) : {})}
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
		completed: PropTypes.bool,
		text: PropTypes.string.isRequired,
		tempCompleted: PropTypes.bool,
		date: PropTypes.string,
	}).isRequired).isRequired,
	toggleTodo: PropTypes.func.isRequired,
	sortable: PropTypes.bool,
	hidden: PropTypes.bool,
	title: PropTypes.string,
	showCompleted: PropTypes.bool,
	completable: PropTypes.bool,
	classes: PropTypes.object,
}

export default withStyles(styles)(TodoList)
