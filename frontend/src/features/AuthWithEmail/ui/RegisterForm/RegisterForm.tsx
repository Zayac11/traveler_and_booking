import { Button, Form, Input } from 'antd'
import { EmailRegex } from '../../../../shared/lib/consts/Regex'
import { getFieldValidationMessage } from '../../../../shared/lib/hooks/helpers/getFieldValidationMessage/getFieldValidationMessage'
import { getFieldValidationStatus } from '../../../../shared/lib/hooks/helpers/getFieldValidationStatus/getFieldValidationStatus'
import s from './RegisterForm.module.scss'
import { useRegisterForm } from './useRegisterForm'

export const RegisterForm = () => {
    const { isLoading, onSubmit, serverError } = useRegisterForm()

    return (
        <Form onFinish={onSubmit} layout='vertical'>
            <Form.Item
                validateStatus={getFieldValidationStatus(serverError, 'username')}
                help={getFieldValidationMessage(serverError, 'username')}
                name='username'
                label='Username'
                rules={[{ required: true, message: 'Username is required' }]}
            >
                <Input className={s.input} type='text' />
            </Form.Item>
            <Form.Item
                name='email'
                label='Email'
                validateStatus={getFieldValidationStatus(serverError, 'email')}
                help={getFieldValidationMessage(serverError, 'email')}
                rules={[
                    { required: true, message: 'Email is required' },
                    { pattern: EmailRegex, message: 'Not valid email' },
                ]}
            >
                <Input className={s.input} type='email' />
            </Form.Item>
            <Form.Item
                validateStatus={getFieldValidationStatus(serverError, 'password')}
                help={getFieldValidationMessage(serverError, 'password')}
                name='password'
                label='Password'
                rules={[{ required: true, message: 'Password is required' }]}
            >
                <Input className={s.input} type='password' />
            </Form.Item>
            <Form.Item
                name='repeat_password'
                label='Confirm password'
                rules={[
                    { required: true, message: 'Confirmation is required' },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve()
                            }
                            return Promise.reject(new Error("Passwords doesn't match"))
                        },
                    }),
                ]}
            >
                <Input className={s.input} type='password' />
            </Form.Item>
            <Button type='primary' disabled={isLoading} loading={isLoading} htmlType='submit'>
                Sign up
            </Button>
        </Form>
    )
}
