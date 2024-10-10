import React from 'react'

import ContentContainer from './components/ContentContainer'
import Sidebar from './components/Sidebar'

import './App.css'

// function getDataFromServer(): any {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then((data) => data)
//         .then((response) => response.json())
// }
// getDataFromServer()
function App() {
    return (
        <div>
            <Sidebar />
            <ContentContainer />
        </div>
    )
}

export default App
