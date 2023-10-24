import cl from 'classnames'
import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGetFiltersList } from '../../../entities/Filter'
import { useSearchHotel } from '../../../features/SearchHotels'
import { SearchWidget } from '../../../widgets/SearchWidget'
import s from './SearchPage.module.scss'

interface SearchPageProps {
    className?: string
}

const SearchPage = React.memo((props: SearchPageProps) => {
    const [searchParams] = useSearchParams()
    const { className } = props
    const { data: filters } = useGetFiltersList()
    const [searchHotels, { data: hotels }] = useSearchHotel()

    useEffect(() => {
        searchHotels({ place: searchParams.get('city') ?? '' })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={cl(className, s.container)}>
            <SearchWidget
                initialCity={searchParams.get('city') ?? ''}
                initialRooms={Number(searchParams.get('rooms')) ?? 1}
                initialGuests={Number(searchParams.get('guests')) ?? 1}
                initialDateIn={searchParams.get('dateIn') ?? ''}
                initialDateOut={searchParams.get('dateOut') ?? ''}
                onSearch={() => {}}
            />
        </div>
    )
})

export default SearchPage
