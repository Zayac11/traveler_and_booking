import { Col, Empty, Row } from 'antd'
import React from 'react'
import { Room } from '../../../../entities/Hotel'
import { RoomCard } from '../../../../widgets/RoomCard'
import { SearchBar } from '../../../../widgets/SearchBar'
import s from './HotelRooms.module.scss'

interface HotelRoomsProps {
    rooms: Room[]
}

export const HotelRooms = React.memo((props: HotelRoomsProps) => {
    const { rooms } = props

    return (
        <Col xxl={{ offset: 4, span: 16 }} offset={2} span={20}>
            <h2>Available rooms</h2>
            <SearchBar onSearch={() => {}} />
            <Row gutter={16} className={s.container}>
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
