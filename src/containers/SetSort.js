import { connect } from 'react-redux'
import { setSort, saveCompletedStatus } from '../actions'
import Sort from '../components/Sort'

const mapStateToProps = state => ({
	showCompleted: state.visibilityFilter.sort,
})

const mapDispatchToProps = dispatch => ({
	onChange: (value) => {
		dispatch(setSort(value))
		dispatch(saveCompletedStatus())
	},
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Sort)
