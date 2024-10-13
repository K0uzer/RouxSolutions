import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'
import { applyMiddleware, createStore } from '@reduxjs/toolkit'

import RootLayout from './components/layout/RootLayout.tsx'
import store from './store.ts'

import CardList from './components/Card/CardList.tsx'
import Form from './components/Profile/Form.tsx'

import './index.css'

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            { path: '/', element: <CardList /> },
            { path: '/profile', element: <Form /> },
        ],
    },
])

const store = createStore(rootReducer, applyMiddleware(thunk))

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router} />,
    </Provider>,
)
