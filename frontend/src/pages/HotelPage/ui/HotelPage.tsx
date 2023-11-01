import { Col } from 'antd'
import React, { useLayoutEffect } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { hotelActions, useGetCurrentHotel } from '../../../entities/Hotel'
import { getDaysBetweenDates } from '../../../shared/lib/helpers/getDaysBetweenDates/getDaysBetweenDates'
import { useAppDispatch } from '../../../shared/lib/hooks/redux'
import Preloader from '../../../shared/ui/Preloader/ui/Preloader'
import { HotelImages } from './HotelImages/HotelImages'
import { HotelInfo } from './HotelInfo/HotelInfo'
import s from './HotelPage.module.scss'
import { HotelRooms } from './HotelRooms/HotelRooms'

const HotelPage = React.memo(() => {
    const { id } = useParams()
    const { data, isLoading } = useGetCurrentHotel(id ?? '', {
        refetchOnMountOrArgChange: true,
    })
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
        dispatch(hotelActions.setRooms(Number(searchParams.get('rooms')) ?? 1))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])
    return (
        <>
            {isLoading ? (
                <Preloader />
            ) : (
                data && (
                    <>
                        <Col xxl={{ offset: 4, span: 16 }} offset={2} span={20}>
                            <HotelImages images={data?.image ?? []} />
                        </Col>
                        <div className={s.info}>
                            <HotelInfo hotel={data} />
                            <HotelRooms rooms={data.rooms} />
                        </div>
                    </>
                )
            )}
        </>
    )
})

export default HotelPage
