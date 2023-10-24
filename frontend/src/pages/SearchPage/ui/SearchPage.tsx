import cl from 'classnames'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getHotelFilters } from '../../../entities/Hotel'
import { useSearchHotel } from '../../../features/SearchHotels'
import { SearchWidget } from '../../../widgets/SearchWidget'
import s from './SearchPage.module.scss'

interface SearchPageProps {
    className?: string
}

const SearchPage = React.memo((props: SearchPageProps) => {
    const { className } = props
    // const { data: filters } = useGetFiltersList()
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
        </div>
    )
})

export default SearchPage
