import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import dateFormat from '../constants/date'
import { updateDate } from '../actions'
import DateDisplay from '../components/DateDisplay'


const SetDate = ({ dispatch, id, date }) => {

	const parseDate = newDate => moment(newDate).format(dateFormat)

	const handleChange = newDate => dispatch(updateDate(id, parseDate(newDate)))
	return (
		<DatePicker
			onChange={handleChange}
			selected={moment(date || moment(), dateFormat).toDate()}
			customInput={<DateDisplay id={id} date={date} />}
			minDate={moment().toDate()}
		/>

	)
}

SetDate.propTypes = {
	id: PropTypes.number.isRequired,
	dispatch: PropTypes.func.isRequired,
	date: PropTypes.string,
}

export default connect()(SetDate)
