import { ShoppingOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import React from 'react'
import { Room } from '../../../entities/Hotel'
import s from './RoomCard.module.scss'

interface RoomCardProps {
    room: Room
}

export const RoomCard = React.memo((props: RoomCardProps) => {
    const { room } = props

    return (
        <div className={s.container}>
            <img className={s.image} src={room.image} alt='room' />
            <div className={s.info}>
                <div className={s.name}>{room.name}</div>
                <div className={s.description}>{room.description}</div>
                <Space align='start' size={6} className={s.sleeps}>
                    <ShoppingOutlined />
                    <span>Sleeps {room.sleeps}</span>
                </Space>
                <Button className={s.button} type='primary'>
                    Reserve suite for ${room.price}
                </Button>
            </div>
        </div>
    )
})
