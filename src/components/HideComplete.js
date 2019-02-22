import React from 'react'
import withStyles from 'react-jss'
import FilterLink from '../containers/FilterLink'

const styles = {
	action: {
		textDecoration: 'underline',
		fontSize: '11px',
	}
}
const HideComplete = ({ classes, showCompleted, onClick, visible }) =>
	(
		visible ?
			<div className={classes.action} onClick={onClick}>
				<span> {showCompleted ? 'Hide Completed Tasks' : 'Show Completed Tasks'} </span>
			</div> :
		null
)


export default withStyles(styles)(HideComplete)
