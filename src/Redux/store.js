import {createStore, applyMiddleware} from 'redux'
import reducer from './Reducer/reducer'
import thunk from 'redux-thunk'
import {AsyncStorage} from 'react-native'
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
    key:'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, applyMiddleware(thunk))

let persistor = persistStore(store)

export {store, persistor}