export const addTodo = text => ({
	type: 'ADD_TODO',
	text,
})

export const toggleShowCompleted = () => ({
	type: 'TOGGLE_SHOW_COMPLETED',
})

export const saveCompletedStatus = () => ({
	type: 'SAVE_COMPLETED_STATUS',
})

export const setSort = sort => ({
	type: 'SET_SORT',
	sort,
})

export const toggleTodo = id => ({
	type: 'TOGGLE_TODO',
	id,
})

export const updateDate = (id, date) => ({
	type: 'UPDATE_DATE',
	id,
	date,
})
