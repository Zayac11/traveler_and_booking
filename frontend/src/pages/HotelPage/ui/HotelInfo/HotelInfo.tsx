import { EnvironmentOutlined } from '@ant-design/icons'
import { Col, Divider, Row, Space } from 'antd'
import cl from 'classnames'
import React from 'react'
import { Hotel } from '../../../../entities/Hotel'
import { HotelRate } from '../../../../shared/ui/HotelRate/ui/HotelRate'
import s from './HotelInfo.module.scss'

interface HotelInfoProps {
    className?: string
    hotel: Hotel
}

export const HotelInfo = React.memo((props: HotelInfoProps) => {
    const { className, hotel } = props

    return (
        <div className={cl(className, s.container)}>
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
                            <Divider />
                            <div className={s.overviewText}>
                                <h3 className={s.overviewTitle}>Top facilities</h3>
                                {hotel.facilities.map((item) => (
                                    <div key={item}>{item}</div>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </Col>
        </div>
    )
})
