let initialState = []

const postReducer = (state= initialState, action) =>{
    switch(action.type){
        case 'GET_ALL_EXP_VALUES':
            return [action.payload, ...state]
        default:
            return state
    }
}

export default postReducer