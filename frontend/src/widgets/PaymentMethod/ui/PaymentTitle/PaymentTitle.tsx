import { Space } from 'antd'
import cl from 'classnames'
import React from 'react'
import s from './PaymentTitle.module.scss'

interface PaymentTitleProps {
    className?: string
    title: string
    Icon?: any
    description?: string
}

export const PaymentTitle = React.memo((props: PaymentTitleProps) => {
    const { className, Icon, title, description } = props

    return (
        <Space size={12} className={cl(s.container, className)}>
            {Icon && <Icon />}
            {title}
            <span className={s.description}>{description}</span>
        </Space>
    )
})
