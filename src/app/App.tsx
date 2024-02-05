import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from 'src/pages/Home/Home'
import Login from 'src/pages/Login/Login'
import List from 'src/pages/List/List'
import ForgotPassword from 'src/pages/ForgotPassword/ForgotPassword'

const App = (): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<List />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  )
}

export default App
