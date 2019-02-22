import React, { useState } from 'react'
import withStyle from 'react-jss'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import dateFormat from '../constants/date'
import { updateDate } from '../actions'
import DateDisplay from '../components/DateDisplay'


const SetDate = ({ dispatch, id, date }) => {
	const parseDate = (newDate) => {
		const dateToParse = moment(newDate)
		return dateToParse.format(dateFormat)
	}

	const today = new Date

	const handleChange = (newDate) => dispatch(updateDate(id, parseDate(newDate)))
	return (
		<DatePicker
	        onChange={handleChange}
	        selected={moment((date || today), date ? dateFormat : '').toDate()}
	        customInput={<DateDisplay id={id} date={date}/>}
	        minDate={today}
	    />

	)
}

export default connect()(SetDate)
