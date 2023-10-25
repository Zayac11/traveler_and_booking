import { Col, Row } from 'antd'
import cl from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../../shared/assets/images/logo.svg'
import s from './Footer.module.scss'

export const Footer = React.memo(() => (
    <Row className={s.footer}>
        <Col xxl={{ offset: 4, span: 16 }} offset={2} span={20}>
            <Row gutter={16}>
                <Col span={5}>
                    <NavLink to='/'>
                        <div className={s.logo}>
                            <Logo /> Traveler and Booking
                        </div>
                    </NavLink>
                    <div className={cl(s.link, s.firstCol)}>Your next goto companion for travel</div>
                </Col>
                <Col span={4}>
                    <div className={s.title}>Company</div>
                    <div className={s.link}>Jobs</div>
                    <div className={s.link}>Newsroom</div>
                    <div className={s.link}>Advertising</div>
                    <div className={s.link}>Contact us</div>
                </Col>
                <Col span={5}>
                    <div className={s.title}>Explore</div>
                    <div className={s.link}>Australia</div>
                    <div className={s.link}>New Zealand</div>
                    <div className={s.link}>United States America (USA)</div>
                    <div className={s.link}>Greece</div>
                    <div className={s.link}>Maldives</div>
                    <div className={s.link}>Singapore</div>
                </Col>
                <Col span={5}>
                    <div className={s.title}>Terms and Policies</div>
                    <div className={s.link}>Privacy Policy</div>
                    <div className={s.link}>Terms of use</div>
                    <div className={s.link}>Accessibility</div>
                    <div className={s.link}>Reward system policy</div>
                </Col>
                <Col span={5}>
                    <div className={s.title}>Help</div>
                    <div className={s.link}>Support</div>
                    <div className={s.link}>Cancel your bookings</div>
                    <div className={s.link}>Use Coupon</div>
                    <div className={s.link}>Refund Policies</div>
                    <div className={s.link}>International Travel Documents</div>
                </Col>
            </Row>
        </Col>
    </Row>
))
