import { EnvironmentFilled, EnvironmentOutlined } from '@ant-design/icons'
import { Col, Row, Space } from 'antd'
import React from 'react'
import { Hotel } from '../../../../entities/Hotel'
import { FacilityItem } from '../../../../shared/ui/FacilityItem/FacilityItem'
import { HotelRate } from '../../../../shared/ui/HotelRate/ui/HotelRate'
import s from './HotelInfo.module.scss'
import { HotelMap } from './HotelMap/HotelMap'

interface HotelInfoProps {
    hotel: Hotel
}

export const HotelInfo = React.memo((props: HotelInfoProps) => {
    const { hotel } = props

    return (
        <Col xxl={{ offset: 4, span: 16 }} offset={2} span={20}>
            <Row gutter={16}>
                <Col span={16}>
                    <h2 className={s.title}>{hotel.name}</h2>
                    <HotelRate className={s.rate} rate={hotel.rate} reviewsNumber={hotel.reviews_number} />
                    <Space align='start' size={6} style={{ display: 'flex' }} className={s.address}>
                        <EnvironmentOutlined className={s.addressIcon} />
                        {hotel.address}
                    </Space>
                    <div className={s.overview}>
                        <div className={s.overviewText}>
                            <h3 className={s.overviewTitle}>Overview</h3>
                            <div className={s.description}>{hotel.overview}</div>
                        </div>
                        <div className={s.overviewText}>
                            <h3 className={s.overviewTitle}>Top facilities</h3>
                            <Row gutter={12}>
                                {hotel.facilities.map((item, index) => (
                                    <Col key={item} style={{ marginBottom: 8 }} span={index % 2 === 0 ? 10 : 14}>
                                        <FacilityItem name={item} />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col span={8}>
                    {hotel.coordinates && <HotelMap coordinates={hotel.coordinates} />}
                    <h3 className={s.title}>Explore the area</h3>
                    {hotel.attractions.length > 0 &&
                        hotel.attractions.map((item) => (
                            <Space align='start' key={item.name} className={s.attractionItem}>
                                <Space size={6} align='start'>
                                    <EnvironmentFilled />
                                    {item.name}
                                </Space>
                                <span>{item.drive_time} min drive</span>
                            </Space>
                        ))}
                </Col>
            </Row>
        </Col>
    )
})
