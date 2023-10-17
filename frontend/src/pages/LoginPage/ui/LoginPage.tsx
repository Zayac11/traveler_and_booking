import { Col, Row } from 'antd'
import React from 'react'
import { LoginForm } from '../../../features/AuthWithEmail/ui/LoginForm/LoginForm'
import s from './LoginPage.module.scss'

const LoginPage = React.memo(() => (
    <Row className={s.container}>
        <Col offset={9} span={6}>
            <h1 className={s.title}>Sign in</h1>
        </Col>
        <Col offset={9} span={6}>
            <LoginForm />
        </Col>
    </Row>
))

export default LoginPage
