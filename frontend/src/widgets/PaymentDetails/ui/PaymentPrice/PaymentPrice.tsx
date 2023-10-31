import { Space } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getHotelFilters } from '../../../../entities/Hotel'
import { useGetCurrentRoom } from '../../../../entities/Room'
import s from './PaymentPrice.module.scss'

export const PaymentPrice = React.memo(() => {
    const filters = useSelector(getHotelFilters)
    const { id } = useParams()
    const { data } = useGetCurrentRoom(id ?? '')

    const taxes = (data?.price ?? 0) * 0.13
    const roomPrice = (filters.daysCount ?? 1) * (data?.price ?? 0)

    return (
        <div className={s.container}>
            <div className={s.header}>Price Details</div>
            <div className={s.info}>
                <Space className={s.period}>
                    <div>1 room X {filters.daysCount} nights</div>
                    <div>$ {data?.price}</div>
                </Space>
                <Space className={s.period}>
                    <div>Tax and service fees</div>
                    <div>$ {taxes}</div>
                </Space>
            </div>
            <Space className={s.priceWrapper}>
                <div>Total</div>
                <div className={s.price}>${roomPrice + taxes}</div>
            </Space>
        </div>
    )
})
