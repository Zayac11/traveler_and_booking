import { Rate, Space } from 'antd'
import cl from 'classnames'
import React from 'react'
import s from './HotelRate.module.scss'

interface HotelRateProps {
    className?: string
    rate: number
    reviewsNumber: number
}

export const HotelRate = React.memo((props: HotelRateProps) => {
    const { className, rate, reviewsNumber } = props

    return (
        <Space className={cl(s.rate, className)}>
            <Rate disabled allowHalf defaultValue={rate} />
            <span>
                {' '}
                {rate} ({reviewsNumber} reviews)
            </span>
        </Space>
    )
})
