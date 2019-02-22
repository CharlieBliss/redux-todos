import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import Checkbox from './Checkbox'
import { updateDate } from '../actions'
import SetDate from '../containers/SetDate'

const styles = {
	toDo: props => ({
		cursor: props.completable ? 'pointer' : 'default',
		padding: '10px 0px 10px',
		borderBottom: '1px solid lightgrey',
		marginBottom: '10px',
		fontSize: '11px',
	}),
	iconContainer: {
		marginRight: '5px',
	},
	textContainer: props => ({
		textDecoration: props.tempCompleted ? 'line-through' : 'none',
	}),
}


const Todo = ({ classes, onClick, tempCompleted, text, date, id, completable }) => {

	return (
		<div
			data-layout="row"
			data-layout-align="space-around center"
			className={classes.toDo}
		>

			<div onClick={onClick} data-flex="5" className={classes.iconContainer}>
				<Checkbox checked={tempCompleted}/>
			</div>
			<div onClick={onClick} data-flex="grow" className={classes.textContainer}>
				{text}
			</div>
			<div data-flex="45" data-layout="row" data-layout-align="end center" className={classes.iconContainer}>
				<SetDate
					id={id}
					date={date}
				/>
			</div>
		</div>
	)
}

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	tempCompleted: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
}

export default withStyles(styles)(Todo)
