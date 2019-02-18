import {connect} from 'react-redux'
import PersonList from '../components/PersonList'
import {peopleGet, personSelect, personAdd } from '../actions/action'

const mapStateToProps =(state) => {
    return{
        people:state.people
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        peopleGet: () => dispatch(peopleGet()),
        onSelect: (person) => dispatch(personSelect(person)),
        onAdd:() => dispatch(personAdd())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonList)