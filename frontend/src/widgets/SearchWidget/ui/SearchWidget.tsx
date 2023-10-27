import React, { useLayoutEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { hotelActions } from '../../../entities/Hotel'
import { getDaysBetweenDates } from '../../../shared/lib/helpers/getDaysBetweenDates/getDaysBetweenDates'
import { useAppDispatch } from '../../../shared/lib/hooks/redux'
import { SearchBar } from '../../SearchBar'
import s from './SearchWidget.module.scss'

export const SearchWidget = React.memo(() => {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useLayoutEffect(() => {
        const dateOut = searchParams.get('dateOut')
        const dateIn = searchParams.get('dateIn')
        if (!dateOut || !dateIn) {
            return navigate('/', { replace: true })
        }
        dispatch(hotelActions.setActivities([]))
        dispatch(hotelActions.setFacilities([]))
        dispatch(hotelActions.setPlace(searchParams.get('place') ?? ''))
        dispatch(hotelActions.setRooms(Number(searchParams.get('rooms')) ?? 1))
        dispatch(hotelActions.setDaysCount(getDaysBetweenDates(dateIn, dateOut)))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    return (
        <>
            <div className={s.search}>
                <SearchBar
                    initialPlace={searchParams.get('place') ?? ''}
                    initialRooms={Number(searchParams.get('rooms')) ?? 1}
                    initialGuests={Number(searchParams.get('guests')) ?? 1}
                    initialDateIn={searchParams.get('dateIn') ?? ''}
                    initialDateOut={searchParams.get('dateOut') ?? ''}
                    onSearch={() => {}}
                />
            </div>
        </>
    )
})
