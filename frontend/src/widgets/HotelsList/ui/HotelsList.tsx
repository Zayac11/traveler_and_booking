import React from 'react'
import { useSelector } from 'react-redux'
import { Hotel, HotelCard, getHotelFilters } from '../../../entities/Hotel'
import Preloader from '../../../shared/ui/Preloader/ui/Preloader'

interface HotelsListProps {
    hotels: Hotel[]
    isLoading: boolean
}

export const HotelsList = React.memo((props: HotelsListProps) => {
    const { hotels, isLoading } = props
    const filters = useSelector(getHotelFilters)

    return (
        <>
            {isLoading && (
                <div style={{ textAlign: 'center', marginBottom: 8 }}>
                    <Preloader />
                </div>
            )}
            {hotels.map((item: Hotel) => (
                <HotelCard daysCount={filters.daysCount ?? 1} roomsCount={filters.rooms ?? 1} key={item.name} {...item} />
            ))}
        </>
    )
})
