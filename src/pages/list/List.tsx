import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const List: React.FC = () => {
  const navigate = useNavigate()
  const [usersData, setUsersData] = useState<string>('') // specify string as the type

  const navigateToLogin = (): void => {
    navigate('/login')
  }

  const fetchData = async (): Promise<void> => {
    // specify Promise<void> as the return type
    try {
      const response = await axios.get('http://localhost:8000/get-users', {
        withCredentials: true
      })
      setUsersData(JSON.stringify(response.data))
    } catch (error) {
      console.error('An error occurred during the Axios request:', error)
      navigateToLogin()
    }
  }

  useEffect(() => {
    const verifyToken = async (): Promise<void> => {
      try {
        const response = await axios.post(
          'http://localhost:8000/verify-token',
          {},
          {
            withCredentials: true
          }
        )
        console.log(response)
      } catch (error) {
        console.error('An error occurred during the Axios request:', error)
        navigateToLogin()
      }
    }

    fetchData()
    verifyToken()
  }, [])

  return <>{usersData}</>
}

export default List
