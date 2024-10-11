import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from './components/layout/RootLayout.tsx'

import './index.css'
import CardList from './components/Card/CardList.tsx'
import Form from './components/Profile/Form.tsx'

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            { path: '/', element: <CardList /> },
            { path: '/profile', element: <Form /> },
        ],
    },
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />,
)
