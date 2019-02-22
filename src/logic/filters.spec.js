import { getVisibleTodos, sortTodos } from './filters'

const MOCK_TODO_LIST = [
	{
		id: 1,
		text: 'Rare',
		date: '2 Feb',
	},
	{
		id: 4,
		text: 'Medium Rare',
	},
	{
		id: 2,
		text: 'Medium',
		date: '28 Feb',
	},
	{
		id: 3,
		text: 'Well Done',
		date: '10 Mar',
		completed: true,
	},
]

const MOCK_DATE_SORTABLE_LIST = [
	{
		id: 1,
		text: 'Rare',
		date: '2 Feb',
	},
	{
		id: 3,
		text: 'Well Done',
		date: '10 Mar',
		completed: true,
	},
	{
		id: 2,
		text: 'Medium',
		date: '28 Feb',
	},
]

const MOCK_ALPHA_SORTED_LIST = [
	{
		id: 2,
		text: 'Medium',
		date: '28 Feb',
	},
	{
		id: 4,
		text: 'Medium Rare',
	},
	{
		id: 1,
		text: 'Rare',
		date: '2 Feb',
	},
	{
		id: 3,
		text: 'Well Done',
		date: '10 Mar',
		completed: true,
	},
]

const MOCK_DATE_SORTED_LIST =	[
	{
		id: 1,
		text: 'Rare',
		date: '2 Feb',
	},
	{
		id: 2,
		text: 'Medium',
		date: '28 Feb',
	},
	{
		id: 3,
		text: 'Well Done',
		date: '10 Mar',
		completed: true,
	},
]

const MOCK_ONLY_COMPLETED_LIST = [
	{
		id: 3,
		text: 'Well Done',
		date: '10 Mar',
		completed: true,
	},
]

const MOCK_ONLY_NEW_LIST = [
	{
		id: 4,
		text: 'Medium Rare',
	}
]

const MOCK_ONLY_ACTIVE_LIST = [
	{
		id: 1,
		text: 'Rare',
		date: '2 Feb',
	},
	{
		id: 2,
		text: 'Medium',
		date: '28 Feb',
	},
]

const MOCK_ACTIVE_SORTED = [
	{
		id: 2,
		text: 'Medium',
		date: '28 Feb',
	},
	{
		id: 1,
		text: 'Rare',
		date: '2 Feb',
	},
]

describe('Filters and Sorts', () => {
	it('should sort by text alphabetically', () => {
		expect(sortTodos(MOCK_TODO_LIST, 'name')).toEqual(MOCK_ALPHA_SORTED_LIST)
	})
	it('should sort by text reverse alphabetically', () => {
		expect(sortTodos(MOCK_TODO_LIST, '-name')).toEqual(MOCK_ALPHA_SORTED_LIST.reverse())
	})
	it('should sort by date', () => {
		expect(sortTodos(MOCK_DATE_SORTABLE_LIST, 'date')).toEqual(MOCK_DATE_SORTED_LIST)
	})
	it('should sort by reverse date', () => {
		expect(sortTodos(MOCK_DATE_SORTABLE_LIST, '-date')).toEqual(MOCK_DATE_SORTED_LIST.reverse())
	})
	it('should filter by new', () => {
		expect(getVisibleTodos(MOCK_TODO_LIST, 'SHOW_NEW')).toEqual(MOCK_ONLY_NEW_LIST)
	})
	it('should filter by active', () => {
		expect(getVisibleTodos(MOCK_TODO_LIST, 'SHOW_ACTIVE')).toEqual(MOCK_ONLY_ACTIVE_LIST)
	})
	it('should filter by active', () => {
		expect(getVisibleTodos(MOCK_TODO_LIST, 'SHOW_COMPLETED')).toEqual(MOCK_ONLY_COMPLETED_LIST)
	})
	it('should filter AND sort', () => {
		expect(sortTodos(getVisibleTodos(MOCK_TODO_LIST, 'SHOW_ACTIVE'), '-date')).toEqual(MOCK_ACTIVE_SORTED)
	})
})
