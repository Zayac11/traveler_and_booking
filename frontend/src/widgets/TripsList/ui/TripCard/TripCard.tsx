import { Button, Card, Col, Row } from 'antd'
import React from 'react'
import { Trip } from '../../../../entities/Room'
import { HotelRate } from '../../../../shared/ui/HotelRate/ui/HotelRate'
import s from './TripCard.module.scss'

interface TripCardProps {
    trip: Trip
}

export const TripCard = React.memo((props: TripCardProps) => {
    const { trip } = props

    return (
        <Card className={s.container}>
            <Row gutter={24}>
                <Col span={9}>
                    <img className={s.image} src={trip.hotel.image[0]} loading='lazy' alt={trip.hotel.name} />
                </Col>
                <Col span={10}>
                    <div className={s.title}>{trip.hotel.name}</div>
                    <HotelRate className={s.rate} rate={trip.hotel.rate} reviewsNumber={trip.hotel.reviews_number} />
                    <div className={s.description}>Check in: {new Date(trip.check_in_date).toDateString()}</div>
                    <div className={s.description}>Check out: {new Date(trip.check_out_date).toDateString()}</div>

                    <Button className={s.button} type='primary'>
                        View trip details
                    </Button>
                </Col>
                <Col span={5} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <div className={s.period}>Total amount:</div>
                    <div className={s.price}>${trip.price}</div>
                </Col>
            </Row>
        </Card>
    )
})
