import { Col, Row } from 'antd'
import cl from 'classnames'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getHotelFilters } from '../../../entities/Hotel'
import { useSearchHotel } from '../../../features/SearchHotels'
import { SearchFilters } from '../../../widgets/SearchFilters'
import { HotelsList } from '../../../widgets/HotelsList'
import { SearchWidget } from '../../../widgets/SearchWidget'
import s from './SearchPage.module.scss'

interface SearchPageProps {
    className?: string
}

const SearchPage = React.memo((props: SearchPageProps) => {
    const { className } = props
    const filters = useSelector(getHotelFilters)
    const [searchHotels, { data: hotels }] = useSearchHotel()

    useEffect(() => {
        if (filters.city) {
            searchHotels({ place: filters.city })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters.city])

    return (
        <div className={cl(className, s.container)}>
            <SearchWidget />
            <Row gutter={30}>
                <Col span={6}>
                    <SearchFilters />
                </Col>
                <Col span={18}>
                    <h2 className={s.title}>
                        {filters.city}: {hotels?.length} search results found
                    </h2>
                    <HotelsList hotels={hotels ?? []} />
                </Col>
            </Row>
        </div>
    )
})

export default SearchPage
