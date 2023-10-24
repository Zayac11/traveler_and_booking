import cl from 'classnames'
import React, { PropsWithChildren } from 'react'
import s from './Filter.module.scss'

interface FilterProps {
    title: string
    className?: string
}

export const Filter = React.memo((props: PropsWithChildren<FilterProps>) => {
    const { title, children, className } = props

    return (
        <div className={cl(s.container, className)}>
            <div className={s.title}>{title}</div>
            <div className={s.content}>{children}</div>
        </div>
    )
})
