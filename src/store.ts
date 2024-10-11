import { configureStore } from '@reduxjs/toolkit'
import contentReducer from './slices/index'

export default configureStore({
    reducer: {
        content: contentReducer,
    },
})
