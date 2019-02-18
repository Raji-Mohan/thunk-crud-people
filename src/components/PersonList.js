import React,{Component} from 'react'

class PersonList extends Component{
    componentDidMount =() => {
        this.props.peopleGet()
    }
    render(){
        return(
            <div>
               {this.props.people.map(person => {
                    return <li key={person.id} onClick={() => this.props.onSelect(person)}> {person.firstname} {person.lastname} </li>
               })}
               <button onClick={() => this.props.onAdd()}>Add Person</button>
            </div>
        )
    }
}
export  default PersonList