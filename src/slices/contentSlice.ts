import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getDataFromServer } from '../api'
import { INITIAL_ITEM_DATA } from '../constants'

import { DataFromServerTypes } from '../types'

interface ContentState {
    data: DataFromServerTypes[]
    itemData: DataFromServerTypes
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState: ContentState = {
    data: [],
    itemData: INITIAL_ITEM_DATA,
    status: 'idle',
    error: null,
}

export const fetchData = createAsyncThunk<DataFromServerTypes[]>(
    'content/fetchData',
    async () => {
        const response = await getDataFromServer()
        return response
    },
)

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        changeContent: (builder, action) => {
            builder.data = action.payload
        },
        changeItemData: (builder, action) => {
            builder.itemData = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state: { status: string }) => {
                state.status = 'loading'
            })
            .addCase(
                fetchData.fulfilled,
                (
                    state: { status: string; data: DataFromServerTypes[] },
                    action: PayloadAction<DataFromServerTypes[]>,
                ) => {
                    state.status = 'succeeded'
                    state.data = action.payload
                },
            )
            .addCase(
                fetchData.rejected,
                (
                    state: { status: string; error: any },
                    action: { error: { message: any } },
                ) => {
                    state.status = 'failed'
                    state.error = action.error.message
                },
            )
    },
})

export const { changeContent, changeItemData } = contentSlice.actions

export default contentSlice.reducer
