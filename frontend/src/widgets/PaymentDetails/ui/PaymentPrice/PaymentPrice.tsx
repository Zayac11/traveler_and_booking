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

    const taxes = Number(((data?.price ?? 0) * 0.13 * (filters.rooms ?? 1)).toFixed(2))
    const roomPrice = (filters.daysCount ?? 1) * (data?.price ?? 0) * (filters.rooms ?? 1)

    return (
        <div className={s.container}>
            <div className={s.header}>Price Details</div>
            <div className={s.info}>
                <Space className={s.period}>
                    <div>
                        {filters.rooms ?? 1} room X {filters.daysCount} nights
                    </div>
                    <div>$ {(data?.price ?? 1) * (filters.rooms ?? 1)}</div>
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
