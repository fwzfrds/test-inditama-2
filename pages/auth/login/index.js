import React from 'react'
import { Container } from '@mui/material'
import LoginForm from '@/components/module/loginForm'

const Login = () => {
  return (
    <>
      <Container>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <LoginForm />
        </div>
      </Container>
    </>
  )
}

export default Login