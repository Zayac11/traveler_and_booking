import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchBar, SearchBarSchema } from '../../SearchBar'
import s from './MainSearch.module.scss'

export const MainSearch = React.memo(() => {
    const navigate = useNavigate()

    const handleSubmit = (data: SearchBarSchema) => {
        navigate(
            '/search/' +
                `?city=${data.city ?? ''}&dateIn=${data.dateIn ?? ''}&dateOut=${data.dateOut ?? ''}&guestsCount=${
                    data.guestsCount ?? ''
                }&guests=${data.guests ?? ''}&rooms=${data.rooms ?? ''}`
        )
    }
    return (
        <div className={s.container}>
            <h1 className={s.title}>Enjoy Your Dream Vacation</h1>
            <h2 className={s.subtitle}>
                Plan and book our perfect trip with expert advice, travel tips, destination information and inspiration from us
            </h2>
            <div className={s.searchBar}>
                <SearchBar onSearch={handleSubmit} />
            </div>
        </div>
    )
})
