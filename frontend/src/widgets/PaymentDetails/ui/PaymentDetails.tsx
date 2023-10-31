import React from 'react'
import s from './PaymentDetails.module.scss'
import { PaymentHotel } from './PaymentHotel/PaymentHotel'
import { PaymentPrice } from './PaymentPrice/PaymentPrice'

interface PaymentDetailsProps {
    className?: string
}

export const PaymentDetails = React.memo((props: PaymentDetailsProps) => {
    const { className } = props

    return (
        <div className={s.container}>
            <PaymentHotel />
            <PaymentPrice roomPrice={228} />
        </div>
    )
})
