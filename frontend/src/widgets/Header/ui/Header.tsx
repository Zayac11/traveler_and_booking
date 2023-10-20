import { Col, Row, Space } from 'antd'
import cl from 'classnames'
import { NavLink } from 'react-router-dom'
import Logo from '../../../shared/assets/images/logo.svg'
import s from './Header.module.scss'
import { Navbar } from './Navbar/Navbar'
import { ProfileHeader } from './ProfileHeader/ProfileHeader'

interface HeaderProps {
    isSearch: boolean
}

export const Header = ({ isSearch }: HeaderProps) => {
    console.log()
    return (
        <header className={cl(s.wrapper, { [s.search]: isSearch })}>
            <Col className={s.header} xxl={{ offset: 4, span: 16 }} offset={2} span={20}>
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
        </header>
    )
}
