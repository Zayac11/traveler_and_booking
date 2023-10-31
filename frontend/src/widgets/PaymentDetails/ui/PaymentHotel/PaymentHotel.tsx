import cl from 'classnames'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getHotelFilters } from '../../../../entities/Hotel'
import { useGetCurrentRoom } from '../../../../entities/Room'
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
    const filters = useSelector(getHotelFilters)

    return (
        <div data-testid='PaymentHotel' className={cl(className, s.container)}>
            {isLoading && <Preloader />}
            {data && (
                <>
                    <img className={s.hotelImage} src={data.hotel.image?.[0] ?? ''} alt='hotel' />
                    <div className={s.info}>
                        <div className={s.title}>{data.hotel.name}</div>
                        <HotelRate className={s.rate} rate={data.hotel.rate} reviewsNumber={data.hotel.reviews_number} />
                        <div className={s.check}>Check in: {new Date(filters.checkInDate ?? '').toLocaleDateString()}</div>
                        <div className={s.check}>Check Out: {new Date(filters.checkOutDate ?? '').toLocaleDateString()}</div>
                        <div className={s.check}>{filters.daysCount} night stay</div>
                    </div>
                </>
            )}
        </div>
    )
})
