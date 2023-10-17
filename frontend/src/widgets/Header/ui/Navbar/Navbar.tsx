import { Col, Row } from 'antd'
import cl from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.scss'

export const Navbar = React.memo(() => (
    <Row>
        <Col span={6} className={s.linkWrapper}>
            <NavLink className={({ isActive }) => cl(s.link, { [s.active]: isActive })} to='/'>
                Home
            </NavLink>
        </Col>
        <Col span={6} className={s.linkWrapper}>
            <NavLink className={({ isActive }) => cl(s.link, { [s.active]: isActive })} to='/'>
                Activities
            </NavLink>
        </Col>
        <Col span={6} className={s.linkWrapper}>
            <NavLink className={({ isActive }) => cl(s.link, { [s.active]: isActive })} to='/'>
                About
            </NavLink>
        </Col>
        <Col span={6} className={s.linkWrapper}>
            <NavLink className={({ isActive }) => cl(s.link, { [s.active]: isActive })} to='/'>
                Contact
            </NavLink>
        </Col>
    </Row>
))
