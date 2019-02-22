import { connect } from 'react-redux'
import { toggleShowCompleted } from '../actions'
import HideComplete from '../components/HideComplete'

const mapStateToProps = state => ({
	showCompleted: state.visibilityFilter.showCompleted,
	visible: Boolean(state.todos.filter(t => t.completed).length),
})

const mapDispatchToProps = dispatch => ({
	onClick: () => dispatch(toggleShowCompleted()),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(HideComplete)
