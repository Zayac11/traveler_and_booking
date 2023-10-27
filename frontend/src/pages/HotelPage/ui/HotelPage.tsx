import cl from 'classnames'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCurrentHotel } from '../../../entities/Hotel'
import s from './HotelPage.module.scss'

interface HotelPageProps {
    className?: string
}

const HotelPage = React.memo((props: HotelPageProps) => {
    const { className } = props
    const { id } = useParams()
    console.log(id)
    const { data } = useGetCurrentHotel(id ?? '')
    return (
        <div className={cl(className, s.container)}>
            <div />
        </div>
    )
})

export default HotelPage
