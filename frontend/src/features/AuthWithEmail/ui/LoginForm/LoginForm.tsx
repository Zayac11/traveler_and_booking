import { Button, Form, Input } from 'antd'
import { EmailRegex } from '../../../../shared/lib/hooks/helpers/Regex'
import s from './LoginForm.module.scss'
import { useLoginForm } from './useLoginForm'

export const LoginForm = () => {
    const { isLoading, onSubmit, serverError } = useLoginForm({ onSuccessAuth: () => {} })

    return (
        <Form onFinish={onSubmit} layout='vertical'>
            <Form.Item
                name='email'
                label='Email'
                rules={[
                    { required: true, message: 'Email is required' },
                    { pattern: EmailRegex, message: 'Not valid email' },
                ]}
            >
                <Input className={s.input} type='text' />
            </Form.Item>
            <Form.Item name='password' label='Password' rules={[{ required: true, message: 'Password is required' }]}>
                <Input className={s.input} type='password' />
            </Form.Item>
            <Button type='primary' disabled={isLoading} loading={isLoading} htmlType='submit'>
                Continue with email
            </Button>
        </Form>
    )
}
