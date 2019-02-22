const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: (state.length + 1),
					text: action.text,
					completed: false,
				},
			]
		case 'UPDATE_DATE':
			return state.map(todo => ((todo.id === action.id)
				? { ...todo, date: action.date }
				: todo))

		case 'TOGGLE_TODO':
			return state.map(todo => ((todo.id === action.id)
				? { ...todo, tempCompleted: !todo.tempCompleted }
				: todo))

		case 'SAVE_COMPLETED_STATUS':
			return state.map(todo => ({ ...todo, completed: todo.tempCompleted }))

		default:
			return state
	}
}

export default todos
