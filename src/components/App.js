import React, { useState } from 'react'
import withStyles from 'react-jss'
import FilterLink from '../containers/FilterLink'
import Header from './Header'
import { VisibilityFilters, Sorts } from '../constants/filters'
import conf from '../constants/css'
import VisibleTodoList from '../containers/VisibleTodoList'


const styles = {
	app: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		'alignItems': 'center',
	},

}

const App = ({classes}) => {
	return (
		<div className={classes.app}>
			<Header />
			<VisibleTodoList
				title="New Tasks"
				filter={VisibilityFilters.SHOW_NEW}
			/>
			<VisibleTodoList
				title="Unfinished Tasks"
				filter={VisibilityFilters.SHOW_ACTIVE}
				sortable
				completable

			/>
			<FilterLink />
			<VisibleTodoList
				title="Completed Tasks"
				filter={VisibilityFilters.SHOW_COMPLETED}
				hidden
				completable
			/>
		</div>
	)
}

export default withStyles(styles)(App)
