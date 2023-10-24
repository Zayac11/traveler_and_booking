import React, { useLayoutEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { hotelActions } from '../../../entities/Hotel'
import { useAppDispatch } from '../../../shared/lib/hooks/redux'
import { SearchBar } from '../../SearchBar'
import s from './SearchWidget.module.scss'

export const SearchWidget = React.memo(() => {
    const [searchParams] = useSearchParams()
    const dispatch = useAppDispatch()

    useLayoutEffect(() => {
        dispatch(hotelActions.setActivities([]))
        dispatch(hotelActions.setFacilities([]))
        dispatch(hotelActions.setCity(searchParams.get('city') ?? ''))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

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
