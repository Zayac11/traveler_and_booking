import { Col, Row } from 'antd'
import React from 'react'
import { PaymentHotel } from '../../../widgets/PaymentHotel'
import { PaymentMethod } from '../../../widgets/PaymentMethod'
import s from './PaymentPage.module.scss'

interface PaymentPageProps {
    className?: string
}

const PaymentPage = React.memo((props: PaymentPageProps) => {
    const { className } = props

    return (
        <div className={s.wrapper}>
            <Col xxl={{ offset: 4, span: 16 }} offset={2} span={20} className={s.container}>
                <Row gutter={30}>
                    <Col span={16}>
                        <PaymentMethod />
                    </Col>
                    <Col span={8}>
                        <PaymentHotel />
                    </Col>
                </Row>
            </Col>
        </div>
    )
})
export default PaymentPage
