import { Button } from 'antd'
import React from 'react'
import hand from '../../../shared/assets/images/smartphone.webp'
import s from './MainAppBanner.module.scss'

export const MainAppBanner = React.memo(() => (
    <div className={s.container}>
        <h4 className={s.title}>Download the mobile application for bonus coupons and travel codes</h4>
        <Button type='primary'>Download mobile app</Button>
        <img className={s.smartphone} src={hand} alt='hand' />
    </div>
))
