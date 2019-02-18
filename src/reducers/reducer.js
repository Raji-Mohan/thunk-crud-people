import appState from '../appState'

const reducer = (state = appState, action) => {
    switch(action.type){
        case 'PEOPLE_SET' : return{...state, people:action.people}
        case 'PERSON_SELECT' : return {...state,view:'PERSON_EDIT',selectedPerson:action.person}
        case 'SHOW_PEOPLE_LIST': return{...state,view:'PERSON_LIST'}
        case 'PERSON_ADD': return {...state,view:'PERSON_ADD'}
        default: return state
    }
}

export default reducer
