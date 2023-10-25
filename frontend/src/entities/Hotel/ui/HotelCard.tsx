import { Button, Card, Col, Rate, Row, Space } from 'antd'
import cl from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Hotel } from '..'
import s from './HotelCard.module.scss'

interface HotelCardProps extends Hotel {
    className?: string
    roomsCount: number
    daysCount: number
}

export const HotelCard = React.memo((props: HotelCardProps) => {
    const { className, roomsCount, daysCount, ...hotelItem } = props
    console.log(hotelItem)
    return (
        <Card className={cl(className, s.container)}>
            <Row gutter={24}>
                <Col span={9}>
                    <img className={s.image} src={hotelItem.image[0]} loading='lazy' alt={hotelItem.name} />
                </Col>
                <Col span={10}>
                    <div className={s.title}>{hotelItem.name}</div>
                    <Space className={s.rate}>
                        <Rate disabled allowHalf defaultValue={hotelItem.rate} />
                        <span>
                            {' '}
                            {hotelItem.rate} ({hotelItem.reviews_number} reviews)
                        </span>
                    </Space>
                    <div className={s.description}>{hotelItem.description}</div>
                    <NavLink to={'/hotel/' + hotelItem._id}>
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
