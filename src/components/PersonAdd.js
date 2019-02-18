import React,{Component} from 'react'

class PersonAdd extends Component {

constructor(props){
    super(props)
    this.state = {
        firstname:"", lastname:""
    }
}

nameChange =(e) => {
    const newState = {...this.state}
    newState[e.target.name] = e.target.value
    this.setState(newState)
}

render(){
    return(
        <div>
            <input type="text" name="firstname" value={this.state.firstname} onChange={this.nameChange}/>
            <input type="text" name="lastname" value={this.state.lastname} onChange={this.nameChange}/>
            <button onClick={() => this.props.onAddSave(this.state)}>Save</button>
            <button onClick={() => this.props.onAddCancel()}>Cancel</button>
        </div>
    )
}
}
export default PersonAdd