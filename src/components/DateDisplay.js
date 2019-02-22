import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import * as dateDisplay from '../logic/date'

const styles = {
	date: (props) => ({
		color: dateDisplay.setDateColor(props.date),
	}),
}

const DateDisplay = ({ classes, date, id, onClick }) => (
	<div data-layout="row" data-layout-align="space-between center" className={classes.date}>
		<div>
		{dateDisplay.setDateText(date)}
		</div>
		<i onClick={onClick} className="material-icons"> calendar_today </i>
	</div>
)

DateDisplay.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default withStyles(styles)(DateDisplay)
