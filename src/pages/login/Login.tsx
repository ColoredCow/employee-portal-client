import Cookies from 'universal-cookie'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const navigateToHome = (): void => {
    navigate('/')
  }

  const handleForgotPasswordClick = (): void => {
    navigate('/forgot-password')
  }

  const login = (): void => {
    axios
      .post('http://localhost:8000/login', {
        username: email,
        password
      })
      .then((response) => {
        const cookies = new Cookies()
        console.log(response.data.access_token)
        cookies.set('access_token', response.data.access_token, {
          path: '/',
          maxAge: 60 * 60,
          httpOnly: false,
          secure: false // Set to true if using HTTPS
        })
        cookies.set('refresh_token', response.data.refresh_token, {
          path: '/',
          maxAge: 60 * 60 * 24,
          httpOnly: false,
          secure: false // Set to true if using HTTPS
        })
        navigateToHome()
      })
  }

  const loginViaGoogle = (credentials: any): void => {
    const idToken = credentials.credential

    axios
      .post(
        'http://localhost:8000/auth/google',
        {
          id_token: idToken
        },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      )
      .then((response) => {
        const data = response.data
        if (data.status === 'success') {
          // The authentication was successful, and the cookie has been set
          console.log('Authentication successful')
          // const cookies = new Cookies()
          // cookies.set('auth_cookie', response.data.auth_cookie, {
          //   path: '/',
          //   maxAge: 60*60,
          //   httpOnly: false,
          //   secure: false // Set to true if using HTTPS
          // });
          navigateToHome()
        } else {
          // There was an error during the authentication process
          console.log('Authentication error:', data.message)
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
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
        navigateToHome()
      })
      .catch((error) => {
        console.log('An error occurred during the Axios request:', error)
      })
  }, [])

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://coloredcow.com/wp-content/themes/ColoredCow/dist/img/logo.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    onClick={handleForgotPasswordClick}
                    className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={login}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            <div className="flex justify-center">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse)
                  loginViaGoogle(credentialResponse)
                }}
                onError={() => {
                  console.log('Login Failed')
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
