import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from 'pages/Home/Home'
import Login from 'pages/Login/Login'
import List from 'pages/List/List'
import ForgotPassword from 'pages/ForgotPassword/ForgotPassword'

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
