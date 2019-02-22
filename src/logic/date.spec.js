import * as date from './date'
import moment from 'moment'
import conf from '../constants/css'
import dateFormat from '../constants/date'

describe('Date Functions', () => {
	it('should return true if the argument is today', () => {
		expect(date.isToday(moment())).toBeTruthy()
	})
		it('should return false if the argument is not today', () => {
		expect(date.isToday(moment().add(1, 'day'))).toBeFalsy()
	})
	describe('IsTomorrow', () => {

		it('should return true if the argument is tomorrow', () => {
			expect(date.isTomorrow(moment().add(1, 'day'))).toBeTruthy()
		})
		it('should return false if the argument is not tomorrow', () => {
			expect(date.isTomorrow(moment())).toBeFalsy()
		})
	})
	describe('IsYesterday', () => {

		it('should return true if the argument is yesterday', () => {
			expect(date.isYesterday(moment().subtract(1, 'day'))).toBeTruthy()
		})
		it('should return false if the argument is not yesterday', () => {
			expect(date.isTomorrow(moment())).toBeFalsy()
		})
	})
	describe('IsPast', () => {
		it('should return true if the argument is in the past', () => {
			expect(date.isPast(moment().subtract(1, 'day'))).toBeTruthy()
			expect(date.isPast(moment().subtract(100, 'day'))).toBeTruthy()
		})
		it('should return false if the argument is not in the past', () => {
			expect(date.isPast(moment())).toBeFalsy()
			expect(date.isPast(moment().add(1, 'day'))).toBeFalsy()
		})
	})
	describe('Set Date Color', () => {
		it('should return the correct color depending on the given Date', () => {
			expect(date.setDateColor(moment().subtract(1, 'day'))).toEqual(conf.red)
			expect(date.setDateColor(moment().subtract(100, 'day'))).toEqual(conf.red)
			expect(date.setDateColor(moment())).toEqual(conf.orange)
			expect(date.setDateColor(moment().add(1, 'day'))).toEqual(conf.yellow)
			expect(date.setDateColor(moment().add(100, 'day'))).toEqual(conf.black)
		})
	})
	describe('Set Date Text', () => {
		it('should return the correct text depending on the given Date', () => {
			expect(date.setDateText(moment().subtract(1, 'day'))).toEqual('Yesterday')
			expect(date.setDateText(moment().subtract(100, 'day').format(dateFormat))).toEqual(moment().subtract(100, 'day').format(dateFormat))
			expect(date.setDateText(moment())).toEqual('Today')
			expect(date.setDateText(moment().add(1, 'day'))).toEqual('Tomorrow')
			expect(date.setDateText(moment().add(100, 'day').format(dateFormat))).toEqual(moment().add(100, 'day').format(dateFormat))
		})
	})
})
