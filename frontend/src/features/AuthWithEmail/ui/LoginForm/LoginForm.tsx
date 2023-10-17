import { Button, Input } from 'antd'
import { ValidationRule } from 'react-hook-form'
import { EmailRegex } from '../../../../shared/lib/hooks/helpers/Regex'
import { useLoginForm } from './useLoginForm'

export const LoginForm = () => {
    const { errors, isLoading, onSubmit, register } = useLoginForm({ onSuccessAuth: () => {} })

    return (
        <form onSubmit={onSubmit}>
            <Input
                type='text'
                placeholder={'Email'}
                status={errors.email?.message ? 'error' : undefined}
                {...register('email', {
                    required: 'Email is required',
                    pattern: {
                        value: EmailRegex,
                        message: 'Incorrect Email',
                    } as ValidationRule<RegExp>,
                })}
            />
            <Input
                type='password'
                placeholder={'Password'}
                status={errors.password?.message ? 'error' : undefined}
                {...register('password', {
                    required: 'Password is required',
                })}
            />
            <Button type='primary' disabled={isLoading} loading={isLoading} htmlType='submit'>
                Continue with email
            </Button>
        </form>
    )
}
