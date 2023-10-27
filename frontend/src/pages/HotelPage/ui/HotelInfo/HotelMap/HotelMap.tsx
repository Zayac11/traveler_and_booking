import React from 'react'
import s from './HotelMap.module.scss'

interface HotelMapProps {
    coordinates: string
}

export const HotelMap = React.memo((props: HotelMapProps) => {
    const { coordinates } = props

    const splitCoordinates = coordinates.split(',')

    function init() {
        const hotelMap = new ymaps.Map('map', {
            center: [splitCoordinates[0], splitCoordinates[1]],
            controls: [],
            zoom: 16,
        })
        hotelMap.geoObjects.add(
            new ymaps.Placemark(
                [splitCoordinates[0], splitCoordinates[1]],
                { balloonContent: '<strong>серобуромалиновый</strong> цвет' },
                {
                    preset: 'islands#dotIcon',
                    iconColor: 'blue',
                }
            )
        )
    }
    ymaps.ready(init)

    return <div id='map' className={s.map} />
})
