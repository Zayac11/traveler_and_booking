import { Col, Row, Space } from 'antd'
import { NavLink } from 'react-router-dom'
import Logo from '../../../shared/assets/images/logo.svg'
import s from './Header.module.scss'
import { Navbar } from './Navbar/Navbar'
import { ProfileHeader } from './ProfileHeader/ProfileHeader'

export const Header = () => (
    <Row>
        <Col className={s.header} offset={4} span={16}>
            <Row>
                <Col span={6}>
                    <NavLink to='/'>
                        <Space className={s.logo}>
                            <Logo /> Traveler and Booking
                        </Space>
                    </NavLink>
                </Col>
                <Col span={12}>
                    <Navbar />
                </Col>
                <Col span={6} style={{ textAlign: 'end' }}>
                    <ProfileHeader />
                </Col>
            </Row>
        </Col>
    </Row>
)
