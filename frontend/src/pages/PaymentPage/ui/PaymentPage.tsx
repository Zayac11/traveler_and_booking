import { Col, Row } from 'antd'
import React, { useLayoutEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { hotelActions } from '../../../entities/Hotel'
import { getDaysBetweenDates } from '../../../shared/lib/helpers/getDaysBetweenDates/getDaysBetweenDates'
import { useAppDispatch } from '../../../shared/lib/hooks/redux'
import { PaymentDetails } from '../../../widgets/PaymentDetails'
import { PaymentMethod } from '../../../widgets/PaymentMethod'
import s from './PaymentPage.module.scss'

const PaymentPage = React.memo(() => {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useLayoutEffect(() => {
        const dateOut = searchParams.get('dateOut')
        const dateIn = searchParams.get('dateIn')
        if (!dateOut || !dateIn) {
            return navigate('/', { replace: true })
        }
        dispatch(hotelActions.setDaysCount(getDaysBetweenDates(dateIn, dateOut)))
        dispatch(hotelActions.setCheckInDate(dateIn))
        dispatch(hotelActions.setCheckOutDate(dateOut))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    return (
        <div className={s.wrapper}>
            <Col xxl={{ offset: 4, span: 16 }} offset={2} span={20} className={s.container}>
                <Row gutter={30}>
                    <Col span={16}>
                        <PaymentMethod />
                    </Col>
                    <Col span={8}>
                        <PaymentDetails />
                    </Col>
                </Row>
            </Col>
        </div>
    )
})
export default PaymentPage
