import { connect } from 'react-redux'
import ChoreListInfoView from '../components/choreListInfoView'

const mapStateToProps = (state) => {
  return {
    count: state.chores.length
  }
}

export default connect(mapStateToProps, null)(ChoreListInfoView)