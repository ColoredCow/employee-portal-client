import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Login from './Login'
import { AllTheProviders } from 'utils/test-utils'

afterEach(cleanup)

test('should take a snapshot', () => {
  const { getByTestId } = render(
    <AllTheProviders>
      <Login />
    </AllTheProviders>
  )

  expect(getByTestId('login-button')).toHaveTextContent('Sign in')
})
