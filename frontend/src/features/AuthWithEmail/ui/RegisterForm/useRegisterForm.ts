import { notification } from 'antd'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterSchema, useDoRegister } from '../..'

export const useRegisterForm = () => {
    const [doRegister, { isLoading, error: serverError }] = useDoRegister()
    const navigate = useNavigate()
    console.log(serverError)

    const onSubmit = useCallback(
        (data: RegisterSchema) => {
            doRegister(data).then((data) => {
                if (!('error' in data)) {
                    notification.open({
                        message: 'Success',
                        description: 'Registered successfully',
                        type: 'success',
                    })
                    navigate('/login')
                }
            })
        },
        [doRegister, navigate]
    )

    return {
        onSubmit,
        isLoading,
        serverError,
    }
}
