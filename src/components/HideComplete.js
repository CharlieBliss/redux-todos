import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

const styles = {
	action: {
		textDecoration: 'underline',
		fontSize: '11px',
	},
}
const HideComplete = ({ classes, showCompleted, onClick, visible }) => (
	visible
		? (
			<div className={classes.action} onClick={onClick}>
				<span>
					{showCompleted ? 'Hide Completed Tasks' : 'Show Completed Tasks'}
				</span>
			</div>
		) : null
)

HideComplete.propTypes = {
	classes: PropTypes.object.isRequired,
	showCompleted: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
	visible: PropTypes.bool,
}

export default withStyles(styles)(HideComplete)
