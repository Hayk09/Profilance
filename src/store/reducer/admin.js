const  initialState = {
    name: Text,
}

export const adminReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADMIN': {
            console.log(action);
            return{...state, name: action.payload}
        }
        default: return state
    }
}

