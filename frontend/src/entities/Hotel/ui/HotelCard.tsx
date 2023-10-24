import { Button, Card, Col, Row } from 'antd'
import cl from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Hotel } from '..'
import s from './HotelCard.module.scss'

interface HotelCardProps extends Hotel {
    className?: string
}

export const HotelCard = React.memo((props: HotelCardProps) => {
    const { className, ...hotelItem } = props
    console.log(hotelItem)
    return (
        <Card className={cl(className, s.container)}>
            <Row gutter={24}>
                <Col span={9}>
                    <img className={s.image} src={hotelItem.image[0]} loading='lazy' alt={hotelItem.name} />
                </Col>
                <Col span={13}>
                    <div className={s.title}>{hotelItem.name}</div>
                    <div className={s.rate}>
                        {hotelItem.rate} ({hotelItem.reviews_number} reviews)
                    </div>
                    <div className={s.description}>{hotelItem.description}</div>
                    <NavLink to={'/hotel/' + hotelItem._id}>
                        <Button className={s.link} type='primary'>
                            See availability
                        </Button>
                    </NavLink>
                </Col>
                <Col span={2}>
                    <div></div>
                </Col>
            </Row>
        </Card>
    )
})
