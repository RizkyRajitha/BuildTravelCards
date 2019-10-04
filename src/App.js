import React from 'react'
import '../src/index.css'
import Header from './components/Header'
import Trips from './components/Trips'
import Footer from './components/footer/footer'

function App() {
    return (
        <div className="App">
            <Header />
            <Trips />
            <Footer />
        </div>
    )
}

export default App
