import React from 'react'
import withStyles from 'react-jss'
import classnames from 'classnames'
import conf from '../constants/css'
import AddTodo from '../containers/AddTodo'


const styles = {
	header: {
		width: '80%',
		height: '180px',
		padding: '20px',
		fontSize: '40px',
		backgroundColor: conf.purple,
		color: 'white',
		marginBottom: '30px',
	},
	subHead: {
		color: 'white',
		fontSize: '20px',
	}
}
const Header = ({ classes }) => (
	<div
		data-flex
		data-layout="column"
		data-layout-align="space-around center"
		className={classes.header}
	>
		LISTICLES
		<div className={classes.subHead}>
			Marketing Content
		</div>
		<AddTodo />
	</div>
)

export default withStyles(styles)(Header)
