import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getHotelFilters } from '../../../entities/Hotel'
import { useSearchHotel } from '../../../features/SearchHotels'
import { HotelsList } from '../../../widgets/HotelsList'
import { SearchFilters } from '../../../widgets/SearchFilters'
import { SearchWidget } from '../../../widgets/SearchWidget'
import s from './SearchPage.module.scss'

const SearchPage = React.memo(() => {
    const filters = useSelector(getHotelFilters)
    const [searchHotels, { data: hotels, isLoading, isUninitialized }] = useSearchHotel()

    useEffect(() => {
        if ((filters.place || filters.place === '') && isUninitialized) {
            searchHotels({ place: filters.place })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters.place])

    return (
        <div>
            <SearchWidget searchHotels={searchHotels} />
            <Row gutter={30}>
                <Col span={6}>
                    <SearchFilters searchHotels={searchHotels} />
                </Col>
                <Col span={18}>
                    <h2 className={s.title}>
                        {filters.place}: {hotels?.length ?? 0} search results found
                    </h2>
                    <HotelsList isLoading={isLoading} hotels={hotels ?? []} />
                </Col>
            </Row>
        </div>
    )
})

export default SearchPage
