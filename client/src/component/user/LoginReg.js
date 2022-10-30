import React from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const LoginReg = ({setTitle, setUser}) => {
    setTitle("Login/Register")
    return (
        <>
        <RegisterForm setUser={setUser}/>
        <LoginForm setUser={setUser}/>
        </>
    )
}

export default LoginReg