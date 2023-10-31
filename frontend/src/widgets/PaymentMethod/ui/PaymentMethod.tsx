import { UserOutlined, WalletOutlined } from '@ant-design/icons'
import { Button, DatePicker, Form, Input, Space } from 'antd'
import cl from 'classnames'
import React from 'react'
import s from './PaymentMethod.module.scss'
import { PaymentTitle } from './PaymentTitle/PaymentTitle'

const monthFormat = 'MM/YYYY'

export const PaymentMethod = React.memo(() => {
    const onSubmit = (data: any) => {}

    return (
        <Form layout='vertical' onFinish={onSubmit}>
            <h2 className={s.title}>Secure your reservation</h2>
            <div className={s.card}>
                <PaymentTitle Icon={UserOutlined} title='Room 1' description='2 adults, 1 double bed and 1 twin bed, Non-smoking' />
                <div className={s.info}>
                    <Space className={s.space} size={20}>
                        <Form.Item
                            style={{ width: '100%' }}
                            name='first_name'
                            label='First name'
                            rules={[{ required: true, message: 'First name is required' }]}
                        >
                            <Input className={s.input} type='text' />
                        </Form.Item>
                        <Form.Item
                            style={{ width: '100%' }}
                            name='last_name'
                            label='Last name'
                            rules={[{ required: true, message: 'Last name is required' }]}
                        >
                            <Input className={s.input} type='text' />
                        </Form.Item>
                    </Space>
                    <Form.Item name='phone_number' label='Phone number' rules={[{ required: true, message: 'Phone number is required' }]}>
                        <Input className={s.input} type='tel' />
                    </Form.Item>
                </div>
            </div>
            <div className={s.card}>
                <PaymentTitle Icon={WalletOutlined} title='Payment options' />
                <div className={s.info}>
                    <Form.Item
                        style={{ width: '100%' }}
                        name='card_name'
                        label='Name on card'
                        rules={[{ required: true, message: 'Name is required' }]}
                    >
                        <Input className={s.input} type='text' />
                    </Form.Item>
                    <Form.Item
                        style={{ width: '100%' }}
                        name='card_number'
                        label='Card number'
                        rules={[{ required: true, message: 'Card number is required' }]}
                    >
                        <Input className={s.input} type='text' />
                    </Form.Item>
                    <Space size={20}>
                        <Form.Item
                            name='exp_date'
                            label='Expiration Date'
                            rules={[{ required: true, message: 'Expiration Date is required' }]}
                        >
                            <DatePicker format={monthFormat} picker='month' />
                        </Form.Item>
                        <Form.Item name='cvv' label='Security code' rules={[{ required: true, message: 'Security code is required' }]}>
                            <Input className={s.input} type='tel' />
                        </Form.Item>
                    </Space>
                </div>
            </div>
            <div className={s.card}>
                <PaymentTitle className={s.informationTitle} title='Important information about your booking' />
                <div className={cl(s.info, s.infoBooking)}>
                    <ol className={s.list}>
                        <li>
                            This rate is non-refundable. If you change or cancel your booking you will not get a refund or credit to use for
                            a future stay.
                        </li>
                        <li>Stay extensions will require a new reservation.</li>
                        <li>Front desk staff will greet guests on arrival</li>
                        <li>No refunds will be issued for late check-in or early check-out.</li>
                    </ol>
                    <div>
                        By clicking the button below, I acknowledge that I have reviewed the{' '}
                        <span className={s.link}>Privacy Statement</span> and have reviewed and accept the{' '}
                        <span className={s.link}>Rules and Restrictions</span> and <span className={s.link}>Terms of Use</span>.
                    </div>
                    <Button className={s.button} type='primary' htmlType='submit'>
                        Complete Booking
                    </Button>
                </div>
            </div>
        </Form>
    )
})
