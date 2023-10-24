import React from 'react'
import { Hotel, HotelCard } from '../../../entities/Hotel'

interface HotelsListProps {
    hotels: Hotel[]
}

export const HotelsList = React.memo((props: HotelsListProps) => {
    const { hotels } = props

    return (
        <>
            {hotels.map((item: Hotel) => (
                <HotelCard key={item.name} {...item} />
            ))}
        </>
    )
})
