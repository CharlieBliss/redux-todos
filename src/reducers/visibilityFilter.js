import { INITIAL_STATE } from '../constants/filters'

const visibilityFilter = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'TOGGLE_SHOW_COMPLETED':
			return {
				...state,
				showCompleted: !state.showCompleted,
			}
		case 'SET_SORT':
			return {
				...state,
				sortBy: action.sort,
			}
		default:
			return state
	}
}

export default visibilityFilter
