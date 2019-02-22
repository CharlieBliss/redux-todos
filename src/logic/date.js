import moment from 'moment'
import dateFormat from '../constants/date'
import conf from '../constants/css'

export const isToday = date => moment(date, dateFormat).isSame(moment(), 'day')

export const isPast = date => moment(date, dateFormat).isBefore(moment(), 'day')

export const isTomorrow = date => moment(date, dateFormat).isSame(moment().add(1, 'day'), 'day')

export const isYesterday = date => moment(date, dateFormat).isSame(moment().subtract(1, 'day'), 'day')


export const setDateColor = (date) => {
	if (isPast(date)) {
		return conf.red
	}
	if (isToday(date)) {
		return conf.orange
	}
	if (isTomorrow(date)) {
		return conf.yellow
	}
	return conf.black
}

export const setDateText = (date) => {
	if (isYesterday(date)) {
		return 'Yesterday'
	}
	if (isPast(date)) {
		return date
	}
	if (isToday(date)) {
		return 'Today'
	}
	if (isTomorrow(date)) {
		return 'Tomorrow'
	}
	return date
}
