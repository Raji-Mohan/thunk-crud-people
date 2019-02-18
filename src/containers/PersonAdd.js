import {connect} from 'react-redux'

import PersonAdd from '../components/PersonAdd'
import {personAddSave, personAddCancel} from '../actions/action'

const mapStateToProps = (state) => {
    return {
        view:state.view
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        onAddSave: (person) => dispatch(personAddSave(person)),
        onAddCancel: () => dispatch(personAddCancel())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PersonAdd)