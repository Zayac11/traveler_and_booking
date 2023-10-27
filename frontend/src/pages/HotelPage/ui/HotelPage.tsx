import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCurrentHotel } from '../../../entities/Hotel'
import Preloader from '../../../shared/ui/Preloader/ui/Preloader'
import { HotelImages } from './HotelImages/HotelImages'
import s from './HotelPage.module.scss'

const HotelPage = React.memo(() => {
    const { id } = useParams()
    const { data, isLoading } = useGetCurrentHotel(id ?? '', {
        refetchOnMountOrArgChange: true,
    })
    return (
        <div className={s.container}>
            {isLoading ? (
                <Preloader />
            ) : (
                <>
                    <HotelImages images={data?.image ?? []} />
                </>
            )}
        </div>
    )
})

export default HotelPage
