import React from 'react'
import { Provider } from 'react-redux'

import store from './store'

import ContentContainer from './components/ContentContainer'
import Sidebar from './components/Sidebar'

import './App.css'

function App() {
    return (
        <div className="wrapper">
            <Sidebar />
            <Provider store={store}>
                <ContentContainer />
            </Provider>
        </div>
    )
}

export default App
