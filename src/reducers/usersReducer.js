

/*

action: { type: '', data }

*/

export default (state, action) => {

    switch(action.type) {
        case 'fetched':
            return action.data;
        case 'update': // userId, field, value
            return updateUserInNewState(state, action.userId, action.field, action.value);
        default:
            return state;
    }

}

function updateUserInNewState(state,  userId, field, value) {
    const itemToModifyIndex = state.findIndex((user) => user.id == userId);
    const modifiedObj = { ...state[itemToModifyIndex], [field]: value};

    return [
        ...state.slice(0, itemToModifyIndex), 
        modifiedObj, 
        ...state.slice(itemToModifyIndex + 1,)
    ]
}