// test-utils.tsx

import React, { type ReactNode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

interface AllTheProvidersProps {
  children: ReactNode
}

const AllTheProviders: React.FC<AllTheProvidersProps> = ({ children }) => {
  return (
    <Router>
      <GoogleOAuthProvider clientId="537139475694-gpj5r9s0r774irbllnjobuvtgofjn4us.apps.googleusercontent.com">
        {children}
      </GoogleOAuthProvider>
    </Router>
  )
}

export { AllTheProviders }
