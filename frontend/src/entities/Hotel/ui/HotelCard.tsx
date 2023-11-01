import { Button, Card, Col, Row } from 'antd'
import cl from 'classnames'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Hotel, getHotelFilters } from '..'
import { HotelRate } from '../../../shared/ui/HotelRate/ui/HotelRate'
import s from './HotelCard.module.scss'

interface HotelCardProps extends Hotel {
    className?: string
    roomsCount: number
    daysCount: number
}

export const HotelCard = React.memo((props: HotelCardProps) => {
    const { className, roomsCount, daysCount, ...hotelItem } = props
    const filters = useSelector(getHotelFilters)
    return (
        <Card className={cl(className, s.container)}>
            <Row gutter={24}>
                <Col span={9}>
                    <img className={s.image} src={hotelItem.image[0]} loading='lazy' alt={hotelItem.name} />
                </Col>
                <Col span={10}>
                    <div className={s.title}>{hotelItem.name}</div>
                    <HotelRate className={s.rate} rate={hotelItem.rate} reviewsNumber={hotelItem.reviews_number} />
                    <div className={s.description}>{hotelItem.description}</div>

                    <NavLink
                        to={`/hotel/${hotelItem._id}?dateIn=${filters.checkInDate}&dateOut=${filters.checkOutDate}&rooms=${filters.rooms}`}
                    >
                        <Button className={s.link} type='primary'>
                            See availability
                        </Button>
                    </NavLink>
                </Col>
                <Col span={5} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <div className={s.period}>
                        {roomsCount} room, {daysCount} days
                    </div>
                    <div className={s.price}>${hotelItem.lowestPrice}</div>
                    <div className={s.taxes}>Includes taxes and fees</div>
                </Col>
            </Row>
        </Card>
    )
})
