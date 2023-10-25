import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { InputNumber, Space } from 'antd'
import cl from 'classnames'
import React, { useState } from 'react'
import s from './GuestsPopover.module.scss'

interface GuestsPopoverProps {
    className?: string
    initialValues?: { guests: number; rooms: number }
    onChange: (guests: number, rooms: number) => void
}

export const GuestsPopover = React.memo((props: GuestsPopoverProps) => {
    const { className, onChange, initialValues } = props

    const [guests, setGuests] = useState(initialValues?.guests ?? 1)
    const [rooms, setRooms] = useState(initialValues?.rooms ?? 1)

    const handleGuestsChange = (value: number) => {
        setGuests(value)
        onChange(value, rooms)
    }
    const handleRoomsChange = (value: number) => {
        setRooms(value)
        onChange(guests, value)
    }

    return (
        <div className={cl(className, s.container)}>
            <Space className={s.row}>
                Guests{' '}
                <InputNumber
                    value={guests}
                    onChange={(value) => handleGuestsChange(value ?? 1)}
                    min={1}
                    addonBefore={<MinusOutlined onClick={() => handleGuestsChange(guests === 1 ? 1 : guests - 1)} />}
                    addonAfter={<PlusOutlined onClick={() => handleGuestsChange(guests + 1)} />}
                />
            </Space>
            <Space>
                Rooms{' '}
                <InputNumber
                    onChange={(value) => handleRoomsChange(value ?? 1)}
                    value={rooms}
                    min={1}
                    addonBefore={<MinusOutlined disabled={rooms === 1} onClick={() => handleRoomsChange(rooms === 1 ? 1 : rooms - 1)} />}
                    addonAfter={<PlusOutlined onClick={() => handleRoomsChange(rooms + 1)} />}
                />
            </Space>
        </div>
    )
})
