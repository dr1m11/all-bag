import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    city: '',
    orderMethod: 0
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        changeOrderMethod: (state, {payload}) => {
            state.orderMethod = payload
        }
    }
})

export const {changeOrderMethod} = orderSlice.actions

export default orderSlice.reducer