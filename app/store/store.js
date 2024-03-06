import {combineReducers, configureStore} from "@reduxjs/toolkit";
import orderReducer from './orderSlice'


const reducers = combineReducers({orderReducer})
const store =  () => {
    return configureStore({
        reducer: {
            root: reducers
        }
    })
}

export default store