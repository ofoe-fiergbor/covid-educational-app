let initialState = {
    posts :[],
    loading: true
}

const postReducer = (state= initialState, action) =>{
    switch(action.type){
        case 'GET_ALL_EXP_VALUES':
            return {
                posts: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default postReducer