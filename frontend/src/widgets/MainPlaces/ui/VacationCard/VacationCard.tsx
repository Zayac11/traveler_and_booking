import React from 'react'
import s from './VacationCard.module.scss'

interface VacationCardProps {
    image: string
    name: string
    count: number
}

export const VacationCard = React.memo((props: VacationCardProps) => {
    const { image, count, name } = props

    return (
        <div className={s.container}>
            <img className={s.image} src={image} alt={name} />
            <div className={s.name}>{name}</div>
            <div className={s.count}>{count} properties</div>
        </div>
    )
})
