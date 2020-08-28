import {combineReducers} from 'redux'
import postReducer from './postReducer'
import modalReducer from './modalReducer'
import authReducer from './authReducer'

export default combineReducers({
    posts:postReducer,
    isModalOpen:modalReducer,
    auth: authReducer
})