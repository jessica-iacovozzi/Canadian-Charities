import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import NotFound from './components/NotFound'

class App extends Component {
  render () {
    return <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route component={NotFound} />
      </Routes>
    </Router>
  }
}

export default App
