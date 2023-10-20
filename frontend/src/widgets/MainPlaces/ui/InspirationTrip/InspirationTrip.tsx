import React from 'react'
import s from './InspirationTrip.module.scss'

interface InspirationTripProps {
    title: string
    text: string
    image: string
}

export const InspirationTrip = React.memo((props: InspirationTripProps) => {
    const { image, text, title } = props

    return (
        <div className={s.container}>
            <img className={s.image} src={image} />
            <div className={s.info}>
                <div className={s.title}>{title}</div>
                <div className={s.text}>{text}</div>
            </div>
        </div>
    )
})
