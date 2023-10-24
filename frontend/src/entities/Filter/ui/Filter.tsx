import React, { PropsWithChildren } from 'react'
import s from './Filter.module.scss'

interface FilterProps {
    title: string
}

export const Filter = React.memo((props: PropsWithChildren<FilterProps>) => {
    const { title, children } = props

    return (
        <div className={s.container}>
            <div className={s.title}>{title}</div>
            <div className={s.content}>{children}</div>
        </div>
    )
})
