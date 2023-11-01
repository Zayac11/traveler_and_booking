import { Col, Row } from 'antd'
import cl from 'classnames'
import React from 'react'
import fireside from '../../../shared/assets/images/fireside.webp'
import lakeside from '../../../shared/assets/images/lakeside.webp'
import oculous from '../../../shared/assets/images/oculous.webp'
import recce from '../../../shared/assets/images/recce.webp'
import { VacationCard } from '../../../widgets/MainPlaces/ui/VacationCard/VacationCard'
import s from './ProfilePage.module.scss'

interface ProfileProps {
    className?: string
}

const ProfilePage = React.memo((props: ProfileProps) => {
    const { className } = props

    return (
        <div className={cl(className, s.container)}>
            <h3 className={s.title}>Your trips</h3>

            <section className={s.history}>
                <h3 className={s.title}>Based on your history</h3>
                <Row gutter={20}>
                    <Col span={6}>
                        <VacationCard image={lakeside} name={'Lakeside Motel Warefront'} count={253} />
                    </Col>
                    <Col span={6}>
                        <VacationCard image={recce} name={'Recce Graham resort'} count={581} />
                    </Col>
                    <Col span={6}>
                        <VacationCard image={fireside} name={'Fireside Dinners'} count={312} />
                    </Col>
                    <Col span={6}>
                        <VacationCard image={oculous} name={'Oculous Inn Stay'} count={84} />
                    </Col>
                </Row>
            </section>
        </div>
    )
})

export default ProfilePage
