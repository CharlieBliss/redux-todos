import * as actions from './index'

describe('todo actions', () => {
	it('addTodo should create ADD_TODO action', () => {
		expect(actions.addTodo('Use Redux')).toEqual({
			type: 'ADD_TODO',
			text: 'Use Redux'
		})
	})
	it('toggleShowCompleted should create TOGGLE_SHOW_COMPLETED action', () => {
		expect(actions.toggleShowCompleted()).toEqual({
			type: 'TOGGLE_SHOW_COMPLETED',
		})
	})
	it('setSort should create SET_SORT action', () => {
		expect(actions.setSort('date')).toEqual({
			type: 'SET_SORT',
			sort: 'date'
		})
	})
	it('toggleTodo should create TOGGLE_TODO action', () => {
		expect(actions.toggleTodo(1)).toEqual({
			type: 'TOGGLE_TODO',
			id: 1
		})
	})
	it('updateDate should create UPDATE_DATE action', () => {
		expect(actions.updateDate(1, '2 Feb')).toEqual({
			type: 'UPDATE_DATE',
			id: 1,
			date: '2 Feb'
		})
	})
})
