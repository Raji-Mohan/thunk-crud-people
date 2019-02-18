import React,{Component} from 'react'

import PersonList from '../containers/PersonList'
import PersonEdit from '../containers/PersonEdit'
import PersonAdd from '../containers/PersonAdd'

class App extends Component{

    currentView =() => {

        if(this.props.view === 'PERSON_LIST') return <PersonList />
        if(this.props.view === 'PERSON_EDIT') return <PersonEdit />
        if(this.props.view === 'PERSON_ADD') return <PersonAdd />
    }

    render(){
        return(
            <div>{this.currentView()}
            </div>
        )
    }
}
export default App