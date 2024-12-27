import React from 'react'
import FormContent from './FormContent'
import LogoContent from './LogoContent'

const LoginView = ({ handleLogin }) => {
const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
}


  return (
    <>
    <div className='login-container'>
        <div className='login-content'>
            <LogoContent/>
            <FormContent handleSubmit={handleSubmit}/>
        </div>
    </div>
    </>
  )
}

export default LoginView