import todos from './todos'

describe('todos reducer', () => {
	it('should handle initial state', () => {
		expect(
			todos(undefined, {}),
		).toEqual([])
	})

	it('should handle ADD_TODO', () => {
		expect(
			todos([], {
				type: 'ADD_TODO',
				text: 'Run the tests',
			}),
		).toEqual([
			{
				text: 'Run the tests',
				completed: false,
				id: 1,
			},
		])

		expect(
			todos([
				{
					text: 'Run the tests',
					completed: false,
					id: 1,
				},
			], {
				type: 'ADD_TODO',
				text: 'Use Redux',
			}),
		).toEqual([
			{
				text: 'Run the tests',
				completed: false,
				id: 1,
			}, {
				text: 'Use Redux',
				completed: false,
				id: 2,
			},
		])

		expect(
			todos([
				{
					text: 'Run the tests',
					completed: false,
					id: 1,
				}, {
					text: 'Use Redux',
					completed: false,
					id: 2,
				},
			], {
				type: 'ADD_TODO',
				text: 'Fix the tests',
			}),
		).toEqual([
			{
				text: 'Run the tests',
				completed: false,
				id: 1,
			}, {
				text: 'Use Redux',
				completed: false,
				id: 2,
			}, {
				text: 'Fix the tests',
				completed: false,
				id: 3,
			},
		])
	})

	it('should handle TOGGLE_TODO', () => {
		expect(
			todos([
				{
					text: 'Run the tests',
					completed: false,
					id: 2,
				}, {
					text: 'Use Redux',
					completed: false,
					id: 1,
				},
			], {
				type: 'TOGGLE_TODO',
				id: 2,
			}),
		).toEqual([
			{
				text: 'Run the tests',
				completed: false,
				tempCompleted: true,
				id: 2,
			}, {
				text: 'Use Redux',
				completed: false,
				id: 1,
			},
		])
	})

	it('should handle SAVE_COMPLETED_STATUS', () => {
		expect(
			todos([
				{
					text: 'Run the tests',
					completed: false,
					tempCompleted: false,
					id: 2,
				}, {
					text: 'Use Redux',
					completed: false,
					tempCompleted: true,
					id: 1,
				},
			], {
				type: 'SAVE_COMPLETED_STATUS',
			}),
		).toEqual([
			{
				text: 'Run the tests',
				completed: false,
				tempCompleted: false,
				id: 2,
			}, {
				text: 'Use Redux',
				completed: true,
				tempCompleted: true,
				id: 1,
			},
		])
	})

})
