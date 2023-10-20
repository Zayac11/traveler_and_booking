import { Col, Row } from 'antd'
import React from 'react'
import australia from '../../../shared/assets/images/australia.webp'
import fireside from '../../../shared/assets/images/fireside.webp'
import greece from '../../../shared/assets/images/greece.webp'
import japan from '../../../shared/assets/images/japan.webp'
import lakeside from '../../../shared/assets/images/lakeside.webp'
import mountains from '../../../shared/assets/images/mountain.webp'
import newZealand from '../../../shared/assets/images/new-zealand.webp'
import oculous from '../../../shared/assets/images/oculous.webp'
import recce from '../../../shared/assets/images/recce.webp'
import sydeny from '../../../shared/assets/images/sydeny.webp'
import vegans from '../../../shared/assets/images/vegans.webp'
import { InspirationTrip } from './InspirationTrip/InspirationTrip'
import s from './MainPlaces.module.scss'
import { VacationCard } from './VacationCard/VacationCard'

export const MainPlaces = React.memo(() => (
    <div className={s.container}>
        <section className={s.section}>
            <h3 className={s.title}>Enjoy your dream vacation</h3>
            <div className={s.text}>
                Plan and book our perfect trip with expert advice, travel tips, destination information and inspiration from us
            </div>
            <Row gutter={20}>
                <Col span={6}>
                    <VacationCard image={australia} name={'Australia'} count={2246} />
                </Col>
                <Col span={6}>
                    <VacationCard image={japan} name={'Japan'} count={1278} />
                </Col>
                <Col span={6}>
                    <VacationCard image={newZealand} name={'New Zealand'} count={480} />
                </Col>
                <Col span={6}>
                    <VacationCard image={greece} name={'Greece'} count={320} />
                </Col>
            </Row>
        </section>
        <section className={s.section}>
            <h3 className={s.title}>Get inspiration for your next trip</h3>
            <Row gutter={20}>
                <Col span={8}>
                    <InspirationTrip
                        image={sydeny}
                        title={'Sydeny’s 10 most fashionable 5 star hotels'}
                        text={'Browse the fastest growing tourism sector in the heart of Australia tourism capital...'}
                    />
                </Col>
                <Col span={8}>
                    <InspirationTrip
                        image={vegans}
                        title={'Top cities for Vegan Travelers'}
                        text={'Top sites where you do not have to worry about being a vegan. Our tourist guide is here...'}
                    />
                </Col>
                <Col span={8}>
                    <InspirationTrip
                        image={mountains}
                        title={'World’s top destinations during and post covid timeline'}
                        text={'Pandemic is still intact and will be here for a longer time. Here’s where your next destination...'}
                    />
                </Col>
            </Row>
        </section>
        <section>
            <h3 className={s.title}>Popular hotels</h3>
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
))
