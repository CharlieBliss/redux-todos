import { connect } from 'react-redux'
import { setSort } from '../actions'
import Sort from '../components/Sort'

const mapStateToProps = state => ({
 	showCompleted: state.visibilityFilter.sort,
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch(setSort(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sort)
