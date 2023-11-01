import React from 'react'
import s from './PaymentDetails.module.scss'
import { PaymentHotel } from './PaymentHotel/PaymentHotel'
import { PaymentPrice } from './PaymentPrice/PaymentPrice'

export const PaymentDetails = React.memo(() => (
    <div className={s.container}>
        <PaymentHotel />
        <PaymentPrice />
    </div>
))
