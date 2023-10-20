import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { ServerFieldError } from '../../types/ErrorTypes'

export const getFieldValidationStatus = (
    serverError: FetchBaseQueryError | SerializedError | undefined,
    field: string
): 'error' | undefined => {
    if (serverError && 'data' in serverError) {
        const { errors } = serverError.data as { errors: ServerFieldError[]; message: string }
        const error = errors.find((item: ServerFieldError) => item.path === field)
        if (error) return 'error'
        return undefined
    }
    return undefined
}
