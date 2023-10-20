import { Button, Form, Input } from 'antd'
import { EmailRegex } from '../../../../shared/lib/consts/Regex'
import { getFieldValidationMessage } from '../../../../shared/lib/hooks/helpers/getFieldValidationMessage/getFieldValidationMessage'
import { getFieldValidationStatus } from '../../../../shared/lib/hooks/helpers/getFieldValidationStatus/getFieldValidationStatus'
import s from './LoginForm.module.scss'
import { useLoginForm } from './useLoginForm'

export const LoginForm = () => {
    const { isLoading, onSubmit, serverError } = useLoginForm({ onSuccessAuth: () => {} })

    return (
        <Form onFinish={onSubmit} layout='vertical'>
            <Form.Item
                validateStatus={getFieldValidationStatus(serverError, 'email')}
                help={getFieldValidationMessage(serverError, 'email')}
                name='email'
                label='Email'
                rules={[
                    { required: true, message: 'Email is required' },
                    { pattern: EmailRegex, message: 'Not valid email' },
                ]}
            >
                <Input className={s.input} type='text' />
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
            <Button type='primary' disabled={isLoading} loading={isLoading} htmlType='submit'>
                Continue with email
            </Button>
        </Form>
    )
}
