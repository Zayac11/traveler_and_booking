import { Col, Row } from 'antd'
import cl from 'classnames'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getHotelFilters, hotelActions } from '../../../entities/Hotel'
import { useSearchHotel } from '../../../features/SearchHotels'
import { useAppDispatch } from '../../../shared/lib/hooks/redux'
import { HotelsList } from '../../../widgets/HotelsList'
import { SearchFilters } from '../../../widgets/SearchFilters'
import { SearchWidget } from '../../../widgets/SearchWidget'
import s from './SearchPage.module.scss'

interface SearchPageProps {
    className?: string
}

const SearchPage = React.memo((props: SearchPageProps) => {
    const { className } = props
    const dispatch = useAppDispatch()
    const filters = useSelector(getHotelFilters)
    const [searchHotels, { data: hotels, isLoading }] = useSearchHotel()

    useEffect(() => {
        if (filters.place || filters.place === '') {
            searchHotels({ place: filters.place })
            dispatch(hotelActions.setPlace(filters.place))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters.place])

    return (
        <div className={cl(className, s.container)}>
            <SearchWidget />
            <Row gutter={30}>
                <Col span={6}>
                    <SearchFilters />
                </Col>
                <Col span={18}>
                    <h2 className={s.title}>
                        {filters.place}: {hotels?.length} search results found
                    </h2>
                    <HotelsList isLoading={isLoading} hotels={hotels ?? []} />
                </Col>
            </Row>
        </div>
    )
})

export default SearchPage
