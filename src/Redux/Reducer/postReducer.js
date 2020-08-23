let initialState = []

const postReducer = (state= initialState, action) =>{
    switch(action.type){
        case 'GET_ALL_EXP_VALUES':
            return [...state, action.payload]
        default:
            return state
    }
}

export default postReducer