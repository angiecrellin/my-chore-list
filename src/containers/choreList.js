import { connect } from 'react-redux'
import choreListView from '../components/choreListView'
import { completeChore } from '../actions'

const mapStateToProps = (state) => {
  return {
    chores: state.chores
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    completeChore: (id) => dispatch(completeChore(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(choreListView)