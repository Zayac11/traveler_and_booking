import { useCallback, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginSchema, useDoAuth } from '../..'

type LoginTypes = keyof LoginSchema
type LoginFields = Record<LoginTypes, string>

interface useLoginFormProps {
    onSuccessAuth?: () => void
}

export const useLoginForm = ({ onSuccessAuth }: useLoginFormProps) => {
    const [doAuth, { isLoading, error: serverError }] = useDoAuth()

    const {
        register,
        formState: { errors },
        handleSubmit,
        setError,
        clearErrors,
    } = useForm<Record<LoginTypes | 'common', string>>()

    useEffect(() => {
        if (serverError) {
            console.log(serverError)
            setError('common', {
                message: 'serverError',
                type: 'serverError',
            })
        }
    }, [serverError, setError])

    const onLoginClick: SubmitHandler<LoginFields> = useCallback(
        (data: LoginFields) => {
            doAuth(data).then((data) => {
                if (onSuccessAuth && !('errors' in data)) {
                    onSuccessAuth()
                }
            })
        },
        [doAuth, onSuccessAuth]
    )

    const onSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            console.log('123')
            e.preventDefault()
            clearErrors('common')
            handleSubmit(onLoginClick)()
        },
        [clearErrors, handleSubmit, onLoginClick]
    )

    return {
        onSubmit,
        register,
        errors,
        isLoading,
    }
}
