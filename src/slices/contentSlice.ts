import { createSlice } from '@reduxjs/toolkit'

import { TYPES_SORT_CONTENT } from './../constants/index'

const initialState = {}

const contentSlice = createSlice({
    name: 'content',
    initialState,

    reducers: {
        addData: (state) => {},
        updateData: (state) => {},
        removeData: (state) => {},
        sortData: (state, TYPES_SORT_CONTENT) => {},
    },
})

export const { addData, updateData, removeData, sortData } =
    contentSlice.actions

export default contentSlice.reducer
