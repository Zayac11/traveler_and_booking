import React from 'react'
import { SearchBar } from '../../SearchBar'
import s from './SearchWidget.module.scss'

export interface SearchWidgetProps {
    initialCity: string
    initialRooms: number
    initialGuests: number
    initialDateIn: string
    initialDateOut: string
    onSearch: () => void
}

export const SearchWidget = React.memo((props: SearchWidgetProps) => (
    <div className={s.searchWrapper}>
        <div className={s.search}>
            <SearchBar {...props} />
        </div>
    </div>
))
