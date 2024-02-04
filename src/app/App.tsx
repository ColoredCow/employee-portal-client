import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import List from '../pages/list/List'
import ForgotPassword from '../pages/forgot-password/ForgotPassword'

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
