export const peopleGet = () =>{
    return async (dispatch) => {
        const response = await fetch('http://localhost:8080/people')
        const people = await response.json()
        dispatch(peopleSet(people))
    }
}

export const peopleSet = (people) => {
    return{
        type:'PEOPLE_SET',
        people:people
    }
}

export const personSelect = (person) => {
    return{
        type:'PERSON_SELECT',
        person:person
    }
}

export const personSave = (person) => {
    return async (dispatch) => {await fetch("http://localhost:8080/updateperson",
    {method:'PUT', headers:{ 'Accept':'application/json','Content-Type':'application/json'}, body:JSON.stringify(person)}
    )
    dispatch(peopleGet())
    dispatch(showPeopleList())
    }}

export const showPeopleList = () => {
    return{
        type:'SHOW_PEOPLE_LIST'
    }
}

export const personDelete = (id) => {
    return async (dispatch) => {
        await fetch(`http://localhost:8080/deleteperson?id=${id}`,
        {method:'DELETE'})
        dispatch(peopleGet())
        dispatch(showPeopleList())
    }
}

export const personCancel =() => {
    return{
        type:'SHOW_PEOPLE_LIST'
    }
}

export const personAdd = () => {
    return{
        type:'PERSON_ADD'
    }
}

export const personAddSave = (person) => {
    return async (dispatch) => {
        await fetch("http://localhost:8080/addperson",
        {method:'POST', headers:{'Accept':'application/json', 'Content-Type':'application/json'}, body: JSON.stringify(person)})
        dispatch(peopleGet())
        dispatch(showPeopleList())
    }
}

export const personAddCancel = () => {
    return{
        type:'SHOW_PEOPLE_LIST'
    }
}