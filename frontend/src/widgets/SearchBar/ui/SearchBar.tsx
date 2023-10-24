import { EnvironmentFilled, UserOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, Popover, Row } from 'antd'
import dayjs from 'dayjs'
import React, { useCallback, useState } from 'react'
import { GuestsPopover } from './GuestsPopover/GuestsPopover'
import s from './SearchBar.module.scss'

export interface SearchBarSchema {
    city: string
    dateIn: string
    dateOut: string
    guestsCount: string
    guests: number
    rooms: number
}

interface SearchBarProps {
    onSearch: (data: SearchBarSchema) => void
    initialGuests?: number
    initialRooms?: number
    initialCity?: string
    initialDateIn?: string
    initialDateOut?: string
}

export const SearchBar = React.memo((props: SearchBarProps) => {
    const { onSearch, initialGuests = 1, initialRooms = 1, initialCity = '', initialDateIn = '', initialDateOut = '' } = props
    const [guests, setGuests] = useState(1)
    const [rooms, setRooms] = useState(1)
    const [guestsCount, setGuestsCount] = useState(`Guests ${initialGuests}, rooms ${initialRooms}`)
    const [form] = Form.useForm()
    console.log(initialDateIn)
    console.log(dayjs(initialDateIn))
    const handleGuestsChange = useCallback(
        (guests: number, rooms: number) => {
            const newString = `Guests ${guests}, rooms ${rooms}`
            setGuests(guests)
            setRooms(rooms)
            setGuestsCount(newString)
            form.setFieldValue('guestsCount', newString)
        },
        [form]
    )

    const handleSearch = (data: SearchBarSchema) => {
        onSearch({
            city: data.city,
            dateIn: data.dateIn,
            dateOut: data.dateOut,
            guestsCount: data.guestsCount,
            guests: guests,
            rooms: rooms,
        })
    }

    return (
        <Form form={form} onFinish={handleSearch}>
            <Row gutter={12} data-testid='MainSearchBar' className={s.container}>
                <Col span={6}>
                    <Form.Item initialValue={initialCity} style={{ margin: 0 }} name='city'>
                        <Input placeholder='Where are you going?' prefix={<EnvironmentFilled style={{ color: '#1B1F2D' }} />} />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item initialValue={initialDateIn ? dayjs(initialDateIn) : undefined} style={{ margin: 0 }} name='dateIn'>
                        <DatePicker placeholder='Check in date' />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item initialValue={initialDateOut ? dayjs(initialDateOut) : undefined} style={{ margin: 0 }} name='dateOut'>
                        <DatePicker placeholder='Check out date' />
                    </Form.Item>
                </Col>
                <Col span={5}>
                    <Form.Item initialValue={guestsCount} style={{ margin: 0 }} name='guestsCount'>
                        <Popover trigger='click' content={<GuestsPopover onChange={handleGuestsChange} />}>
                            <Input value={guestsCount} placeholder='Guests' prefix={<UserOutlined style={{ color: '#1B1F2D' }} />} />
                        </Popover>
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
