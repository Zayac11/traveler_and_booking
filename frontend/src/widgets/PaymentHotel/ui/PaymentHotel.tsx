import React from 'react'
import s from './PaymentHotel.module.scss'

interface PaymentHotelProps {
    className?: string
}

export const PaymentHotel = React.memo((props: PaymentHotelProps) => {
    const { className } = props

    return (
        <div className={s.container}>
            PaymentHotel
        </div>
    )
})
