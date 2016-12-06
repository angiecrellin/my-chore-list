import { connect } from 'react-redux'
import addChoreView from '../components/addChoreView'
import { addChore } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    addChore: (chore) => (
      dispatch(addChore(chore))
    )
  }
}

export default connect(null, mapDispatchToProps)(addChoreView)