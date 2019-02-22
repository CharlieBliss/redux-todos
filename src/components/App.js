import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import FilterLink from '../containers/FilterLink'
import Header from './Header'
import { VisibilityFilters } from '../constants/filters'
import VisibleTodoList from '../containers/VisibleTodoList'


const styles = {
	app: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},

}

const App = ({ classes }) => (
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

App.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App)
