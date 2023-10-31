import { Col, Empty, Row } from 'antd'
import React from 'react'
import { Room } from '../../../../entities/Room'
import { RoomCard } from '../../../../widgets/RoomCard'
import s from './HotelRooms.module.scss'

interface HotelRoomsProps {
    rooms: Room[]
}

export const HotelRooms = React.memo((props: HotelRoomsProps) => {
    const { rooms } = props

    return (
        <Col xxl={{ offset: 4, span: 16 }} offset={2} span={20} className={s.container}>
            <h2 className={s.title}>Available rooms</h2>
            <Row gutter={16}>
                {rooms.length > 0 ? (
                    rooms.map((roomItem) => (
                        <Col key={roomItem._id} span={8}>
                            <RoomCard room={roomItem} />
                        </Col>
                    ))
                ) : (
                    <Empty />
                )}
            </Row>
        </Col>
    )
})
