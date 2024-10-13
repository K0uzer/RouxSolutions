import { Action } from './../../node_modules/@remix-run/router/history'
import { createSlice } from '@reduxjs/toolkit'

import { LOCAL_STORAGE_KEYS } from './../constants/index'
import { dataFromLocalStorage } from '../functions'

const contentSlice = createSlice({
    name: 'content',
    initialState: {
        data: [],
    },

    reducers: {
        loadData: (state, action) => {
            state.data = action.payload
        },
    },
})

export const { loadData } = contentSlice.actions

export default contentSlice.reducer
