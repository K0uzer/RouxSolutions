import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getDataFromServer } from '../api'

import { DataFromServerTypes } from '../types'

interface ContentState {
    data: DataFromServerTypes[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState: ContentState = {
    data: [],
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
    reducers: {},
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

export default contentSlice.reducer
