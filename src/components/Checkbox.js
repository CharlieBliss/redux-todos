import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import conf from '../constants/css'

const styles = {
	check: props => ({
		color: props.checked ? conf.green : conf.black,
	}),
}

const Checkbox = ({ classes, checked }) => (
	<span className={classes.check}>
		<i className="material-icons">
			{ checked ? 'check_box' : 'check_box_outline_blank' }
		</i>
	</span>
)

Checkbox.propTypes = {
	classes: PropTypes.object.isRequired,
	checked: PropTypes.bool,
}

export default withStyles(styles)(Checkbox)
