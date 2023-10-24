import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { SearchBar } from '../../SearchBar'
import s from './SearchWidget.module.scss'

export const SearchWidget = React.memo(() => {
    const [searchParams] = useSearchParams()

    return (
        <div className={s.searchWrapper}>
            <div className={s.search}>
                <SearchBar
                    initialCity={searchParams.get('city') ?? ''}
                    initialRooms={Number(searchParams.get('rooms')) ?? 1}
                    initialGuests={Number(searchParams.get('guests')) ?? 1}
                    initialDateIn={searchParams.get('dateIn') ?? ''}
                    initialDateOut={searchParams.get('dateOut') ?? ''}
                    onSearch={() => {}}
                />
            </div>
        </div>
    )
})
