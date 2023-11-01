import React from 'react'
import { Hotel, HotelCard } from '../../../entities/Hotel'
import Preloader from '../../../shared/ui/Preloader/ui/Preloader'

interface HotelsListProps {
    hotels: Hotel[]
    isLoading: boolean
}

export const HotelsList = React.memo((props: HotelsListProps) => {
    const { hotels, isLoading } = props

    return (
        <>
            {isLoading && (
                <div style={{ textAlign: 'center', marginBottom: 8 }}>
                    <Preloader />
                </div>
            )}
            {hotels.map((item: Hotel) => (
                <HotelCard key={item.name} {...item} />
            ))}
        </>
    )
})
