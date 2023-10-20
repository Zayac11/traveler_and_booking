import { Col, Row } from 'antd'
import React from 'react'
import { RegisterForm } from '../../../features/AuthWithEmail/ui/RegisterForm/RegisterForm'
import s from './RegisterPage.module.scss'

const RegisterPage = React.memo(() => (
    <Row className={s.container}>
        <Col offset={9} span={6}>
            <h1 className={s.title}>Sign up</h1>
        </Col>
        <Col offset={9} span={6}>
            <RegisterForm />
        </Col>
    </Row>
))

export default RegisterPage
