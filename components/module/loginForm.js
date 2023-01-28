import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { login } from '../../pages/api/auth'
import Button from '../base/button'
import { validateLogin } from '../../utils/validation'
import { Typography } from '@mui/material'
import Input from '../base/input'
import swal from 'sweetalert'

const LoginForm = () => {
    const router = useRouter()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formErrors, setFormErrors] = useState({})

    const handleChange = (e) => {
        const target = e.target

        if (target.name === "email") {
            setEmail(target.value)
        } else if (target.name === "password") {
            setPassword(target.value)
        }
    }

    const handleLogin = async (e) => {
        let errorDataForms = {}
        let formData = new FormData()
        const data = {
            email, password
        }

        errorDataForms = validateLogin(data)
        if (Object.keys(errorDataForms).length > 0) {
            setFormErrors(errorDataForms)
            swal({
                title: "error",
                text: 'Error while logging in, please check the fields!',
                icon: "error",
                timer: 3000
            });
            return
        }

        formData.append('email', data.email)
        formData.append('password', data.password)

        try {
            const response = await login(formData)
            
            const data = response.data.data
            if (data) {
                const token = `Bearer ${data.token}`
                localStorage.setItem('authToken', token)
                router.push('/')
            }

            swal({
                title: response.data.data ? "Success" : "Warning",
                text: `${response.data.message}`,
                icon: response.data.data ? "success" : "error",
                timer: 3000
            });
        } catch (error) {
            console.log(error);
            swal({
                title: "error",
                text: 'Error while logging in, please check the fields!',
                icon: "error",
                timer: 2000
            });
        }
    }

    return (
        <>
            <Typography variant="h5">
                Login
            </Typography>
            <Input
                label="Email Address"
                name="email"
                placeholder="Ex: example@gmail.com"
                style={{
                    width: 350
                }}
                onChange={(e) => handleChange(e)}
                errors={formErrors}
            />
            <Input
                label="Password"
                name="password"
                type="password"
                placeholder="Ex: example@gmail.com"
                style={{
                    width: 350
                }}
                onChange={(e) => handleChange(e)}
                errors={formErrors}
            />
            <Button
                onClick={() => handleLogin()}
            >
                Login
            </Button>
        </>
    )
}

export default LoginForm