import { useCallback } from 'react'
import { LoginSchema, useDoAuth } from '../..'

interface useLoginFormProps {
    onSuccessAuth?: () => void
}

export const useLoginForm = ({ onSuccessAuth }: useLoginFormProps) => {
    const [doAuth, { isLoading, error: serverError }] = useDoAuth()
    console.log(serverError)

    const onSubmit = useCallback(
        (data: LoginSchema) => {
            console.log(data)
            doAuth(data).then((data) => {
                if (onSuccessAuth && !('errors' in data)) {
                    onSuccessAuth()
                }
            })
        },
        [doAuth, onSuccessAuth]
    )

    return {
        onSubmit,
        isLoading,
        serverError,
    }
}
