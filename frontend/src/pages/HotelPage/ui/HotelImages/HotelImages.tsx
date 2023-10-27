import { Col, Row, Space } from 'antd'
import React from 'react'
import s from './HotelImages.module.scss'

interface HotelImagesProps {
    images: string[]
}

export const HotelImages = React.memo((props: HotelImagesProps) => {
    const { images } = props

    return (
        <Row gutter={16} className={s.container}>
            <Col span={16}>
                <img className={s.image} src={images[0]} alt='hotel' />
            </Col>
            <Col span={8}>
                <Space direction='vertical' size={20}>
                    <img className={s.image} src={images[1]} alt='hotel' />
                    <img className={s.image} src={images[2]} alt='hotel' />
                </Space>
            </Col>
        </Row>
    )
})
