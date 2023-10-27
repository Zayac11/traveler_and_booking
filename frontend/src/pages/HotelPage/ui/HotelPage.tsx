import { Col } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCurrentHotel } from '../../../entities/Hotel'
import Preloader from '../../../shared/ui/Preloader/ui/Preloader'
import { HotelImages } from './HotelImages/HotelImages'
import { HotelInfo } from './HotelInfo/HotelInfo'
import s from './HotelPage.module.scss'

const HotelPage = React.memo(() => {
    const { id } = useParams()
    const { data, isLoading } = useGetCurrentHotel(id ?? '', {
        refetchOnMountOrArgChange: true,
    })
    return (
        <div className={s.container}>
            {isLoading ? (
                <Preloader />
            ) : (
                data && (
                    <>
                        <Col xxl={{ offset: 4, span: 16 }} offset={2} span={20}>
                            <HotelImages images={data?.image ?? []} />
                        </Col>
                        <HotelInfo hotel={data} />
                    </>
                )
            )}
        </div>
    )
})

export default HotelPage
