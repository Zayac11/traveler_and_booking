import React from 'react'
import { useSelector } from 'react-redux'
import { Hotel, HotelCard, getHotelFilters } from '../../../entities/Hotel'

interface HotelsListProps {
    hotels: Hotel[]
}

export const HotelsList = React.memo((props: HotelsListProps) => {
    const { hotels } = props
    const filters = useSelector(getHotelFilters)

    return (
        <>
            {hotels.map((item: Hotel) => (
                <HotelCard daysCount={1} roomsCount={1} key={item.name} {...item} />
            ))}
        </>
    )
})
