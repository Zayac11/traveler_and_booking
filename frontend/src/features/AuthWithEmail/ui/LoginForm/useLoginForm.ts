import { useCallback } from 'react'
import { LoginSchema, useDoAuth } from '../..'

interface useLoginFormProps {
    onSuccessAuth?: () => void
}

export const useLoginForm = ({ onSuccessAuth }: useLoginFormProps) => {
    const [doAuth, { isLoading, error: serverError }] = useDoAuth()

    const onSubmit = useCallback(
        (data: LoginSchema) => {
            doAuth(data).then((data) => {
                if (onSuccessAuth && !('error' in data)) {
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
