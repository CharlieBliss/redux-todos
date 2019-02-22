export const INITIAL_STATE = {
	showCompleted: false,
	sortBy: 'date',
}

export const VisibilityFilters = {
	SHOW_NEW: 'SHOW_NEW',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE',
}

export const Sorts = [
	{
		label: 'Date (Soonest)',
		value: 'date',
	},
	{
		label: 'Date (Farthest)',
		value: '-date',
	},
	{
		label: 'Name (A-Z)',
		value: 'name',
	},
	{
		label: 'Name (Z-A)',
		value: '-name',
	},
]
