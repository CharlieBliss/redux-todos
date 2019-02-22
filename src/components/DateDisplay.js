import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import * as dateDisplay from '../logic/date'

const styles = {
	date: props => ({
		color: dateDisplay.setDateColor(props.date),
	}),
}

const DateDisplay = ({ classes, date, onClick }) => (
	<div data-layout="row" data-layout-align="space-between center" className={classes.date}>
		<div>
			{dateDisplay.setDateText(date)}
		</div>
		<i
			onClick={onClick}
			className="material-icons"
		>
			calendar_today
		</i>
	</div>
)

DateDisplay.propTypes = {
	classes: PropTypes.object.isRequired,
	date: PropTypes.string,
	onClick: PropTypes.func,
}

export default withStyles(styles)(DateDisplay)
