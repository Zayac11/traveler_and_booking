import { EnvironmentFilled, UserOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, Row } from 'antd'
import React from 'react'
import s from './SearchBar.module.scss'

export interface SearchBarSchema {
    city: string
    dateIn: string
    dateOut: string
    guestsCount: number
}

interface SearchBarProps {
    onSearch: (data: SearchBarSchema) => void
}

export const SearchBar = React.memo((props: SearchBarProps) => {
    const { onSearch } = props

    return (
        <Form onFinish={onSearch}>
            <Row gutter={12} data-testid='MainSearchBar' className={s.container}>
                <Col span={6}>
                    <Form.Item style={{ margin: 0 }} name='city'>
                        <Input placeholder='Where are you going?' prefix={<EnvironmentFilled style={{ color: '#1B1F2D' }} />} />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item style={{ margin: 0 }} name='dateIn'>
                        <DatePicker placeholder='Check in date' />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item style={{ margin: 0 }} name='dateOut'>
                        <DatePicker placeholder='Check out date' />
                    </Form.Item>
                </Col>
                <Col span={5}>
                    <Form.Item style={{ margin: 0 }} name='guestsCount'>
                        <Input min={1} type='number' placeholder='Guests' prefix={<UserOutlined style={{ color: '#1B1F2D' }} />} />
                    </Form.Item>
                </Col>
                <Col span={5}>
                    <Button type='primary' className={s.button} htmlType='submit'>
                        Search
                    </Button>
                </Col>
            </Row>
        </Form>
    )
})
