import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../utils/auth-utils'

const Home: React.FC = () => {
  const navigate = useNavigate()

  const navigateToLogin = (): void => {
    navigate('/login')
  }

  const logoutUser = (): void => {
    logout()
    navigateToLogin()
  }

  useEffect(() => {
    axios
      .post(
        'http://localhost:8000/verify-token',
        {},
        {
          withCredentials: true
        }
      )
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log('An error occurred during the Axios request:', error)
        navigateToLogin()
      })
  }, [])

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="mx-auto">Hi You are successfully logged in</div>
      <div className="mt-10">
        <button
          onClick={logoutUser}
          className="flex w-min justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Home
