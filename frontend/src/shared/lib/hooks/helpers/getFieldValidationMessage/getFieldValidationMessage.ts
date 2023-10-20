import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { ServerFieldError } from '../../types/ErrorTypes'

export const getFieldValidationMessage = (
    serverError: FetchBaseQueryError | SerializedError | undefined,
    field: string
): string | undefined => {
    if (serverError && 'data' in serverError) {
        const data = serverError.data as { errors?: ServerFieldError[]; message: string }
        if ('errors' in data) {
            const { errors } = data
            const error = errors?.find((item: ServerFieldError) => item.path === field)
            if (error) return error.msg
        }
        return undefined
    }
    return undefined
}
