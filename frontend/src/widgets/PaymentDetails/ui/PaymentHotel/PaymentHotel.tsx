import cl from 'classnames'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCurrentRoom } from '../../../../entities/Room'
import { getDaysBetweenDates } from '../../../../shared/lib/helpers/getDaysBetweenDates/getDaysBetweenDates'
import { HotelRate } from '../../../../shared/ui/HotelRate/ui/HotelRate'
import Preloader from '../../../../shared/ui/Preloader/ui/Preloader'
import s from './PaymentHotel.module.scss'

interface PaymentHotelProps {
    className?: string
}

export const PaymentHotel = React.memo((props: PaymentHotelProps) => {
    const { className } = props
    const { id } = useParams()
    const { data, isLoading } = useGetCurrentRoom(id ?? '')

    return (
        <div data-testid='PaymentHotel' className={cl(className, s.container)}>
            {isLoading && <Preloader />}
            {data && (
                <>
                    <img className={s.hotelImage} src={data.hotel.image?.[0] ?? ''} alt='hotel' />
                    <div className={s.info}>
                        <div className={s.title}>{data.hotel.name}</div>
                        <HotelRate className={s.rate} rate={data.hotel.rate} reviewsNumber={data.hotel.reviews_number} />
                        <div className={s.check}>Check in: Sunday, March 18, 2022</div>
                        <div className={s.check}>Check in: Sunday, March 20, 2022</div>
                        <div className={s.check}>{getDaysBetweenDates('2023-10-31', '2023-11-02')} night stay</div>
                    </div>
                </>
            )}
        </div>
    )
})
